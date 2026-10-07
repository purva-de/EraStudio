/**
 * ERA DESIGN STUDIO — Interactive Logic & Application Controller
 * Architectural Minimalism · Permanent Dark Theme · Responsive Services Canvas
 */

// --------------------------------------------------------------------------
// 1. Project Database — Curated Architectural Commissions
// --------------------------------------------------------------------------
const PROJECTS_DATA = [
  {
    id: "modern-villa",
    title: "Modern Villa",
    category: "architecture",
    subcategories: ["architecture", "residential"],
    location: "Coastal Ridge",
    year: "2024",
    area: "6,800 sq.ft",
    scope: "Architecture & Landscape",
    heroImage: "planning2.jpeg",
    gallery: ["planning7.jpeg", "planning5.jpeg", "planning1.jpeg"],
    excerpt: "Concrete private residence with cantilevered terraces, shaded courtyards, and warm terracotta accents.",
    description: "A private residence built with board-marked concrete and cantilevered slabs. Deep structural overhangs provide shade while framing panoramic horizon views.",
    approach: "Climatic response and honest materials. Concrete walls provide thermal mass, paired with terracotta panels that catch natural light.",
    materials: ["Cast Concrete", "Terracotta Panels", "Thermal Glazing", "Brass Louvers"]
  },
  {
    id: "master-bedroom",
    title: "Master Bedroom",
    category: "interiors",
    subcategories: ["interiors", "residential"],
    location: "High-Rise Suite",
    year: "2024",
    area: "1,250 sq.ft",
    scope: "Interior & Millwork",
    heroImage: "bedroom.jpeg",
    gallery: ["mirror.jpeg", "cabi_study.jpeg", "ceiling.jpeg"],
    excerpt: "Master bedroom suite with fluted wall panelling, curved cove lighting, and warm ivory tones.",
    description: "A calm master suite using fluted wall paneling and indirect cove lighting to create a quiet acoustic environment.",
    approach: "Indirect cove lighting and a custom circular luminaire eliminate harsh glare. Custom fluted panels conceal wardrobe doors seamlessly.",
    materials: ["Fluted Oak", "Polished Marble", "Natural Linen", "Warm 2700K LED"]
  },
  {
    id: "dining-space",
    title: "Dining Space",
    category: "interiors",
    subcategories: ["interiors", "residential"],
    location: "Private Residence",
    year: "2023",
    area: "980 sq.ft",
    scope: "Interior & Joinery",
    heroImage: "dining.jpeg",
    gallery: ["Tv.jpeg", "tv1.jpeg", "clock.jpeg"],
    excerpt: "Dining area featuring custom walnut banquette seating, display niches, and an adjacent marble credenza.",
    description: "A gathering space featuring custom banquette seating, teak vertical partitions, and backlit curio shelves.",
    approach: "Continuous walnut joinery links the dining space to the lounge credenza with bookmatched Calacatta marble.",
    materials: ["Walnut Joinery", "Calacatta Marble", "Brass Pendant", "Boucle Fabric"]
  },
  {
    id: "residential-tower",
    title: "Residential Tower",
    category: "architecture",
    subcategories: ["architecture", "commercial"],
    location: "Metropolitan District",
    year: "2025",
    area: "140,000 sq.ft",
    scope: "Architecture & Structure",
    heroImage: "ucon3.jpeg",
    gallery: ["ucon4.jpeg", "ucon7.jpeg", "ucon8.jpeg"],
    excerpt: "28-storey urban tower with slender concrete bays, deep recessed balconies, and structural formwork.",
    description: "A 28-storey residential tower designed with deep recessed balconies for solar protection and natural air circulation.",
    approach: "Rigorous structural execution with post-tensioned reinforced slabs and precision formwork for lasting durability.",
    materials: ["Reinforced Concrete", "Anodized Aluminum", "Low-E Glass", "Granite Podium"]
  },
  {
    id: "study-desk",
    title: "Study Desk",
    category: "interiors",
    subcategories: ["interiors", "commercial", "residential"],
    location: "Executive Residence",
    year: "2024",
    area: "650 sq.ft",
    scope: "Joinery & Interior",
    heroImage: "cabi_study.jpeg",
    gallery: ["compartments.jpeg", "mirror_cabi.jpeg", "wardrobe.jpeg"],
    excerpt: "Integrated study desk with pull-out concealed storage, fluted plinth, and solid turned wooden handles.",
    description: "A compact study desk unit integrating storage walls, pull-out vanity columns, and task lighting.",
    approach: "Cabinetry built flush into walls with turned walnut handles and concealed hardware to maximize floor space.",
    materials: ["Lacquered Panels", "Turned Walnut", "Fluted Base", "Concealed Hardware"]
  },
  {
    id: "creative-studio",
    title: "Creative Studio",
    category: "commercial",
    subcategories: ["architecture", "commercial"],
    location: "Creative Quarter",
    year: "2024",
    area: "8,500 sq.ft",
    scope: "Architecture & Studio Space",
    heroImage: "ucon9.jpeg",
    gallery: ["planning6.jpeg", "planning.jpeg", "planning4.jpeg"],
    excerpt: "Studio workshop and gallery space highlighting exposed cast concrete and artisan-painted geometric murals.",
    description: "An open studio and exhibition gallery where fair-faced concrete columns meet hand-painted geometric murals.",
    approach: "Preserving raw construction finishes, formwork textures, and structural columns alongside flexible partitions.",
    materials: ["Cast Concrete", "Silicate Paint Murals", "Black Steel", "Terrazzo Floor"]
  },
  {
    id: "wardrobe-vanity",
    title: "Wardrobe & Vanity",
    category: "interiors",
    subcategories: ["interiors", "residential"],
    location: "Private Suite",
    year: "2023",
    area: "420 sq.ft",
    scope: "Custom Millwork",
    heroImage: "cabinet.jpeg",
    gallery: ["wardrobe.jpeg", "compartments.jpeg", "ceiling.jpeg"],
    excerpt: "Full-height wardrobe with vertical LED lighting, internal compartments, and pull-out vanity mirror unit.",
    description: "Custom wardrobe millwork with built-in LED lighting strips, flush mirror panels, and concealed vanity storage.",
    approach: "Cabinets function as architectural partitions, keeping the bedroom uncluttered and peaceful.",
    materials: ["Matte Lacquer", "Bronze Mirror", "Recessed LEDs", "Solid Teak Accents"]
  },
  {
    id: "living-room",
    title: "Living Room",
    category: "interiors",
    subcategories: ["interiors", "residential"],
    location: "Private Residence",
    year: "2023",
    area: "750 sq.ft",
    scope: "Interior & Styling",
    heroImage: "corners.jpeg",
    gallery: ["pcorners.jpeg", "tv1.jpeg", "clock.jpeg"],
    excerpt: "Quiet living area with light oak furniture, natural linen sofa, botanical wallpaper, and diffused light.",
    description: "A relaxed living corner featuring linen upholstery, round oak coffee table, and soft natural textures.",
    approach: "Focusing on tactile materials, natural daylight, and simple handcrafted wooden accents.",
    materials: ["Botanical Wallpaper", "White Oak", "Natural Linen", "Handmade Ceramics"]
  }
];

