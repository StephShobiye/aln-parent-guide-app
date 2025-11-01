// chatbot.js
// Simple rule‑based chatbot for the ALN Parent Guide App.  The chatbot searches for
// predefined keyword combinations and returns canned responses.  If no rule
// matches, it falls back to a generic message encouraging the user to use the
// search feature or browse the FAQs.

// Define the rules.  Each rule has an array of keywords (lower‑case) and a
// response string.  All keywords in the array must appear in the user’s
// question for the rule to match.
const CHATBOT_RULES = [
  {
    keywords: ['idp', 'assessment'],
    response: 'To request an IDP assessment, write to the school’s ALNCo or local authority explaining your child’s needs and why extra support is required. Use the “Request an IDP assessment” template for guidance.'
  },
  {
    keywords: ['review', 'urgent'],
    response: 'If you need an urgent IDP review, explain what has changed and provide supporting evidence. You can use our “IDP Review Request Letter” template.'
  },
  {
    keywords: ['unsafe', 'placement'],
    response: 'If your child’s placement is unsafe or breaking down, request an urgent review and keep records of incidents. Use the “Advocacy Letter” template to ask for interim measures and support.'
  },
  {
    keywords: ['reasonable', 'adjustments'],
    response: 'Reasonable adjustments should be recorded in the IDP and classroom plans. Examples include sensory breaks, assistive technology and flexible timetables. Our “Patient Adjustment Sheet – Child/Adult” helps you identify adjustments to request.'
  },
  {
    keywords: ['provision', 'not', 'delivered'],
    response: 'If provision in the IDP is not delivered, record missed sessions and ask the school or LA for a compliance check. The “Provision not delivered” template will help you log and chase up missed support.'
  },
  {
    keywords: ['eotas'],
    response: 'Education Otherwise Than At School (EOTAS) should be tailored to your child. Ask for hours, subjects and therapies to be specified. Read the “EOTAS Entitlement Guide” for details.'
  },
  {
    keywords: ['tribunal', 'appeal'],
    response: 'You can appeal certain decisions to the Education Tribunal for Wales. Appeals must usually be made within 8 weeks. Use the “Tribunal Appeal Letter” template and seek independent advice.'
  },
  {
    keywords: ['cross', 'border'],
    response: 'If your child needs an out‑of‑area or cross‑border placement, gather evidence that local provision is unsuitable and request that the local authority name the alternative placement in the IDP. See the “Cross‑Border Toolkit” for guidance.'
  },
  {
    keywords: ['transition', 'year', '7'],
    response: 'Start planning for the move to secondary school early. Request a transition review, visit schools and use the “Year 7 Transition Tips” checklist to prepare.'
  },
  {
    keywords: ['post', '16'],
    response: 'Post‑16 options include college, sixth form, apprenticeships and EOTAS packages. Review the IDP in Year 11 and consult our “Post‑16 Transition Guide”.'
  },
  {
    keywords: ['complaint'],
    response: 'Begin with the school or LA complaints process. Use the “Complaint Letter” template to set out your concerns and request a review. You can appeal unresolved decisions to the Education Tribunal.'
  }
];

const FALLBACK_MESSAGE = 'Sorry, I’m not sure about that. Please try asking your question a different way or use the search box above to browse all FAQs.';

// Handle user input when the user presses Enter in the chatbot input field
function handleChatInput(event) {
  if (event.key !== 'Enter') return;
  const input = event.target;
  const query = input.value.trim();
  if (!query) return;
  appendChatMessage('You', query);
  const response = getChatbotResponse(query);
  appendChatMessage('Guide', response);
  input.value = '';
}

// Determine the chatbot response based on the rules
function getChatbotResponse(query) {
  const qLower = query.toLowerCase();
  for (let i = 0; i < CHATBOT_RULES.length; i++) {
    const rule = CHATBOT_RULES[i];
    // Check that all keywords in the rule are present in the query
    let match = true;
    for (let k = 0; k < rule.keywords.length; k++) {
      if (!qLower.includes(rule.keywords[k])) {
        match = false;
        break;
      }
    }
    if (match) {
      return rule.response;
    }
  }
  return FALLBACK_MESSAGE;
}

// Append a message to the chatbot output area
function appendChatMessage(sender, message) {
  const output = document.getElementById('chatbot-output');
  const wrapper = document.createElement('div');
  wrapper.classList.add('chat-message');
  const senderSpan = document.createElement('strong');
  senderSpan.textContent = sender + ': ';
  wrapper.appendChild(senderSpan);
  const messageSpan = document.createElement('span');
  messageSpan.textContent = message;
  wrapper.appendChild(messageSpan);
  output.appendChild(wrapper);
  // Scroll to bottom
  output.scrollTop = output.scrollHeight;
}

// Initialise chatbot on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chatbot-input');
  if (input) {
    input.addEventListener('keypress', handleChatInput);
  }
});