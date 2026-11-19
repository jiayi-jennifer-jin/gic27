# Gender-inclusive Cities — GitHub Pages website v10

This version implements the agreed skyline hero and the condensed Speakers-to-Conversation transition. The headline and partner marks remain separate HTML elements so they look crisp on desktop and mobile.

## Hero design

- White left-aligned subtitle, no vertical rule.
- Two distinct organisation rows: **Lead Organisations** (University of Strathclyde, British Academy) and **Partner Organisations** (University of Glasgow, Glasgow City Council).
- Both headings and all logos stay **white**, without gold accents or decorative separators.
- The second logo in each row aligns vertically: Glasgow City Council underneath the British Academy.
- Clean AI-generated skyline in `assets/skyline-ai-clean.webp` (no baked-in text, logos, or white rectangles).
- The original image assets remain in the ZIP for reference; v5 uses `skyline-ai-clean.webp`.

## Deploy to GitHub Pages

Upload the **contents of this folder** (`index.html`, `assets/`, `.nojekyll`, `README.md`) to the root of the `main` branch. Commit. GitHub Pages normally redeploys automatically. If previous deployments were stuck in `purging_cdn`, check **Actions** rather than repeatedly uploading.

## Publication notes

The organisation marks were extracted from the supplied mock-up and should be replaced with approved official monochrome logos before final public publication. The user-proposed June 2027 dates in the rest of the site have been left unchanged; verify the final date/venue and institutional roles before promoting publicly. Speakers also need final confirmation.

## v6 content change

- The **Speakers line-up** heading stays visible, along with the exact text:
  **Full abstracts and programme details will be published later.**
- The speaker-group details and disclaimer remain in `index.html`, but are hidden with the HTML `hidden` attribute. To show these again later, remove `hidden` and `data-deferred-speaker-content` from the corresponding elements.
- The next section is now titled **THE CONVERSATION** (the old `02 /` prefix is removed).
- Theme and programme cross-links have been adjusted so they do not lead to hidden speaker cards.
- All other v5 content is unchanged. The dates and location still require final confirmation.


## v7 update — theme disclosures

The Conversation now features four native `<details>` / `<summary>` disclosure panels (all initially closed). Each contains the corresponding **Main purpose/theme of session** text and key questions from the British Academy application. No shaded background is used inside expanded panels. The existing hidden speaker bios remain in HTML and can be unhidden later.


## v8 changes
- The introductory sentence beside “Four ways of seeing the city” is right-aligned to match the Speakers notice.
- The four collapsible session descriptions now use the exact four paragraphs supplied by the organiser, in larger type, without card backgrounds.
- The PROGRAMME, PRACTICAL INFORMATION and ENQUIRIES labels match the size and styling of THE CONVERSATION; numerical prefixes have been removed.
- The rest of the page, including hero imagery, dates, logo composition and hidden speaker roster, is unchanged.


## v9 visual changes
- Speakers line-up. headline matches The Conversation heading font size.
- The Conversation introduction expanded to two lines on desktop, with right alignment preserved.
- Larger/heavier accordion chevrons, no content/background changes.
- Full-width divider between Speakers and The Conversation, matching Themes/Programme separator.


## v10 divider correction
- Speakers retains its **content-width (non-full-bleed) bottom divider** just under the heading area.
- A separate **full-width section border** follows after generous spacing, matching the visual sequence between Theme 04 and Programme.
- All other content, layout, and four accordion interactions are unchanged from v9.


## v11 Programme update
- Two-day proposed programme mirrors the provided design.
- Day 1: 01 June 2027, AM Planetary Talks + Session 01; PM Session 02 + Conference Dinner (Registration Required).
- Day 2: 02 June 2027, AM Planetary Talks + Session 03; PM Session 04 + Closing Discussion and Reflections.
- Session links jump to their thematic descriptions.
- Dates and programme entries are proposed and must be confirmed before official publication.
- IMPORTANT: “Planetary Talks” is transcribed exactly from the screenshot; if this is intended to be “Plenary Talks”, update both occurrences in index.html.


## v12 Programme typography and alignment
Only the Programme section has changed since v11:
- Replaced the introductory paragraph with the approved wording for 1–2 June.
- Matched "PROPOSED SESSION STRUCTURE" typography and vertical position with "PROGRAMME".
- Aligned the lower edges of the session numbers and titles; slightly reduced the 01–04 numbers.
- Wrote day headings as "1st June 2027" and "2nd June 2027".
- Increased the "FULL PROGRAMME TO FOLLOW" notice from 12px to 24px on desktop (22px mobile).
- Replaced small glyph arrows with large, thick-stroked blue diagonal SVG arrows, visually matching the theme controls.
- Kept all links, proposal session descriptions, and other sections unchanged.