// --------------------------------------------------------------------------
// 2. Interactive Services Data
// --------------------------------------------------------------------------
const SERVICES_DATA = [
  {
    id: "arch",
    idx: "01",
    category: "Core Discipline",
    title: "Architectural Design",
    image: "planning2.jpeg",
    phase: "Phase 01 — Spatial Architecture",
    tagline: "Volumetric clarity, climate responsiveness, and structural permanence.",
    deliverables: [
      "Site, solar & microclimate feasibility studies",
      "Volumetric massing & schematic layout plans",
      "Structural engineering & building envelope coordination",
      "Statutory approvals & technical construction documentation",
      "On-site architectural quality supervision"
    ],
    typologyVal: "Residential Architecture"
  },
  {
    id: "interior",
    idx: "02",
    category: "Tactile Atmosphere",
    title: "Interior Design",
    image: "bedroom.jpeg",
    phase: "Phase 02 — Tactile Atmosphere",
    tagline: "Sensory continuity, tailored lighting choreography, and acoustic calm.",
    deliverables: [
      "Comprehensive interior architectural space planning",
      "Bespoke millwork & fluted joinery specifications",
      "Custom architectural lighting & cove layout plans",
      "Material, fixture, and hardware schedules",
      "Textile, acoustic drapery, and furniture curation"
    ],
    typologyVal: "Interior Design"
  },
  {
    id: "residential",
    idx: "03",
    category: "Private Sanctum",
    title: "Residential Commissions",
    image: "corners.jpeg",
    phase: "Phase 03 — Private Dwelling",
    tagline: "Sanctuaries sculpted around family rituals, courtyards, and natural daylight.",
    deliverables: [
      "Single-family villas & contemporary pavilions",
      "Full floor luxury apartment transformations",
      "Private garden courtyards & outdoor living spaces",
      "Concealed storage & functional ritual integration",
      "Turnkey interior styling & commissioning"
    ],
    typologyVal: "Residential Architecture"
  },
  {
    id: "commercial",
    idx: "04",
    category: "Civic & Workplace",
    title: "Commercial Spaces",
    image: "ucon3.jpeg",
    phase: "Phase 04 — Civic & Workplace",
    tagline: "Inspiring headquarters, boutique studios, and cultural exhibition galleries.",
    deliverables: [
      "Executive corporate suites & collaborative ateliers",
      "Hospitality, culinary, and boutique retail spaces",
      "Multi-residential high-rise architectural consulting",
      "Brand identity expression through architectural restraint",
      "High-durability commercial material specifications"
    ],
    typologyVal: "Commercial Space"
  },
  {
    id: "planning",
    idx: "05",
    category: "Spatial Optimization",
    title: "Space Planning",
    image: "cabi_study.jpeg",
    phase: "Phase 05 — Ergonomic Precision",
    tagline: "Optimizing circulation, visual sightlines, and built-in micro-storage.",
    deliverables: [
      "Millimeter-precision volumetric space optimization",
      "Circulation flow & ergonomic movement studies",
      "Architectural storage integration vanishing into walls",
      "Multi-functional furniture & partition planning",
      "Accessible daylight distribution across floorplates"
    ],
    typologyVal: "Joinery & Space Planning"
  },
  {
    id: "vis",
    idx: "06",
    category: "Digital Exploration",
    title: "3D Visualization",
    image: "planning1.jpeg",
    phase: "Phase 06 — Digital Exploration",
    tagline: "Atmospheric digital renders, sunlight path simulations, and material studies.",
    deliverables: [
      "Photorealistic architectural exterior CGI renderings",
      "Atmospheric interior lighting & shadow simulations",
      "Material moodboards & physical swatch pairings",
      "Interactive 3D digital floor walkthroughs",
      "Pre-construction client decision visualization"
    ],
    typologyVal: "Design Consultation"
  },
  {
    id: "consult",
    idx: "07",
    category: "Advisory & Craft Audit",
    title: "Design Consultation",
    image: "planning6.jpeg",
    phase: "Phase 07 — Advisory & Craft",
    tagline: "Expert architectural guidance, peer reviews, and direct on-site craft auditing.",
    deliverables: [
      "Pre-purchase property & site feasibility evaluations",
      "Architectural design review & value engineering",
      "Direct on-site contractor & artisan craftsmanship audits",
      "Material sourcing & stone selection advisory",
      "Phase-by-phase client representation during builds"
    ],
    typologyVal: "Design Consultation"
  }
];

