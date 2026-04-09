/* 
   PORTFOLIO DATA
   This is the "database" of your website. 
   Changing the text or links here will update your website automatically.
*/

const PORTFOLIO_DATA = {
  hero: {
    name: "Vaibhav Joshi",
    role: "Sr. iOS Engineer | Flutter | Kotlin — 7.5+ years",
    summary: "Senior iOS / Tech Lead with 7.5+ years of experience delivering enterprise-grade mobile solutions, leading cross-functional teams, owning end-to-end SDLC, mentoring engineers, and partnering with stakeholders to build scalable, secure, high-performance iOS, Android applications using modern architectures.",
    github: "https://github.com/vbhvjshi",
    linkedin: "https://www.linkedin.com/in/vaibhav-joshi-83000813b/",
    email: "vbhvjshi@gmail.com"
  },
  about: {
    paragraphs: [
      "Senior iOS / Tech Lead with 7.5+ years of experience delivering enterprise-grade mobile solutions. I specialize in leading cross-functional teams, owning end-to-end SDLC, and mentoring engineers to build high-performance applications.",
      "I am passionate about modern mobile architectures and have a proven track record of partnering with stakeholders to translate business goals into scalable technical reality.",
      "Based in Haldwani (Uttarakhand), India. I focus on technical leadership, clean architecture, and building robust mobile ecosystems."
    ],
    stats: [
      { value: "7.5+", label: "Years Experience", icon: "code" },
      { value: "50K+", label: "App Downloads", icon: "download" },
      { value: "20+", label: "Apps Shipped", icon: "rocket" },
      { value: "Led", label: "Teams & Mentorship", icon: "users" }
    ]
  },
  experience: [
    {
      company: "Cubastion Consulting",
      title: "Tech Lead",
      date: "Dec 2022 — March 2026",
      description: "Led mobile iOS, Android and CRM teams, owning sprint planning, technical reviews, and production releases.",
      bullets: [
        "Led mobile iOS - Swift, Android - Kotlin and CRM teams, owning sprint planning, technical reviews, application development and production releases.",
        "Mentored 4+ developers across iOS and Android (Kotlin) through training sessions and code reviews, improving code quality and delivery speed.",
        "Acted as primary client interface, translating business requirements into scalable mobile (iOS & Android) and CRM solutions.",
        "Performed unit testing and designed test cases using AI-assisted tools (ChatGPT, Gemini, Antigravity, Cursor) to improve test coverage and development efficiency."
      ]
    },
    {
      company: "Sysmind Tech",
      title: "iOS Developer",
      date: "May 2022 — Dec 2022",
      description: "Developed and refactored core features using MVVM for global enterprise clients.",
      bullets: [
        "Implemented and refactored features using Swift & MVVM architecture to improve reusability and maintainability.",
        "Stabilized APIs and reduced production issues through proactive debugging and optimization.",
        "Improved UI performance and app stability through architectural refinements."
      ]
    },
    {
      company: "Evon Technologies",
      title: "iOS Developer",
      date: "Jul 2021 — May 2022",
      description: "Enhanced production iOS applications and integrated complex third-party SDKs.",
      bullets: [
        "Enhanced production iOS applications using Swift and integrated third-party SDKs.",
        "Optimized animations and UI rendering to improve runtime performance.",
        "Enforced Swift and Objective-C best practices across the codebase."
      ]
    },
    {
      company: "Yugasa Software Labs",
      title: "iOS Developer",
      date: "Aug 2019 — July 2021",
      description: "Delivered multiple client-facing iOS applications with full App Store ownership.",
      bullets: [
        "Delivered and maintained multiple client-facing iOS and Android application with App Store & Play Store ownership.",
        "Improved UI/UX using adaptive layouts across device sizes.",
        "Integrated REST APIs with retry, error handling, and data persistence using Swift technology."
      ]
    },
    {
      company: "Cacao Solutions",
      title: "Junior iOS Developer",
      date: "Jul 2018 — Aug 2019",
      description: "Built data-driven iOS applications using Core Data and custom networking layers.",
      bullets: [
        "Built data-driven iOS applications using Swift, Core Data and a custom networking layer.",
        "Designed onboarding flows and core navigation experiences.",
        "Refactored legacy code to reduce technical debt and improve stability."
      ]
    }
  ],
  education: [
    { title: "MCA — Graphic Era Hill University", date: "2015–2018" },
    { title: "B.Sc — M.B.P.G. College", date: "2012–2015" },
    { title: "Intermediate", date: "2010–2011" },
    { title: "Highschool", date: "2008–2009" }
  ],
  /* 
     PROJECTS 
     Add or remove projects here. 
     The "image" should match the filename in your folder.
  */
  projects: [
    {
      title: "AIBOBOA",
      description: "Collaborated with stakeholders; improved app stability; managed App Store deployment.",
      tags: ["iOS", "Swift"],
      url: "https://apps.apple.com/lb/app/aiboboa/id1511900581",
      image: "aiboboa_image.jpg",
      role: "Developer"
    },
    {
      title: "Golf Been",
      description: "Drove development; coordinated with client; guided team execution.",
      tags: ["iOS", "Swift"],
      url: "https://apps.apple.com/us/app/golf-been/id1573239854",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
      role: "Developer, Team Lead"
    },
    {
      title: "DSD TABS",
      description: "Spearheaded dev; optimised performance; managed team.",
      tags: ["Flutter"],
      url: "https://testflight.apple.com/join/Y1KMYGTk",
      image: "mercedes_benz.png",
      role: "Lead Developer"
    },
    {
      title: "VCare Blue Voltas",
      description: "Led cross-platform delivery; improved performance; ensured on-time releases.",
      tags: ["Swift", "Objective-C", "Flutter", "Kotlin"],
      url: "https://apps.apple.com/in/app/vcare-blue-voltas/id1473801658",
      url2: "https://play.google.com/store/apps/details?id=com.cubastion.voltasvcare&hl=en_IN&pli=1",
      image: "voltas_product.png",
      role: "Lead Developer"
    }
  ],
  skills: [
    {
      category: "Mobile Platforms",
      items: [
        { name: "Swift / SwiftUI", percent: 95 },
        { name: "Objective-C", percent: 85 },
        { name: "Flutter / Dart", percent: 92 },
        { name: "Kotlin / Android", percent: 88 }
      ]
    },
    {
      category: "Architecture & Core",
      items: [
        { name: "MVVM / MVC / MVP / SOLID", percent: 94 },
        { name: "Unit Testing / Clean Code", percent: 90 },
        { name: "Persistence (CoreData/Realm)", percent: 85 }
      ]
    },
    {
      category: "Ecosystem & AI",
      items: [
        { name: "AI Tools (ChatGPT/Gemini)", percent: 96 },
        { name: "CI/CD & App Store Connect", percent: 88 },
        { name: "Third Party SDKs / Firebase", percent: 92 }
      ]
    }
  ],
  tools: [
    'Swift', 'Objective-C', 'Flutter', 'iOS', 'XCode', 'SwiftUI', 'Android Studio', 'Figma', 'Cursor', 'Android', 'MVC', 'MVVM', 'MVP', 'SOLID Principle', 'AI', 'ChatGPT', 'Cursor',
    'Core Data', 'Realm', 'SQFLite', 'Getx', 'Bloc', 'State Management', 'Micro frontend', 'GitHub/Git/GitLab', 'Bitbucket', 'Jira',
    'Payment Gateway', 'Location Services', 'Push Notifications', 'REST API', 'Kotlin Multiplatform (KMP/KMM)', 'Jetpack Compose',
    'Third Party Libraries', 'Google Maps SDK', 'App Store Connect', 'Alamofire', 'Agile Methodologies', 'Firebase'
  ],
  links: [
    { title: "Create a simple loader for iOS Apps", href: "https://medium.com/@vbhvjshi/creating-a-simple-loader-in-swift-for-your-ios-app-d49855c18894" },
    { title: "Mastering Async/Await in Swift: A Game-Changer for iOS Development", href: "https://medium.com/@vbhvjshi/mastering-async-await-in-swift-a-game-changer-for-ios-development-031bbebd41f4" }
  ],
  strengths: [
    "Technical Leadership",
    "Team Mentorship",
    "Architecture & Performance",
    "Client & Stakeholder Management"
  ]
};

