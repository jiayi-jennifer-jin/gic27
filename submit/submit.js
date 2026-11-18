/* GIC 2027 public submission frontend. POST is a regular HTML form navigation.
   This intentionally avoids CORS fetch, silent no-cors POST and iframe receipts.
   Google Apps Script returns the actual saved reference on its receipt page. */
(function () {
  'use strict';
  const form = document.getElementById('abstract-form');
  const submitButton = document.getElementById('send-button');
  const banner = document.getElementById('submission-availability');
  const message = document.getElementById('submission-message');
  const abstract = document.getElementById('abstract_text');
  const counter = document.getElementById('word-count');
  const wordFeedback = document.getElementById('word-feedback');
  const noticeLink = document.getElementById('privacy-notice-link');
  const noticePending = document.getElementById('privacy-notice-pending');
  const cfg = window.GIC_SUBMISSION_CONFIG || {};
  const limit = 500;

  function countWords(value) {
    const trimmed = value.trim();
    return trimmed ? trimmed.split(/\s+/u).length : 0;
  }
  function refreshWordCount() {
    const n = countWords(abstract.value);
    const excessive = n > limit;
    counter.textContent = n + ' / ' + limit + ' words';
    counter.classList.toggle('over-limit', excessive);
    wordFeedback.classList.toggle('over-limit', excessive);
    wordFeedback.textContent = excessive
      ? 'Please remove ' + (n - limit) + ' word(s) before submitting.'
      : 'Maximum 500 words (whitespace-delimited count). Title and author details are excluded.';
    abstract.setCustomValidity(excessive ? 'Please reduce the abstract to 500 words or fewer.' : '');
    return !excessive;
  }
  abstract.addEventListener('input', refreshWordCount);
  refreshWordCount();

  const uuid = window.crypto && typeof window.crypto.randomUUID === 'function'
    ? window.crypto.randomUUID()
    : 'gic-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
  document.getElementById('request_uid').value = uuid;

  const endpointReady = /^https:\/\/script\.google\.com\/macros\/s\/[^\/\s]+\/exec$/.test(cfg.endpoint || '');
  const noticeReady = /^https:\/\/[^\s]+$/.test(cfg.privacyNoticeUrl || '');
  const deadline = Date.parse(cfg.deadlineUtc || '2027-02-01T23:59:59Z');
  const expired = !Number.isNaN(deadline) && Date.now() > deadline;
  const live = cfg.open === true && endpointReady && noticeReady && !expired;

  if (noticeReady) {
    noticeLink.href = cfg.privacyNoticeUrl;
    noticeLink.hidden = false;
    noticePending.hidden = true;
  }
  if (live) {
    form.action = cfg.endpoint;
    submitButton.disabled = false;
    submitButton.innerHTML = 'SUBMIT ABSTRACT <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6 M8 6 H18 V16" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    banner.classList.add('is-live');
    banner.querySelector('strong').textContent = 'Submissions are open';
    banner.querySelector('span').textContent = 'Your abstract will be securely submitted to the conference collection service. A confirmation reference is displayed after successful receipt.';
    message.textContent = 'You will be taken to a confirmation page after submitting. No Google account is required.';
  } else if (expired) {
    banner.classList.add('is-closed');
    banner.querySelector('strong').textContent = 'Submission deadline has passed';
    banner.querySelector('span').textContent = 'The abstract submission deadline was 01 February 2027, 23:59 GMT. Please contact the organisers for enquiries.';
    message.textContent = 'Online abstract submission is closed.';
  }
  form.addEventListener('submit', function (event) {
    if (!live || !refreshWordCount()) {
      event.preventDefault();
      if (live && !refreshWordCount()) {
        abstract.reportValidity();
        abstract.focus();
      }
      return;
    }
    // Native form validation is applied by the browser before this event.
    // Keep the button enabled so the POST request completes normally.
    message.textContent = 'Transferring your submission to the secure confirmation service…';
  });
})();