// --------------------------------------------------------------------------
// 3. Application Controller Initialization
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderClearLogo();
  initHeaderScroll();
  initScrollProgress();
  initProjectsFilter();
  initProjectModal();
  initInteractiveServices();
  initCustomCursor();
  initMobileNavigation();
  initScrollReveals();
  initSmoothScrollLinks();
  initHeroVideo();
  initSelectedWorksStream();
});

// --------------------------------------------------------------------------
// 4. Logo Enhancement (Makes E, R, A 100% Crisp, High Contrast & Transparent)
// --------------------------------------------------------------------------
function renderClearLogo() {
  const brandLogos = document.querySelectorAll(".brand-logo-img");
  brandLogos.forEach(logo => {
    if (!logo.getAttribute("src") || logo.getAttribute("src").includes("logo1.jpeg")) {
      logo.src = "logo_clear.png";
    }
  });
}

// --------------------------------------------------------------------------
// 5. Header Scroll State & Progress Bar
// --------------------------------------------------------------------------
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    let currentId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }, { passive: true });
}

function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

// --------------------------------------------------------------------------
// 6. Interactive Services Section Controller (Single-Frame Atelier Console)
// --------------------------------------------------------------------------
function initInteractiveServices() {
  const railItems = document.querySelectorAll(".discipline-rail-item, .service-interactive-item");
  const previewImg = document.getElementById("servicePreviewImg");
  const previewPhase = document.getElementById("servicePreviewPhase");
  const previewCat = document.getElementById("servicePreviewCat");
  const previewIdx = document.getElementById("servicePreviewIdx");
  const previewTitle = document.getElementById("servicePreviewTitle");
  const previewTagline = document.getElementById("servicePreviewTagline");
  const previewDeliverables = document.getElementById("servicePreviewDeliverables");
  const previewCta = document.getElementById("servicePreviewCta");
  const projectTypeSelect = document.getElementById("projectType");
  const counterCurrent = document.getElementById("counterCurrent");
  const counterTotal = document.getElementById("counterTotal");
  const prevBtn = document.getElementById("servicesPrevBtn");
  const nextBtn = document.getElementById("servicesNextBtn");
  const viewSwitchDisciplines = document.getElementById("viewSwitchDisciplines");
  const viewSwitchProcess = document.getElementById("viewSwitchProcess");
  const servicesConsole = document.getElementById("servicesConsole");
  const processConsole = document.getElementById("processConsole");

  if (!railItems.length && !previewImg) return;

  let currentServiceIndex = 0;
  let activeView = "disciplines"; // "disciplines" | "process"
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderDiscipline(index) {
    if (index < 0 || index >= SERVICES_DATA.length) return;
    currentServiceIndex = index;
    const data = SERVICES_DATA[index];

    // Update rail items active and aria states
    railItems.forEach((item, idx) => {
      const isSelected = idx === index;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-selected", isSelected ? "true" : "false");
      if (isSelected) {
        item.setAttribute("tabindex", "0");
      } else {
        item.setAttribute("tabindex", "-1");
      }
    });

    // Update Counter
    if (counterCurrent) {
      counterCurrent.textContent = data.idx;
    }
    if (counterTotal && activeView === "disciplines") {
      counterTotal.textContent = "07";
    }

    // Smooth image crossfade
    if (previewImg) {
      if (!prefersReduced) {
        previewImg.style.opacity = "0.2";
        previewImg.style.transform = "scale(0.985)";
        setTimeout(() => {
          previewImg.src = data.image;
          previewImg.alt = `${data.title} Architectural Preview`;
          previewImg.style.opacity = "1";
          previewImg.style.transform = "scale(1)";
        }, 120);
      } else {
        previewImg.src = data.image;
        previewImg.alt = `${data.title} Architectural Preview`;
      }
    }

    // Update text elements
    if (previewPhase) previewPhase.textContent = data.phase;
    if (previewCat) previewCat.textContent = data.category || "Core Discipline";
    if (previewIdx) previewIdx.textContent = `${data.idx} / 07`;
    if (previewTitle) previewTitle.textContent = data.title;
    if (previewTagline) previewTagline.textContent = data.tagline;

    // Update deliverables list
    if (previewDeliverables && data.deliverables) {
      previewDeliverables.innerHTML = data.deliverables
        .map(
          (d) =>
            `<li class="deliverable-chip"><span class="deliverable-bullet">◆</span> ${d}</li>`
        )
        .join("");
    }

    // Configure inquiry CTA button
    if (previewCta) {
      previewCta.setAttribute("data-typology", data.typologyVal || "Residential Architecture");
    }
  }

  // Bind rail button clicks, hover, and keyboard arrows
  railItems.forEach((item, index) => {
    item.addEventListener("click", () => renderDiscipline(index));
    item.addEventListener("mouseenter", () => renderDiscipline(index));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        renderDiscipline(index);
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIdx = (index + 1) % SERVICES_DATA.length;
        renderDiscipline(nextIdx);
        railItems[nextIdx]?.focus();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIdx = (index - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
        renderDiscipline(prevIdx);
        railItems[prevIdx]?.focus();
      }
    });
  });

  // Direct Arrow buttons (Prev / Next)
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (activeView === "disciplines") {
        const prevIdx = (currentServiceIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
        renderDiscipline(prevIdx);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (activeView === "disciplines") {
        const nextIdx = (currentServiceIndex + 1) % SERVICES_DATA.length;
        renderDiscipline(nextIdx);
      }
    });
  }

  // CTA Click: Auto-populate contact form select & smooth scroll to #contact
  if (previewCta) {
    previewCta.addEventListener("click", (e) => {
      const typology = previewCta.getAttribute("data-typology");
      if (projectTypeSelect && typology) {
        projectTypeSelect.value = typology;
      }
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // In-Frame View Switcher (Disciplines (07) vs Architectural Process (04))
  function switchView(mode) {
    activeView = mode;
    if (mode === "disciplines") {
      if (servicesConsole) servicesConsole.style.display = "grid";
      if (processConsole) processConsole.style.display = "none";
      if (viewSwitchDisciplines) {
        viewSwitchDisciplines.classList.add("active");
        viewSwitchDisciplines.setAttribute("aria-selected", "true");
      }
      if (viewSwitchProcess) {
        viewSwitchProcess.classList.remove("active");
        viewSwitchProcess.setAttribute("aria-selected", "false");
      }
      if (counterTotal) counterTotal.textContent = "07";
      if (counterCurrent) counterCurrent.textContent = SERVICES_DATA[currentServiceIndex]?.idx || "01";
      if (prevBtn) prevBtn.style.opacity = "1";
      if (nextBtn) nextBtn.style.opacity = "1";
    } else {
      if (servicesConsole) servicesConsole.style.display = "none";
      if (processConsole) processConsole.style.display = "block";
      if (viewSwitchProcess) {
        viewSwitchProcess.classList.add("active");
        viewSwitchProcess.setAttribute("aria-selected", "true");
      }
      if (viewSwitchDisciplines) {
        viewSwitchDisciplines.classList.remove("active");
        viewSwitchDisciplines.setAttribute("aria-selected", "false");
      }
      if (counterTotal) counterTotal.textContent = "04";
      if (counterCurrent) counterCurrent.textContent = "04";
      if (prevBtn) prevBtn.style.opacity = "0.4";
      if (nextBtn) nextBtn.style.opacity = "0.4";
    }
  }

  if (viewSwitchDisciplines) {
    viewSwitchDisciplines.addEventListener("click", () => switchView("disciplines"));
  }
  if (viewSwitchProcess) {
    viewSwitchProcess.addEventListener("click", () => switchView("process"));
  }

  // Initialize with first discipline
  renderDiscipline(0);
}

// --------------------------------------------------------------------------
// 7. Portfolio Filtering System (Small, Clean Cards, No Mumbai Names)
// --------------------------------------------------------------------------
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioGrid = document.getElementById("portfolioGrid");
  if (!portfolioGrid) return;

  renderPortfolioGrid("all");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      portfolioGrid.style.opacity = "0.2";
      portfolioGrid.style.transform = "translateY(6px)";

      setTimeout(() => {
        renderPortfolioGrid(filterVal);
        portfolioGrid.style.opacity = "1";
        portfolioGrid.style.transform = "translateY(0)";
      }, 160);
    });
  });

  function renderPortfolioGrid(filter) {
    const filtered = filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.subcategories.includes(filter));

    portfolioGrid.innerHTML = filtered.map((project) => `
      <article class="project-card portfolio-item" data-project-id="${project.id}" tabindex="0" role="button" aria-label="${project.title}">
        <div class="project-image-box">
          <img src="${project.heroImage}" alt="${project.title}" loading="lazy" />
          <span class="project-badge-tag">${project.category}</span>
        </div>
        <div class="project-meta-row">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-year">${project.year}</span>
        </div>
        <p class="project-location-type">${project.location} · ${project.scope}</p>
      </article>
    `).join("");

    portfolioGrid.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", () => {
        const pId = card.getAttribute("data-project-id");
        openProjectModal(pId);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const pId = card.getAttribute("data-project-id");
          openProjectModal(pId);
        }
      });
    });
  }
}

