// latest-resources.js
// Loads FAQ data from resources.json and renders an accordion interface.

// Escape HTML to prevent injection when rendering user input
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
}

// Render the accordion with a given list of items
function renderAccordion(items) {
  const container = document.getElementById('accordion');
  container.innerHTML = '';
  if (!items || items.length === 0) {
    container.innerHTML = '<p>No questions found. Try a different search term.</p>';
    return;
  }
  items.forEach((item) => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = item.question;
    const content = document.createElement('div');
    content.classList.add('answer');
    // Build answer HTML
    let answerHtml = '<p>' + escapeHTML(item.answer) + '</p>';
    if (item.printables && item.printables.length > 0) {
      answerHtml += '<p><strong>Related templates:</strong></p><ul>';
      item.printables.forEach(function(pt) {
        // Convert printable name to file name by replacing spaces and special characters
        const fileName = pt.replace(/[^A-Za-z0-9]/g, '_') + '.html';
        answerHtml += '<li><a href="../printables/' + encodeURIComponent(fileName) + '" target="_blank">' + escapeHTML(pt) + '</a></li>';
      });
      answerHtml += '</ul>';
    }
    content.innerHTML = answerHtml;
    details.appendChild(summary);
    details.appendChild(content);
    container.appendChild(details);
  });
}

// Filter items by search query
function filterResources(query) {
  const q = query.toLowerCase();
  return window.resourcesData.filter(item =>
    item.question.toLowerCase().includes(q) ||
    item.answer.toLowerCase().includes(q) ||
    (item.keywords && item.keywords.some(kw => kw.includes(q)))
  );
}

// Load resources and set up search
function initialiseResources() {
  fetch('resources.json')
    .then(response => response.json())
    .then(data => {
      window.resourcesData = data;
      renderAccordion(data);
    })
    .catch(err => {
      console.error('Failed to load resources.json', err);
      const container = document.getElementById('accordion');
      container.innerHTML = '<p>Failed to load FAQs.</p>';
    });
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (!q) {
        renderAccordion(window.resourcesData);
      } else {
        const results = filterResources(q);
        renderAccordion(results);
      }
    });
  }
}

// Initialise when DOM is ready
document.addEventListener('DOMContentLoaded', initialiseResources);