## v13 — convenor details update
- Both contact email links now use jiayi.jin@strath.ac.uk.
- Jiayi Jin's hidden speaker affiliation, Practical Information and footer all say University of Strathclyde.
- Removed the former Northumbria-specific department name from her profile; retained the existing Senior Lecturer title.
- Northumbria affiliation for the separate speaker Dr Angelika Strohmayer is unchanged.
- No other website content or styling was modified.

## v14 — contact compatibility and venue attribution
- The top **Get in touch** link scrolls to the on-page Contact section instead of relying on a registered mailto handler.
- Contact now displays the actual email address visibly, with an optional mailto link and copy-email action with Clipboard API/legacy fallback. Users can always select and copy the text manually.
- The top TIC fact now identifies **University of Strathclyde**.
- No changes to the abstract submission flow or external email storage.


## v15 — above-hero header and facts
- Logo-adjacent brand copy is now CONFERENCE.
- Main navigation labels Speakers, Themes, Programme, Information and Get in touch use one matched (slightly larger) font size.
- Venue is one line: TIC, University of Strathclyde, Glasgow, UK.
- All three fact items share responsive type sizes; on small screens they stack individually without breaking the venue text.
- Hero, all lower-page content, assets and links are untouched.


## v16 — upper header and essentials strip (16 Nov 2026)
- The brand label is `Conference` (initial capital only) and matches nav font size, weight and letter spacing.
- The `Get in touch` underline now sits directly beneath the label; its arrow is the exact 40px blue SVG path and stroke used in Programme (scaled to 34px at mobile viewport widths).
- Venue text is all capitals: `TIC, UNIVERSITY OF STRATHCLYDE, GLASGOW, UK`.
- The three facts are two CSS pixels larger than the equivalent v15 responsive sizes. On small screens they remain individually stacked, with venue on a single line.
- Hero, all subsequent sections, image assets, links and interactivity are untouched.


## v17 — Speakers / The Conversation divider refinement
- Removed the short content-width divider below “Speakers line-up.”
- Kept a single full-width divider between Speakers and The Conversation.
- Matched the whitespace above and below that divider to the other major section dividers.
- No changes were made to the hero, themes content, programme, contact details, or domain setup.

## v18 — Programme spacing and arrow
- Unifies the vertical rhythm of right-hand agenda entries beneath “PROPOSED SESSION STRUCTURE”.
- Aligns AM / PM markers with their associated first event row.
- Reduces “FULL PROGRAMME TO FOLLOW” to the date-heading type scale.
- Reuses the exact thick blue arrow SVG path used by programme session links.
- All other sections, programme wording, dates and links are unchanged.


## v19 — Practical Information photographic section
- Added the supplied image `assets/glitchy-night-street-crossing.webp` as a full-width background for Practical Information (not the Hero).
- Changed left-side copy to white, keeping the italic phrase in the same gold as the Hero.
- Matched Practical Information section minimum heights to Hero at each viewport breakpoint.
- Temporarily hid the right-hand logistical text via CSS, without removing its HTML for later editing.
- Left all other sections and submission links unchanged.


## v20 — Custom abstract submission page (staged, not yet receiving data)
- Added `/submit/` with a responsive, custom-designed abstract submission page.
- The homepage top-right `ABSTRACT SUBMISSION (01 FEB 2027)` now opens `/submit/`.
- Core submission form uses 500-word live count, four themes, author declaration, interest in optional future full-paper publication, and a required privacy acknowledgment.
- No data are collected until the separate Apps Script service is authorised, configured and enabled, and an approved institutional privacy notice is linked.
- The Apps Script service is supplied in the SEPARATE backend ZIP; never upload its private Sheet data to GitHub.
- Because the response is a server-confirmed POST receipt, the browser navigates to the Google-hosted confirmation page after successful submission.


## v21 (19 November 2026) — submission editorial review
- Submission page intro updated to “We invite contributions ...”.
- Removed “Before You Submit”, “One abstract. Four conversations.” and 3-step tips; the four conference themes remain as a compact reminder aligned at the top with the right-hand form.
- Added co-author accuracy instruction and renamed section 02 to “Title and abstract”.
- Publication copy now distinguishes a planned ISBN Book of Abstracts from a proposed (not yet accepted) British Academy Proceedings volume; no unverified 2027 OA promise.
- Full-paper file upload has NOT been added: storage permissions / file handling require separate engineering and testing.
- University of Strathclyde's conferences-and-events policy has NOT been adopted as the independent conference's privacy policy without confirmation that it covers this independently managed Google account.
- Config preserves the currently supplied public `/exec` endpoint, but `open:false` and `privacyNoticeUrl:""` remain unchanged. Backend does not need to be redeployed for these editorial changes.