// --------------------------------------------------------------------------
// 8. Project Detail Modal Dialog Controller
// --------------------------------------------------------------------------
let currentModalProjectId = null;

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const prevBtn = document.getElementById("modalPrevBtn");
  const nextBtn = document.getElementById("modalNextBtn");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }

  // Light dismiss on backdrop click
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      modal.close();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => navigateModalProject(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => navigateModalProject(1));
  }

  // Bind selected works cards on homepage
  document.querySelectorAll(".featured-project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const pId = card.getAttribute("data-project-id");
      openProjectModal(pId);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const pId = card.getAttribute("data-project-id");
        openProjectModal(pId);
      }
    });
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById("projectModal");
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!modal || !project) return;

  currentModalProjectId = projectId;

  document.getElementById("modalCategoryTag").textContent = `${project.category} · ${project.scope}`;

  const heroImg = document.getElementById("modalHeroImg");
  heroImg.src = project.heroImage;
  heroImg.alt = `${project.title}`;

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;

  document.getElementById("modalSpecLocation").textContent = project.location;
  document.getElementById("modalSpecYear").textContent = project.year;
  document.getElementById("modalSpecArea").textContent = project.area;
  document.getElementById("modalSpecScope").textContent = project.scope;

  document.getElementById("modalApproach").textContent = project.approach;

  const materialsContainer = document.getElementById("modalMaterialsList");
  materialsContainer.innerHTML = project.materials
    .map((mat) => `<span class="material-tag">${mat}</span>`)
    .join("");

  const galleryContainer = document.getElementById("modalGalleryList");
  galleryContainer.innerHTML = project.gallery
    .map(
      (imgSrc, idx) => `
      <div class="modal-gallery-item">
        <img src="${imgSrc}" alt="${project.title} detail ${idx + 1}" loading="lazy" />
      </div>
    `
    )
    .join("");

  modal.showModal();
  modal.scrollTop = 0;
}

