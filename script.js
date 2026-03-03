// Portfolio Starter JS (dark mode + simple language toggle + mailto form + mobile menu)

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const THEME_KEY = "portfolio_theme";
const LANG_KEY = "portfolio_lang";

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const icon = theme === "light" ? "🌙" : "☀️";
  const t1 = $("#themeToggle");
  const t2 = $("#themeToggleMobile");
  if (t1) t1.textContent = icon;
  if (t2) t2.textContent = icon + (theme === "light" ? "" : "");
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

const I18N = {
  en: {
    portfolio:"Porfolio",
    Download_cv:"C.V.",
    hero_pill: "Student specializing in Food Industries",
    hero_hi: "Hi, I'm",
    hero_name:"Tasneem Abdelhai",

    hero_subtitle:
      "I work on practical projects in food industries and food processing as a student. This portfolio showcases my developing technical skills and hands-on experience.",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",
    hero_location: "Ismailia, Egypt",
    hero_degree: "East Port Said University of Technology",
    profile_role: "Food Industrial Technology",
    stat_projects: "Projects",
    stat_certificates: "Certificates",
    stat_internships: "Internships",

    about_title: "About Me",
    about_text:
      "I am a student at East Port Said Technological University in Industrial and Energy Technology, specializing in Food Industries. I am interested in food processing operations, quality control, and food safety systems. I enjoy working on production lines, improving product quality, and applying scientific knowledge in manufacturing environments.",
    about_highlights: "Highlights",
    hl1: "Participated in practical training in food production and processing",
    hl2: "Familiar with food quality control and safety systems",
    hl3: "Committed to hygiene standards, quality, and teamwork in food industry environments",
    about_education: "Education",
    edu1: "East Port Said University of Technology",
    edu1b: "Food Industries Technology Program",
    edu2: "Expected Graduation: 2027",

    skills_title: "Skills",
    skills_tech: "Technical",
    skills_tools: "Tools",
    skills_soft: "Soft Skills",
    soft1: "Communication",
    soft2: "Problem-solving",
    soft3: "Time management",

    projects_title: "Projects",
    p1_desc: "Practical training at Abu El-Sayed Fish Factory, focusing on food production, quality control, and processing operations.",
    p2_desc: "My graduation project focuses on developing gluten-free plant-based cheeses. The project involves studying alternative plant-based ingredients, formulating recipes that mimic the texture and taste of traditional cheeses, and ensuring nutritional quality and safety. It also explores processing methods, shelf-life, and quality control to create a sustainable and healthy product suitable for consumers with dietary restrictions.",
    p3_desc: "A field visit to El-Swedy Frozen Fruits and Vegetables Factory to learn about the production stages, quality control, and handling processes as part of my studies in food industries.",
    p4_desc: "I attended the Food Africa exhibition to explore the latest trends, technologies, and products in the food industry.",

    contact_title: "Contact",
    contact_quick: "Quick Links",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Message",
    form_send: "Send",

    back_to_top: "Back to top ↑",
  },

  ar: {
    portfolio:"ملف الأعمال الشخصي",
    Download_cv:"السيرة الذاتية",

    hero_pill: "طالبة متخصصة في الصناعات الغذائية",
    hero_hi: "مرحبًا، أنا",
    hero_name:"تسنيم عبدالحي",
    hero_subtitle:
      "أشارك في مشاريع عملية في الصناعات الغذائية وتصنيعها كطالبة. يعرض هذا الملف مهاراتي التقنية المتطورة وخبرتي العملية.",
    hero_btn_projects: "عرض المشاريع",
    hero_btn_contact: "تواصل معي",
    hero_location: "الإسماعيلية، مصر",
    hero_degree: "جامعة شرق بورسعيد التكنولوجية",
    profile_role: "تكنولوجيا الصناعات الغذائية",
    stat_projects: "المشاريع",
    stat_certificates: "الشهادات",
    stat_internships: "التدريبات",
    

    about_title: "نبذة عني",
    about_text:
      "أنا طالبة في جامعة شرق بورسعيد التكنولوجية، في تكنولوجيا الصناعة والطاقة، متخصصة في الصناعات الغذائية، مهتمة بعمليات تصنيع الأغذية، ومراقبة الجودة، وأنظمة سلامة الغذاء. أستمتع بالعمل على خطوط الإنتاج، وتحسين جودة المنتجات، وتطبيق المعرفة العلمية في بيئات التصنيع.",
    about_highlights: "أبرز النقاط",
    hl1: "شاركت في تدريب عملي في إنتاج وتصنيع الأغذية",
    hl2: "ملم بمراقبة جودة الغذاء وأنظمة السلامة",
    hl3: "ملتزمة بمعايير النظافة والجودة والعمل الجماعي في بيئات صناعة الأغذية",
    about_education: "التعليم",
    edu1: "جامعة شرق بورسعيد التكنولوجية",
    edu1b: "برنامج تكنولوجياالصناعات الغذائية",
    edu2: "متوقع التخرج: 2027",

    skills_title: "المهارات",
    skills_tech: "المهارات التقنية",
    skills_tools: "الأدوات",
    skills_soft: "المهارات الشخصية",
    soft1: "التواصل",
    soft2: "حل المشكلات",
    soft3: "إدارة الوقت",

    projects_title: "المشاريع",
    p1_desc: "تدريب عملي في مصنع أبو السيد للأسماك، يركز على إنتاج الغذاء، ومراقبة الجودة، وعمليات التصنيع.",
    p2_desc: " يركز مشروع تخرجي على تطوير أجبان نباتية خالية من الجلوتين. يشمل المشروع دراسة المكونات النباتية البديلة، وتصميم وصفات تحاكي قوام وطعم الأجبان التقليدية، مع ضمان الجودة الغذائية وسلامة المنتج. كما يستكشف طرق التصنيع، وفترة الصلاحية، ومراقبة الجودة لإنتاج منتج صحي ومستدام مناسب للمستهلكين ذوي الاحتياجات الغذائية الخاصة.",
    p3_desc: "زيارة ميدانية لمصنع السويدي للفواكه والخضروات المجمدة لمتابعة مراحل الإنتاج، ومراقبة الجودة، وعمليات التعامل مع المنتجات، كجزء من دراستي في الصناعات الغذائية.",
    p4_desc: "حضرت معرض Food Africa لاستكشاف أحدث الاتجاهات والتقنيات والمنتجات في صناعة الأغذية.",

    contact_title: "التواصل",
    contact_quick: "روابط سريعة",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "الرسالة",
    form_send: "إرسال",

    back_to_top: "العودة إلى الأعلى ↑",



  },
};

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const btn = $("#langToggle");
  const btnM = $("#langToggleMobile");
  const label = lang === "ar" ? "EN" : "AR";
  if (btn) btn.textContent = label;
  if (btnM) btnM.textContent = label;

  localStorage.setItem(LANG_KEY, lang);
}

function toggleLanguage() {
  const current = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(current === "en" ? "ar" : "en");
}

function setupMobileMenu() {
  const burger = $("#burger");
  const menu = $("#mobileMenu");
  if (!burger || !menu) return;

  function closeMenu() {
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    menu.hidden = open;
  });

  $$(".mobileLink").forEach((a) => a.addEventListener("click", closeMenu));
}

function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // Replace with your real email:
    const to = "you@example.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

function init() {
  // Footer year
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Theme
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(savedTheme);
  $("#themeToggle")?.addEventListener("click", toggleTheme);
  $("#themeToggleMobile")?.addEventListener("click", toggleTheme);

  // Language
  const savedLang = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(savedLang);
  $("#langToggle")?.addEventListener("click", toggleLanguage);
  $("#langToggleMobile")?.addEventListener("click", toggleLanguage);

  setupMobileMenu();
  setupContactForm();
}

document.addEventListener("DOMContentLoaded", init);
