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
function initProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const modalBackdrop = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');

  const catMap = {
    'AI & Machine Learning': { color: '#a78bfa', label: 'AI & ML' },
    'Python Web App':        { color: '#34d399', label: 'Web App' },
    'Python Desktop App':    { color: '#fbbf24', label: 'Desktop App' }
  };

  if (projectsGrid) {
    projectsGrid.innerHTML = portfolioData.projects.map((project) => {
      const cat = catMap[project.category] || { color: '#38bdf8', label: project.category };
      return `
        <div class="pcard">
          <div class="pcard-accent" style="background:${cat.color};"></div>
          <div class="pcard-body">
            <div class="pcard-top">
              <span class="pcard-badge" style="color:${cat.color}; border-color:${cat.color}33; background:${cat.color}15;">
                ${cat.label}
              </span>
            </div>
            <h3 class="pcard-title">${project.title}</h3>
            <p class="pcard-desc">${project.subtitle}</p>
            <p class="pcard-feature"><span>Key feature</span>${project.features[0]}</p>
            <div class="pcard-tags">
              ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div class="pcard-footer">
            <button class="pcard-btn-detail" onclick="openProjectModal('${project.id}')">
              Details
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>
            <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="pcard-btn-live" aria-label="Open ${project.title} live demo">
              Live Demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/></svg>
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="pcard-btn-gh">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
          </div>
        </div>
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
      <div style="display:flex; align-items:flex-start; gap:0.5rem; background:rgba(9,10,15,0.6); padding:0.65rem 0.85rem; border-radius:6px; font-size:0.85rem; color:#cbd5e1; border:1px solid #1a1e2e;">
        <span style="color:#34d399; margin-top:0.1rem;">✓</span>
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

  if (modalBackdrop) {
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