function navigateModalProject(direction) {
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === currentModalProjectId);
  if (currentIndex === -1) return;

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = PROJECTS_DATA.length - 1;
  if (nextIndex >= PROJECTS_DATA.length) nextIndex = 0;

  openProjectModal(PROJECTS_DATA[nextIndex].id);
}

// --------------------------------------------------------------------------
// 8B. (Services controller consolidated in Section 6)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 9. Custom Architectural Cursor
// --------------------------------------------------------------------------
function initCustomCursor() {
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!hasFinePointer || prefersReducedMotion) return;

  const dot = document.createElement("div");
  dot.className = "cursor-dot";

  const ring = document.createElement("div");
  ring.className = "cursor-ring";

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.body.classList.add("cursor-active");
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  const interactiveSelector = "a, button, .project-card, .filter-btn, input, select, textarea, .service-interactive-item, .process-stage-card";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove("cursor-hover");
    }
  });
}

// --------------------------------------------------------------------------
// 10. Mobile Navigation Drawer
// --------------------------------------------------------------------------
function initMobileNavigation() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const drawer = document.getElementById("mobileDrawer");
  const drawerLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Automatically close drawer if resized above tablet breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && drawer.classList.contains("open")) {
      closeDrawer();
    }
  }, { passive: true });

  function openDrawer() {
    drawer.classList.add("open");
    toggleBtn.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
}

// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 12. Scroll-Triggered Reveal Animations
// --------------------------------------------------------------------------
function initScrollReveals() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// --------------------------------------------------------------------------
// 13. Smooth Anchor Scrolling
// --------------------------------------------------------------------------
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 64;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// --------------------------------------------------------------------------
// 14. Hero Landing Page Video Controller & Accessibility
// --------------------------------------------------------------------------
function initHeroVideo() {
  const video = document.getElementById("heroVideo");
  const toggleBtn = document.getElementById("heroVideoToggle");
  if (!video) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function updateToggleUI(isPaused) {
    if (!toggleBtn) return;
    const iconPause = toggleBtn.querySelector(".icon-pause");
    const iconPlay = toggleBtn.querySelector(".icon-play");
    if (isPaused) {
      if (iconPause) iconPause.style.display = "none";
      if (iconPlay) iconPlay.style.display = "inline-flex";
      toggleBtn.setAttribute("aria-label", "Play background video");
      toggleBtn.setAttribute("title", "Play background video");
    } else {
      if (iconPause) iconPause.style.display = "inline-flex";
      if (iconPlay) iconPlay.style.display = "none";
      toggleBtn.setAttribute("aria-label", "Pause background video");
      toggleBtn.setAttribute("title", "Pause background video");
    }
  }

  // Handle prefers-reduced-motion setting
  if (prefersReducedMotion.matches) {
    video.pause();
    updateToggleUI(true);
  } else {
    // Attempt smooth autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        updateToggleUI(false);
      }).catch(() => {
        // Autoplay may be restricted until user interaction
        updateToggleUI(true);
      });
    }
  }

  prefersReducedMotion.addEventListener("change", (e) => {
    if (e.matches) {
      video.pause();
      updateToggleUI(true);
    } else {
      video.play().then(() => updateToggleUI(false)).catch(() => {});
    }
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play().then(() => {
          updateToggleUI(false);
        }).catch((err) => {
          console.warn("Video playback prevented:", err);
        });
      } else {
        video.pause();
        updateToggleUI(true);
      }
    });
  }
}

