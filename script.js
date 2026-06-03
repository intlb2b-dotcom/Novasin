const translations = {
  zh: {
    navAbout: '关于',
    navProducts: '产品',
    navWhy: '优势',
    navContact: '联系',
    heroEyebrow: '诺和信（深圳）商务服务有限公司',
    heroTitle: '连接全球优质食品供应商，服务中国消费者',
    heroDesc: '我们帮助境外优质食品与饮料品牌高效进入中国市场，完成合规、清关与渠道落地。',
    heroBtnAbout: '了解我们',
    heroBtnContact: '快速咨询',
    badge1: '专业进口',
    badge2: '渠道分销',
    badge3: '本地化支持',
    aboutTitle: '关于我们',
    aboutDesc: '诺和信提供端到端进口贸易服务，专注于食品、饮料与快消品的中国市场品牌营销与渠道建设。',
    missionTitle: '我们的使命',
    missionDesc: '把世界级的食品和品牌带入中国，同时为合作伙伴提供可持续增长路径。',
    advantageTitle: '我们的优势',
    advantageDesc: '拥有专业本地团队、渠道与多年分销网络经验。',
    customerTitle: '服务对象',
    customerDesc: '进口商、品牌方、连锁渠道与餐饮集团。',
    productsHeader: '产品线',
    productsTitle: '重点进口品类',
    product1Title: '糖果与甜点',
    product1Desc: '精选进口糖果与烘焙原料，适配电商与线下渠道。',
    product2Title: '休闲零食',
    product2Desc: '来自全球的零食与干货，满足年轻消费群体。',
    product3Title: '饮料与酒类',
    product3Desc: '高品质饮品与进口精酿，渠道覆盖广泛。',
    product4Title: '特色食品',
    product4Desc: '含有机与健康功能的进口食品。',
    whyTitle: '为什么选择我们',
    whyDesc: '我们在中国市场的经验能显著缩短品牌落地周期并降低合规风险。',
    feature1: '专业进口团队',
    feature2: '稳定的市场渠道',
    feature3: '覆盖全国的分销网络',
    feature4: '本地化市场推广能力',
    highlightLabel: '市场机会',
    highlightTitle: '助力合作伙伴快速进入中国市场',
    highlightDesc: '与我们合作，优先获得定制渠道推广支持，快速验证市场需求。',
    channelCaption: '我们的分销与渠道合作网络',
    contactTitle: '联系我们',
    contactDesc: '欢迎品牌方与渠道伙伴联系咨询机会与合作模式。',
    companyNameLabel: '公司',
    englishNameLabel: 'English',
    phoneLabel: '电话',
    emailLabel: '邮箱',
    locationLabel: '地址',
    communicationTitle: '快速通道',
    communicationDesc: '拨打电话或邮件，我们将在1-2个工作日内回复。',
    contactPhoneLabel: '电话',
    contactEmailLabel: '邮箱',
    footerText: '© 2024 诺和信（深圳）商务服务有限公司 — 保留所有权利。'
  },
  en: {
    navAbout: 'About',
    navProducts: 'Products',
    navWhy: 'Why Us',
    navContact: 'Contact',
    heroEyebrow: 'Novosin Shenzhen',
    heroTitle: 'Connecting global suppliers to the China consumers',
    heroDesc: 'Help international food brands enter China right: fully compliant end-to-end support, faster market access, and ready-to-go channel launches that get your products from port to shelf in record time.',
    heroBtnAbout: 'About Us',
    heroBtnContact: 'Quick Consult',
    badge1: 'Compliant Imports',
    badge2: 'Channel Distribution',
    badge3: 'Local Support',
    aboutTitle: 'About Us',
    aboutDesc: 'Novosin provides end-to-end import services focused on F&B and FMCG market entry and channel building in China.',
    missionTitle: 'Our Mission',
    missionDesc: 'Bring world foods brands to China while offering sustainable growth pathways for partners.',
    advantageTitle: 'Our Strengths',
    advantageDesc: 'Local compliance teams, sales networks channels, and years of distribution experience.',
    customerTitle: 'Clients',
    customerDesc: 'Importers, distributors, retail chains and hospitality groups.',
    productsHeader: 'Product Lines',
    productsTitle: 'Key Imported Categories',
    product1Title: 'Confectionery & Sweets',
    product1Desc: 'Curated imports for e-commerce and retail.',
    product2Title: 'Snacks',
    product2Desc: 'Global snacks for younger consumers.',
    product3Title: 'Beverages & Spirits',
    product3Desc: 'Premium drinks and imports with broad channel coverage.',
    product4Title: 'Specialty Foods',
    product4Desc: 'Organic and healthy imported foods.',
    whyTitle: 'Why Choose Us',
    whyDesc: 'Our China-market experience shortens time-to-market，scale your business in Chinese market quickly. We turn China’s complex regulatory landscape into a competitive advantage for your business.',
    feature1: 'Compliance Experts',
    feature2: 'Full Channels',
    feature3: 'Nationwide Distribution',
    feature4: 'Localized Marketing',
    highlightLabel: 'End to End Service',
    highlightTitle: 'Streamlining the complexities of market entry and providing a comprehensive ecosystem for sustainable brand development',
    highlightDesc: 'Partner with us for quick lauch with full compliance support and tailored channel promotion to validate market demand quickly.',
    channelCaption: 'Our distribution partnerships and channel coverage.',
    contactTitle: 'Contact Us',
    contactDesc: 'Brands and channel partners are welcome to inquire about cooperation opportunities and collaboration models.',
    companyNameLabel: 'Company',
    englishNameLabel: 'English',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    locationLabel: 'Location',
    communicationTitle: 'Fast Track',
    communicationDesc: 'Call or email and we will respond within 1-2 business days.',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    footerText: '© 2024 Novosin Shenzhen Co., Ltd. — All rights reserved.'
  }
};

function setLanguage(lang = 'zh') {
  document.documentElement.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  // Fill other ids
  Object.keys(translations[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.textContent = translations[lang][key];
  });

  localStorage.setItem('site_lang', lang);
}

function initLangToggle() {
  const btn = document.getElementById('langToggle');
  const current = localStorage.getItem('site_lang') || 'zh';
  setLanguage(current);
  btn.textContent = current === 'zh' ? 'EN' : '中';
  btn.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('lang-en') ? 'zh' : 'en';
    setLanguage(next);
    btn.textContent = next === 'zh' ? 'EN' : '中';
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  toggle.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  initMobileMenu();
});