const SKILL_ICONS = {
  'Swift': 'swift.png',
  'SwiftUI': 'swift.png',
  'Objective-C': 'apple.png',
  'Flutter': 'flutter.png',
  'Dart': 'flutter.png',
  'iOS': 'apple.png',
  'XCode': 'xcode.svg',
  'Android': 'android.png',
  'Android Studio': 'androidstudio.svg',
  'Kotlin': 'kotlin.png',
  'Kotlin Multiplatform (KMP/KMM)': 'kotlin.png',
  'Jetpack Compose': 'kotlin.png', // Use Kotlin logo for Compose as it's the primary language
  'Figma': 'figma.svg',
  'GitHub/Git/GitLab': 'git.svg',
  'GitHub': 'github.svg',
  'Git': 'git.svg',
  'GitLab': 'gitlab.svg',
  'Bitbucket': 'bitbucket.svg',
  'Jira': 'jira.svg',
  'Firebase': 'firebase.png',
  'Google Maps SDK': 'googleplay.svg', // Closest placeholder
  'Realm': 'realm.svg',
  'SQFLite': 'sqlite.svg',
  'Supabase': 'supabase.svg',
  'Stripe': 'stripe.svg',
  'React Native': 'react.svg',
  'Bloc': 'flutter.png',
  'Getx': 'flutter.png',
  'REST API': 'api.svg',
  'AI': 'openai.svg',
  'ChatGPT': 'openai.svg',
  'Cursor': 'cursor.svg',
  'SOLID': 'code.svg',
  'MVVM': 'code.svg',
  'MVC': 'code.svg',
  'MVP': 'code.svg',
  'State Management': 'code.svg',
  'App Store': 'appstore.svg',
  'Play Store': 'googleplay.svg',
  'Alamofire': 'apple.png'
};