// --------------------------------------------------------------------------
// 15. Selected Works Interactive Slow-Motion Stream (Right to Left)
// --------------------------------------------------------------------------
function initSelectedWorksStream() {
  const streamWrap = document.getElementById("selectedWorksStream");
  const track = document.getElementById("streamTrack");
  const pauseBtn = document.getElementById("streamPauseBtn");
  const prevBtn = document.getElementById("streamPrevBtn");
  const nextBtn = document.getElementById("streamNextBtn");

  if (!streamWrap || !track) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function updatePauseUI(isPaused) {
    if (!pauseBtn) return;
    const iconPause = pauseBtn.querySelector(".icon-pause");
    const iconPlay = pauseBtn.querySelector(".icon-play");
    if (isPaused) {
      if (iconPause) iconPause.style.display = "none";
      if (iconPlay) iconPlay.style.display = "inline-flex";
      pauseBtn.setAttribute("aria-label", "Resume stream motion");
      pauseBtn.setAttribute("title", "Resume stream motion");
    } else {
      if (iconPause) iconPause.style.display = "inline-flex";
      if (iconPlay) iconPlay.style.display = "none";
      pauseBtn.setAttribute("aria-label", "Pause stream motion");
      pauseBtn.setAttribute("title", "Pause stream motion");
    }
  }

  if (prefersReducedMotion.matches) {
    track.classList.add("is-paused");
    updatePauseUI(true);
  }

  prefersReducedMotion.addEventListener("change", (e) => {
    if (e.matches) {
      track.classList.add("is-paused");
      updatePauseUI(true);
    } else {
      track.classList.remove("is-paused");
      updatePauseUI(false);
    }
  });

  // Toggle Motion button
  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      const isPaused = track.classList.toggle("is-paused");
      updatePauseUI(isPaused);
    });
  }

  // Prev / Next manual nudge buttons
  let manualOffset = 0;
  function getComputedTranslateX(el) {
    const style = window.getComputedStyle(el);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const currentX = getComputedTranslateX(track);
      track.classList.add("is-paused");
      updatePauseUI(true);
      manualOffset = currentX + 344;
      track.style.animation = "none";
      track.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
      track.style.transform = `translateX(${manualOffset}px)`;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const currentX = getComputedTranslateX(track);
      track.classList.add("is-paused");
      updatePauseUI(true);
      manualOffset = currentX - 344;
      track.style.animation = "none";
      track.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
      track.style.transform = `translateX(${manualOffset}px)`;
    });
  }

  // Interactive Drag & Swipe Exploration
  let isDown = false;
  let startX = 0;
  let startTransform = 0;
  let hasDragged = false;

  streamWrap.addEventListener("mousedown", (e) => {
    // Only drag with left mouse button
    if (e.button !== 0) return;
    isDown = true;
    hasDragged = false;
    startX = e.pageX;
    startTransform = getComputedTranslateX(track);
    streamWrap.classList.add("is-dragging");
    track.classList.add("is-paused");
  });

  window.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    streamWrap.classList.remove("is-dragging");
    setTimeout(() => {
      hasDragged = false;
    }, 50);
  });

  streamWrap.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const walk = e.pageX - startX;
    if (Math.abs(walk) > 6) {
      hasDragged = true;
      e.preventDefault();
      track.style.animation = "none";
      track.style.transition = "none";
      track.style.transform = `translateX(${startTransform + walk}px)`;
      manualOffset = startTransform + walk;
    }
  });

  // Touch Drag Support for Tablets and Mobile
  let touchStartX = 0;
  let touchStartTransform = 0;

  streamWrap.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX;
    touchStartTransform = getComputedTranslateX(track);
    track.classList.add("is-paused");
  }, { passive: true });

  streamWrap.addEventListener("touchmove", (e) => {
    const walk = e.touches[0].pageX - touchStartX;
    if (Math.abs(walk) > 8) {
      hasDragged = true;
      track.style.animation = "none";
      track.style.transition = "none";
      track.style.transform = `translateX(${touchStartTransform + walk}px)`;
    }
  }, { passive: true });

  streamWrap.addEventListener("touchend", () => {
    setTimeout(() => {
      hasDragged = false;
    }, 80);
  });

  // Ensure card click opens modal, but ignore if dragging
  streamWrap.querySelectorAll(".featured-project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      const pId = card.getAttribute("data-project-id");
      if (pId && typeof openProjectModal === "function") {
        openProjectModal(pId);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const pId = card.getAttribute("data-project-id");
        if (pId && typeof openProjectModal === "function") {
          openProjectModal(pId);
        }
      }
    });
  });
}

