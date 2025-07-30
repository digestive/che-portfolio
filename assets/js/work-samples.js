// Dynamically loads and displays Markdown bug tickets in the Work Samples section
// Shows first ticket, with a "Show More" button to expand/collapse full content

const samplesSection = document.getElementById('samples');



async function fetchMarkdown(url) {
  const response = await fetch(url);
  return await response.text();
}

// Generic loader for any work sample section
async function loadWorkSamples(containerId, ticketList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.className = 'work-sample-tickets';
  container.innerHTML = '';
  for (let i = 0; i < ticketList.length; i++) {
    const md = await fetchMarkdown(ticketList[i]);
    const html = markdownToHtml(md);
    const ticketDiv = document.createElement('div');
    ticketDiv.className = 'ticket-card';
    ticketDiv.innerHTML = html;
    if (i > 0) {
      ticketDiv.classList.add('ticket-collapsed');
      ticketDiv.style.display = 'none';
      // Add fade overlay to collapsed card
      const fade = document.createElement('div');
      fade.className = 'ticket-fade';
      ticketDiv.appendChild(fade);
    }
    container.appendChild(ticketDiv);
  }
  if (ticketList.length > 1) {
    const showMoreLink = document.createElement('span');
    showMoreLink.textContent = 'Show More';
    showMoreLink.className = 'show-more-link';
    showMoreLink.style.display = 'block';
    showMoreLink.style.margin = '1.2em auto 0 auto';
    showMoreLink.style.textAlign = 'center';
    showMoreLink.tabIndex = 0;
    showMoreLink.setAttribute('role', 'button');
    showMoreLink.setAttribute('aria-pressed', 'false');
    let expanded = false;
    showMoreLink.onclick = function() {
      expanded = !expanded;
      for (let i = 1; i < container.children.length; i++) {
        const el = container.children[i];
        if (expanded) {
          el.style.display = '';
          el.classList.remove('ticket-collapsed');
          // Remove fade overlay if present
          const fade = el.querySelector('.ticket-fade');
          if (fade) fade.remove();
        } else {
          el.style.display = 'none';
          el.classList.add('ticket-collapsed');
          // Add fade overlay if missing
          if (!el.querySelector('.ticket-fade')) {
            const fade = document.createElement('div');
            fade.className = 'ticket-fade';
            el.appendChild(fade);
          }
        }
      }
      showMoreLink.textContent = expanded ? 'Show Less' : 'Show More';
      showMoreLink.setAttribute('aria-pressed', expanded ? 'true' : 'false');
      if (!expanded && container.children.length > 1) {
        container.children[1].style.display = '';
        container.children[1].classList.add('ticket-collapsed');
        // Add fade overlay if missing
        const el = container.children[1];
        if (!el.querySelector('.ticket-fade')) {
          const fade = document.createElement('div');
          fade.className = 'ticket-fade';
          el.appendChild(fade);
        }
      }
      showMoreLink.style.display = 'block';
    };
    container.appendChild(showMoreLink);
    if (container.children.length > 1) {
      container.children[1].style.display = '';
      container.children[1].classList.add('ticket-collapsed');
    }
  }
}

function markdownToHtml(md) {
  // Use marked.js for full markdown parsing
  if (window.marked) {
    return marked.parse(md);
  } else {
    return md;
  }
}


// For now, load bug tickets as before
async function loadBugTickets() {
  await loadWorkSamples('bug-tickets-container', [
    'assets/tickets/bug-ticket-1.md',
    'assets/tickets/bug-ticket-2.md',
    'assets/tickets/bug-ticket-3.md',
    'assets/tickets/bug-ticket-4.md'
  ]);
}


// Load PRDs (add your markdown files to the array below)
async function loadPRDs() {
  await loadWorkSamples('prd-container', [
    'assets/documents/prd-example-1.md',
    'assets/documents/prd-example-2.md'
  ]);
}

// Load project docs (add your markdown files to the array below)
async function loadProjectDocs() {
  await loadWorkSamples('project-docs-container', [
    'assets/tickets/project-ticket-1.md',
    'assets/tickets/project-ticket-2.md'
  ]);
}

document.addEventListener('DOMContentLoaded', () => {
  loadBugTickets();
  loadPRDs();
  loadProjectDocs();

  // Tab navigation for Work Samples
  const tabButtons = document.querySelectorAll('.work-samples-tab');
  const tabPanels = document.querySelectorAll('.work-samples-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      const panel = document.getElementById(tab + '-tab');
      if (panel) panel.classList.add('active');
    });
  });

  // ...no hamburger menu logic here; handled in nav.js...
});