/* 
   RENDERING FUNCTIONS
   These functions take the DATA above and put it into your HTML.
*/
function init() {
  renderHero();
  renderAbout();
  renderExperience();
  renderEducation();
  renderProjects();
  renderSkills();
  renderLinks();
  renderStrengths();
  renderContact();
  initAnimations();
}

/**
 * Renders the Tools and Platforms chips with icons.
 * Uses SimpleIcons for brands and Icons8 for generic technical terms.
 */
function renderSkills() {
  const matrixContainer = document.getElementById('skillsMatrix');
  if (matrixContainer) {
    matrixContainer.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
      <div class="glass-card skill-category">
        <h3 class="category-title">${cat.category}</h3>
        ${cat.items.map(skill => `
          <div class="skill-row">
            <div class="skill-label-row">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-percent">${skill.percent}%</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" data-percent="${skill.percent}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  const toolsContainer = document.getElementById('toolsList');
  if (toolsContainer) {
    toolsContainer.innerHTML = PORTFOLIO_DATA.tools.map(tool => {
      const iconFile = SKILL_ICONS[tool] || SKILL_ICONS[Object.keys(SKILL_ICONS).find(key => tool.includes(key))];
      const iconUrl = iconFile ? `assets/icons/${iconFile}` : null;

      return `
        <span class="tool-chip">
          ${iconUrl ? `<img src="${iconUrl}" alt="${tool}" class="tool-icon" onerror="this.parentElement.removeChild(this)">` : ''}
          ${tool}
        </span>
      `;
    }).join('');
  }
}

function renderHero() {
  document.getElementById('heroGithub').href = PORTFOLIO_DATA.hero.github;
  document.getElementById('heroLinkedin').href = PORTFOLIO_DATA.hero.linkedin;
  document.getElementById('heroEmail').href = `mailto:${PORTFOLIO_DATA.hero.email}`;
}

const ICONS = {
  code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  download: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
  rocket: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3l1 1"></path><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5l-1-1"></path></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
};

function renderAbout() {
  const container = document.getElementById('aboutText');
  container.innerHTML = PORTFOLIO_DATA.about.paragraphs.map(p => `<p>${p}</p>`).join('');

  const statsContainer = document.getElementById('aboutStats');
  statsContainer.innerHTML = PORTFOLIO_DATA.about.stats.map(s => `
    <div class="glass-card stat-card">
      <div class="stat-icon">${ICONS[s.icon]}</div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

function renderStrengths() {
  const container = document.getElementById('aboutStrengths');
  if (!container) return;
  container.innerHTML = PORTFOLIO_DATA.strengths.map(s => `
    <div class="glass-card strength-card fade-up">
      <div class="strength-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 11.08 20 11.08 20 13.08 22 13.08 22 11.08"></polyline><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
      </div>
      <h3 class="strength-text">${s}</h3>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.getElementById('experienceList');
  container.innerHTML = PORTFOLIO_DATA.experience.map((exp, index) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-content scale-in">
        <span class="job-date">${exp.date}</span>
        <h3 class="job-title">${exp.title}</h3>
        <span class="job-company">${exp.company}</span>
        <p class="job-desc">${exp.description}</p>
        <ul class="job-bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const container = document.getElementById('educationList');
  if (!container) return;
  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="glass-card education-card" style="margin-bottom: 24px; padding: 24px;">
      <h3 class="job-title">${edu.title}</h3>
      <span class="job-date">${edu.date}</span>
    </div>
  `).join('');
}

/* 
   RENDER PROJECTS
   This specific function builds the HTML boxes for your projects 
   and puts them into the "projectsList" div in index.html.
*/
function renderProjects() {
  const container = document.getElementById('projectsList');
  container.innerHTML = PORTFOLIO_DATA.projects.map(p => `
    <div class="glass-card project-card">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title}" class="project-img">
      </div>
      <div class="project-info">
        <div class="project-header">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-role-tag">${p.role ? `<span class="tag role-tag">${p.role}</span>` : '<span class="tag role-tag placeholder"></span>'}</div>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-footer">
          <div class="project-tags">
            ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            ${p.url ? `
              <a href="${p.url}" target="_blank" class="project-link" title="Open in App Store">
                <svg role="img" viewBox="-4 -4 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.702z"/></svg>
                <span>Open in App Store</span>
              </a>
            ` : ''}
            ${p.url2 ? `
              <a href="${p.url2}" target="_blank" class="project-link play-store-link" title="Open in Play Store">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 2l13 10L3 22V2zm15.5 9.5L6 3.5l6.5 5L18.5 11.5zM6 20.5l12.5-8L12.5 15.5 6 20.5z"/>
                </svg>
                <span>Open in Play Store</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Duplicate renderSkills removed

function renderLinks() {
  const container = document.getElementById('linksList');
  if (!container) return;
  container.className = 'links-container';
  container.innerHTML = PORTFOLIO_DATA.links.map(link => `
    <a href="${link.href}" target="_blank" class="link-card">
      <span class="link-title">${link.title}</span>
      <span class="link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </span>
    </a>
  `).join('');
}

function renderContact() {
  const container = document.getElementById('contactInfo');
  if (!container) return;
  container.innerHTML = `
    <div class="contact-links-inner" style="display: flex; flex-direction: column; gap: 16px; align-items: center; margin-bottom: 16px;">
      <a href="${PORTFOLIO_DATA.hero.linkedin}" target="_blank" class="social-link" style="display: flex; align-items: center; gap: 12px; font-size: 16px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        LinkedIn Profile
      </a>
      <a href="mailto:${PORTFOLIO_DATA.hero.email}" class="social-link" style="display: flex; align-items: center; gap: 12px; font-size: 16px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        ${PORTFOLIO_DATA.hero.email}
      </a>
    </div>
  `;
}

function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Special case for progress bars
        const fills = entry.target.querySelectorAll('.progress-bar-fill');
        fills.forEach(fill => {
          fill.style.width = fill.getAttribute('data-percent') + '%';
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .section').forEach(el => {
    observer.observe(el);
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
