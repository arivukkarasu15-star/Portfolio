/**
 * =========================================================================
 * MAIN JAVASCRIPT LOGIC (Pure Vanilla JS)
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjects();
  initScrollTop();
});

/* -------------------------------------------------------------------------
   1. NAVBAR & SCROLL SPY
   ------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const ribbon = navbar?.querySelector('.nav-links');
  const sections = document.querySelectorAll('section[id]');

  const setMobileMenuOpen = (open) => {
    mobileMenu?.classList.toggle('open', open);
    mobileToggle?.setAttribute('aria-expanded', String(open));
    mobileToggle?.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  // Prevent a long press from opening the browser's link menu or dragging a tab.
  ribbon?.addEventListener('contextmenu', (event) => event.preventDefault());
  ribbon?.addEventListener('dragstart', (event) => event.preventDefault());

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Scroll listener for sticky styling & active section spy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    const scrollPosition = window.scrollY + 120;
    const scrollBottom = (window.innerHeight + Math.round(window.scrollY)) >= (document.documentElement.scrollHeight - 50);

    if (scrollBottom) {
      setActiveLink(sections[sections.length - 1]?.id || 'home');
      return;
    }

    let currentId = 'home';
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    setActiveLink(currentId);
  }, { passive: true });

  // Handle click on nav links: immediately highlight the clicked link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        setActiveLink(href.substring(1));
      }
    });
  });

  // Mobile Menu Toggle
  if (mobileToggle && mobileMenu) {
    const closeMobileMenuOnDesktop = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    closeMobileMenuOnDesktop();
    window.addEventListener('resize', closeMobileMenuOnDesktop);
    window.addEventListener('scroll', () => {
      setMobileMenuOpen(false);
    }, { passive: true });

    mobileToggle.addEventListener('click', () => {
      setMobileMenuOpen(!mobileMenu.classList.contains('open'));
    });

    // Close mobile menu on click link
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        setMobileMenuOpen(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    });
  }
}

/* -------------------------------------------------------------------------
   2. PROJECTS & MODAL
   ------------------------------------------------------------------------- */
const projectCategoryMap = {
  'AI & Machine Learning': {
    color: '#9185cf',
    rgb: '145, 133, 207',
    label: 'AI & ML',
    badge: 'ML & OCR App',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/><path d="M18 10a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4z"/><path d="M6 10a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4z"/><path d="M12 18v4"/><path d="M8 22h8"/></svg>`
  },
  'Python Desktop App': {
    color: '#d6ad5e',
    rgb: '214, 173, 94',
    label: 'Desktop App',
    badge: 'PyWebView • Chart.js',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="m7 10 3 3 7-7"/></svg>`
  },
  'Python Web App': {
    color: '#67b392',
    rgb: '103, 179, 146',
    label: 'Web App',
    badge: 'Flask Task Manager',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`
  },
  'Notes App': {
    color: '#69accb',
    rgb: '105, 172, 203',
    label: 'Notes App',
    badge: 'Web & Desktop App',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  }
};

function initProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const modalBackdrop = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');

  if (projectsGrid) {
    projectsGrid.innerHTML = portfolioData.projects.map((project) => {
      const cardTitle = project.id === 'fake-news-detection-using-ml'
        ? 'Fake News Detection Using ML'
        : project.title;
      const cat = projectCategoryMap[project.category] || {
        color: '#38bdf8',
        rgb: '56, 189, 248',
        label: project.category,
        badge: project.badge || 'Application',
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`
      };

      return `
        <article class="pcard" style="--p-color:${cat.color}; --p-rgb:${cat.rgb};">
          <div class="pcard-accent-beam"></div>
          <div class="pcard-radial-glow"></div>

          <div class="pcard-body">
            <div class="pcard-heading">
              <h3 class="pcard-title pcard-title--project">${cardTitle}</h3>
              <p class="pcard-desc">${project.subtitle}</p>
            </div>

            <ul class="pcard-highlights" aria-label="Key features of ${project.title}">
              ${project.features.slice(0, 2).map(feature => `
                <li>
                  <span class="highlight-icon" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </span>
                  <span class="highlight-text">${feature}</span>
                </li>
              `).join('')}
            </ul>

            <div class="pcard-tags">
              ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="pcard-footer">
            <button class="pcard-btn-detail" onclick="openProjectModal('${project.id}')" aria-label="View detailed overview of ${project.title}">
              <span>Details</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>
            <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="pcard-btn-live" aria-label="Open ${project.title} live demo">
              <span>Live Demo</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/></svg>
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="pcard-btn-gh" aria-label="View ${project.title} source code on GitHub">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>GitHub</span>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Modal Close
  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProjectModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

window.openProjectModal = function(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalProblem = document.getElementById('modalProblem');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTech = document.getElementById('modalTech');
  const modalRepoBtn = document.getElementById('modalRepoBtn');
  const modalDemoBtn = document.getElementById('modalDemoBtn');

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
  if (modalCategory) modalCategory.textContent = project.category;
  if (modalProblem) modalProblem.textContent = project.problemSolved;
  if (modalDesc) modalDesc.textContent = project.description;

  if (modalFeatures) {
    modalFeatures.innerHTML = project.features.map(f => `
      <div class="modal-feature-item">
        <span class="modal-feature-icon" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
        <span>${f}</span>
      </div>
    `).join('');
  }

  if (modalTech) {
    modalTech.innerHTML = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  if (modalRepoBtn) {
    modalRepoBtn.href = project.githubUrl;
  }

  if (modalDemoBtn) {
    modalDemoBtn.href = project.liveDemoUrl;
    modalDemoBtn.setAttribute('aria-label', `Open ${project.title} live demo`);
  }

  const cat = projectCategoryMap[project.category] || { color: '#38bdf8', rgb: '56, 189, 248' };

  if (modalBackdrop) {
    modalBackdrop.style.setProperty('--modal-accent-color', cat.color);
    modalBackdrop.style.setProperty('--modal-accent-rgb', cat.rgb);
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeProjectModal = function() {
  const modalBackdrop = document.getElementById('projectModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
};

/* -------------------------------------------------------------------------
   3. UTILS: SCROLL TOP
   ------------------------------------------------------------------------- */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
