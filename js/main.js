/* ==========================================================================
   MAIN.JS — renders every section from portfolioData and wires up
   interactions (accordions, nav, scroll reveal, contact form).
   You should not need to edit this file — edit js/data.js instead.
   ========================================================================== */

const ICONS = {
  robot: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="12" y="18" width="24" height="18" rx="2"/><circle cx="19" cy="27" r="2.2" fill="currentColor" stroke="none"/><circle cx="29" cy="27" r="2.2" fill="currentColor" stroke="none"/><path d="M24 18v-6"/><circle cx="24" cy="9" r="3"/><path d="M6 24h6M36 24h6M16 36v4M32 36v4"/></svg>`,
  code: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 15L7 24l10 9M31 15l10 9-10 9M27 12l-6 24"/></svg>`,
  plc: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="8" y="10" width="32" height="28" rx="2"/><path d="M14 18h8M14 24h14M14 30h10"/><circle cx="34" cy="18" r="1.6" fill="currentColor" stroke="none"/><circle cx="34" cy="24" r="1.6" fill="currentColor" stroke="none"/><circle cx="34" cy="30" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  cad: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M24 6l16 9v18l-16 9-16-9V15z"/><path d="M8 15l16 9 16-9M24 24v18"/></svg>`,
  iot: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="24" cy="24" r="4"/><path d="M24 12v4M24 32v4M12 24h4M32 24h4M16 16l3 3M32 32l-3-3M32 16l-3 3M16 32l3-3"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17M12 12.5V17"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h4l2 6-3 2a13 13 0 0 0 6 6l2-3 6 2v4a2 2 0 0 1-2 2C10.5 22 2 13.5 2 6a2 2 0 0 1 2-2z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 18v2h16v-2"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6" fill="currentColor" stroke="none"/><path d="M4 17l5-5 4 4 3-3 4 4"/></svg>`,
  certificate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="13" rx="2"/><path d="M9 20l3-2 3 2v-4H9z"/><path d="M7 8h10M7 11h6"/></svg>`,
  amr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="9" width="16" height="8" rx="1.5"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/><path d="M8 9V6h8v3M12 3v3"/></svg>`,
  agv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="10" width="20" height="6" rx="1"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M6 10V7h12v3"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4M12 13v4M9 21h6M9 21l1-4h4l1 4"/></svg>`,
  medal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="15" r="6"/><path d="M9 10L7 3h2l3 5 3-5h2l-2 7"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="18" cy="9" r="2.4"/><path d="M15 20a5 5 0 0 1 6.5-4.8"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
};

const achievementIconOrder = ['medal','trophy','medal','trophy','users','users','users'];

function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* ---------------------------- HEADER / SOCIALS ---------------------------- */
function renderHeroAndFooter(){
  document.querySelectorAll('[data-bind="name"]').forEach(n => n.textContent = portfolioData.site.name);
  document.getElementById('hero-role').textContent = portfolioData.site.role;
  document.getElementById('hero-quote').textContent = portfolioData.site.heroQuote;

  document.getElementById('hero-linkedin').href = portfolioData.site.linkedin;
  document.getElementById('hero-github').href = portfolioData.site.github;
  document.getElementById('footer-year-name').textContent = portfolioData.site.name;

  document.getElementById('resume-download').href = portfolioData.site.resumeFile;
  document.getElementById('resume-embed').src = portfolioData.site.resumeFile;

  // contact info
  const email = portfolioData.site.email, phone = portfolioData.site.phone;
  document.getElementById('contact-email').textContent = email;
  document.getElementById('contact-email').href = `mailto:${email}`;
  document.getElementById('contact-phone').textContent = phone;
  document.getElementById('contact-phone').href = `tel:${phone.replace(/\s/g,'')}`;
  document.getElementById('contact-linkedin').href = portfolioData.site.linkedin;
  document.getElementById('contact-linkedin').textContent = portfolioData.site.linkedin.replace('https://www.','');
  document.getElementById('contact-github').href = portfolioData.site.github;
  document.getElementById('contact-github').textContent = portfolioData.site.github.replace('https://',''); 
}

/* ---------------------------- ABOUT ---------------------------- */
function renderAbout(){
  const wrap = document.getElementById('about-paragraphs');
  wrap.innerHTML = portfolioData.about.paragraphs.map(p => `<p>${p}</p>`).join('');
}

/* ---------------------------- EDUCATION ---------------------------- */
function renderEducation(){
  const wrap = document.getElementById('education-list');
  wrap.innerHTML = portfolioData.education.map(e => `
    <div class="edu-item reveal">
      <div class="edu-period">${e.period}</div>
      <div>
        <div class="edu-level">${e.level}</div>
        <div class="edu-inst">${e.institution} — ${e.location}</div>
        <div class="edu-detail">
          <span class="edu-score">${e.detail}</span>
          ${e.badge ? `<span class="badge">${e.badge}</span>` : ''}
        </div>
      </div>
      <div>
        <a class="btn btn-sm" href="${e.certificateLink}" target="_blank" rel="noopener">${ICONS.certificate} View Certificates</a>
      </div>
    </div>
  `).join('');
}

/* ---------------------------- SKILLS ---------------------------- */
function renderSkills(){
  const wrap = document.getElementById('skills-grid');
  wrap.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="skill-card reveal">
      <div class="skill-icon">${ICONS[cat.icon] || ICONS.robot}</div>
      <h3>${cat.category}</h3>
      ${cat.skills.map(s => `
        <div class="skill-row">
          <span>${s.name}</span>
          <span class="skill-level">${s.level}</span>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/* ---------------------------- INTERNSHIPS ---------------------------- */
function renderInternships(){
  const wrap = document.getElementById('internships-list');
  wrap.innerHTML = portfolioData.internships.map((it, i) => `
    <div class="card reveal">
      <div class="card-grid">
        <div class="card-media">
          ${it.logo
            ? `<img src="${it.logo}" alt="${it.company} logo">`
            : `<div class="card-logo-fallback">${it.company.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>`}
        </div>
        <div class="card-body">
          <div class="card-top">
            <div>
              <div class="card-sub">${it.company}</div>
              <div class="card-title">${it.role}</div>
            </div>
            <div class="card-meta">${it.date}<br>${it.location}</div>
          </div>
          <p class="card-summary">${it.summary}</p>
          <div class="btn-row">
            <a class="btn btn-sm" href="${it.certificateLink}" target="_blank" rel="noopener">${ICONS.certificate} View Certificate</a>
            <a class="btn btn-sm" href="${it.photosLink}" target="_blank" rel="noopener">${ICONS.image} View Project Photos</a>
            <a class="btn btn-sm" href="${it.worksLink}" target="_blank" rel="noopener">${ICONS.arrow} View Works</a>
          </div>
          <button class="expand-toggle" data-target="intern-detail-${i}">
            <span class="plus"></span> Detailed explanation
          </button>
          <div class="card-detail" id="intern-detail-${i}">
            <div class="card-detail-inner">
              <ul>${it.details.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---------------------------- PROJECTS ---------------------------- */
function renderProjects(){
  const wrap = document.getElementById('projects-list');
  wrap.innerHTML = portfolioData.projects.map((p, i) => `
    <div class="card reveal">
      <div class="card-grid">
        <div class="card-media">
          ${p.image ? `<img src="${p.image}" alt="${p.title}">` : `<div class="placeholder-icon">${ICONS.amr}</div>`}
        </div>
        <div class="card-body">
          <div class="card-top">
            <div>
              <div class="card-sub">${p.subtitle}</div>
              <div class="card-title">${p.title}</div>
            </div>
            <div class="card-meta">${p.date}</div>
          </div>
          ${p.award ? `<div class="award-tag">${p.award}</div>` : ''}
          <p class="card-summary">${p.summary}</p>
          <div class="btn-row">
            <a class="btn btn-sm" href="${p.videoLink}" target="_blank" rel="noopener">${ICONS.play} View Working Video</a>
            <a class="btn btn-sm" href="${p.photosLink}" target="_blank" rel="noopener">${ICONS.image} View Photos</a>
            <a class="btn btn-sm" href="${p.certificateLink}" target="_blank" rel="noopener">${ICONS.certificate} View Certificates</a>
          </div>
          <button class="expand-toggle" data-target="proj-detail-${i}">
            <span class="plus"></span> Detailed explanation
          </button>
          <div class="card-detail" id="proj-detail-${i}">
            <div class="card-detail-inner">
              <ul>${p.details.map(d => `<li>${d}</li>`).join('')}</ul>
              <div class="learnt-box"><strong>What I learnt</strong>${p.learnt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---------------------------- CERTIFICATES ---------------------------- */
function renderCertificates(){
  const wrap = document.getElementById('cert-grid');
  wrap.innerHTML = portfolioData.certificates.map((c, i) => `
    <div class="cert-card reveal">
      <div class="cert-thumb">
        <span class="cert-num">${String(i+1).padStart(2,'0')}</span>
        ${c.image ? `<img src="${c.image}" alt="${c.title}">` : `<div class="placeholder-icon">${ICONS.certificate}</div>`}
      </div>
      <div class="cert-body">
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer} · ${c.date}</div>
        <p class="cert-desc">${c.description}</p>
        <a class="btn btn-sm" href="${c.link}" target="_blank" rel="noopener">${ICONS.certificate} View Certificate</a>
      </div>
    </div>
  `).join('');
}

/* ---------------------------- ACHIEVEMENTS ---------------------------- */
/**function renderAchievements(){
  const wrap = document.getElementById('achievements-list');
  wrap.innerHTML = portfolioData.achievements.map((a, i) => `
    <div class="ach-item reveal">
      <div class="ach-icon">${ICONS[achievementIconOrder[i % achievementIconOrder.length]]}</div>
      <div>
        <div class="ach-title">${a.title}</div>
        <div class="ach-org">${a.org}</div>
        <p class="ach-desc">${a.description}</p>
        <a class="btn btn-sm btn-ghost-light" href="${a.link}" target="_blank" rel="noopener" style="margin-top:10px;">${ICONS.certificate} View Certificate / Photos</a>
      </div>
      <div class="ach-date">${a.date}</div>
    </div>
  `).join('');
}**/
function renderAchievements(){
  const wrap = document.getElementById('achievements-list');

  wrap.innerHTML = portfolioData.achievements.map((a, i) => `
    <div class="ach-item reveal">

      <div class="ach-icon">
        ${ICONS[achievementIconOrder[i % achievementIconOrder.length]]}
      </div>

      <div class="ach-content">

        <div class="ach-main">

          <div class="ach-info">
            <div class="ach-title">${a.title}</div>

            <div class="ach-org">${a.org}</div>

            <p class="ach-desc">${a.description}</p>

            <a 
              class="btn btn-sm btn-ghost-light"
              href="${a.link}"
              target="_blank"
              rel="noopener"
              style="margin-top:14px;"
            >
              ${ICONS.certificate} View Certificate / Photos
            </a>
          </div>

          ${a.image ? `
            <a 
              class="ach-image"
              href="${a.link}"
              target="_blank"
              rel="noopener"
            >
              <img 
                src="${a.image}" 
                alt="${a.title}"
                loading="lazy"
              >
            </a>
          ` : ''}

        </div>

      </div>

      <div class="ach-date">${a.date}</div>

    </div>
  `).join('');
}

/* ---------------------------- INTERACTIONS ---------------------------- */

function wireAccordions(){
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.expand-toggle');
    if(!btn) return;
    const panel = document.getElementById(btn.dataset.target);
    const isOpen = btn.classList.contains('open');
    if(isOpen){
      panel.style.maxHeight = null;
      btn.classList.remove('open');
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      btn.classList.add('open');
    }
  });
}

function wireNav(){
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  let lastY = window.scrollY;
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if(y > lastY && y > 140){ header.classList.add('nav-hidden'); }
    else { header.classList.remove('nav-hidden'); }
    lastY = y;
  }, { passive:true });
}

function wireReveal(){
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

function wireContactForm(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#f-name').value.trim();
    const from = form.querySelector('#f-email').value.trim();
    const msg = form.querySelector('#f-message').value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${portfolioData.site.email}?subject=${subject}&body=${body}`;
    status.textContent = "Opening your mail app…";
  });
}

/* ---------------------------- INIT ---------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderHeroAndFooter();
  renderAbout();
  renderEducation();
  renderSkills();
  renderInternships();
  renderProjects();
  renderCertificates();
  renderAchievements();

  wireAccordions();
  wireNav();
  wireReveal();
  wireContactForm();
});
