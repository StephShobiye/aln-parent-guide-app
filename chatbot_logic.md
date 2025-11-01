# Chatbot Logic – Rule Based

This file defines keyword triggers and responses for the in‑app chatbot.  The chatbot runs entirely in the user’s browser using simple JavaScript; no personal data is collected or transmitted.  When a parent types a question, the chatbot searches the input for keywords and then displays the corresponding response.  Where a printable template can help, the response includes a link to the relevant file in the `printables` folder.  If no keywords match, the chatbot falls back to a generic message encouraging the parent to browse the FAQs or contact independent support.

## Rules

Below is a list of high‑level triggers and the corresponding responses.  The keywords column lists lower‑case words; if any of these appear in the user’s question, the associated response is shown.  You can add more keywords or rules as needed.

| Keywords | Response |
| --- | --- |
| idp, assessment | *Request an IDP assessment:* To start the process, write to the school’s ALNCo or local authority explaining your child’s needs and why additional support is required.  Keep copies of all correspondence.  Use our **Request an IDP assessment** template in the printables folder to structure your letter. |
| review, urgent | *Urgent IDP review:* If your child’s needs have changed or the placement has broken down, you can request an urgent review.  Explain what has changed and provide evidence.  Download the **IDP Review Request Letter** template to get started. |
| unsafe, placement, breakdown | *Placement breakdown or safety concerns:* Keep records of incidents, exclusions and reduced timetables.  Ask for interim measures (safe space, timetable adjustments) and request a review.  The **Advocacy Letter** template includes wording to request help and raise safety concerns. |
| reasonable, adjustments | *Reasonable adjustments:* Adjustments should be recorded in the IDP and classroom plans.  Examples include sensory breaks, assistive technology and flexible timetables.  Use the **Patient Adjustment Sheet (Child)** or **Patient Adjustment Sheet (Adult)** to identify and request adjustments. |
| provision, not delivered, missed | *Provision not delivered:* If therapies or support specified in the IDP are not delivered, raise this in writing and ask for a compliance check.  Keep a log of missed sessions.  The **Provision not delivered** template helps you record and chase missed support. |
| eotas, hours, entitlement | *EOTAS questions:* EOTAS should be tailored to the learner’s needs; there is no fixed number of hours.  Ask for subjects, therapies and transition goals to be specified.  See the **EOTAS Entitlement Guide** and **EOTAS Rejection Checklist** for more information. |
| tribunal, appeal | *Education Tribunal:* You can appeal certain decisions (refusal to assess, contents of an IDP, refusal to deliver provision) to the Education Tribunal for Wales.  Appeals must usually be made within 8 weeks.  Use our **Tribunal Appeal Letter** as a starting point and seek independent legal advice where needed. |
| cross border, out of area, specialist | *Cross‑border or out‑of‑area placements:* The local authority can name an out‑of‑area or cross‑border placement on an IDP if local provision cannot meet needs.  See the **Cross‑Border Toolkit** for guidance on evidence and steps. |
| transition, year 7 | *Transition to Year 7:* Start planning in Year 5/6.  Request a transition review, tour prospective schools and agree support.  Use the **Year 7 Transition Tips** printable to structure your planning. |
| post‑16, college | *Post‑16 options:* IDPs can continue past age 16.  Explore mainstream college, sixth form, apprenticeships, supported internships and EOTAS packages.  The **Post‑16 Transition Guide** printable contains questions to ask and notes pages. |
| complaint, disagree, complaint letter | *Complaints and disagreement:* Start with the school/LA complaints process.  You can request meetings and use independent disagreement resolution.  If you need to challenge a placement or decision, use the **Complaint Letter** template and consider mediation or a tribunal appeal. |

## Fallback response
If none of the above keywords match, the chatbot should display:

> **Sorry, I’m not sure about that.**  Please try asking your question a different way or use the search box above to browse all FAQs.  For complex or urgent issues, consider contacting an independent ALN adviser.
