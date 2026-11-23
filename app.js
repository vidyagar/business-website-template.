(() => {
  "use strict";
  const data = window.BUSINESS;
  if (!data) {
    document.getElementById("app").textContent = "Business configuration is missing. Check config.js.";
    return;
  }
  const page = document.body.dataset.page || "home";
  const app = document.getElementById("app");
  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const image = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
  const cta = (label = data.callsToAction.label, href = data.callsToAction.href, extra = "") => `<a class="button ${extra}" href="${esc(href)}">${esc(label)} <span aria-hidden="true">↗</span></a>`;
  const sectionTop = (eyebrow, title, copy = "", link = "") => `<div class="section-top"><div><p class="eyebrow">${esc(eyebrow)}</p><h2>${title}</h2>${copy ? `<p class="lead">${copy}</p>` : ""}</div>${link}</div>`;
  const services = () => `<div class="service-grid">${data.services.map(item => `<article class="service-card reveal"><span class="service-number">${esc(item.number)}</span><div><p class="eyebrow">${esc(item.category)}</p><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><a class="service-link" href="service-detail.html">${esc(item.title)} <span aria-hidden="true">↗</span></a></div></article>`).join("")}</div>`;
  const projects = (list = data.projects) => `<div class="project-grid">${list.map(item => `<article class="project-card reveal" data-category="${esc(item.category)}"><a href="work.html" aria-label="View ${esc(item.title)} project"><div class="project-image"><img loading="lazy" src="${image(item.image, 1000)}" alt="${esc(item.title)} — ${esc(item.client)} project"></div><div class="project-meta"><div><h3>${esc(item.title)}</h3><p>${esc(item.client)}</p></div><span class="project-category">${esc(item.category)}</span></div></a></article>`).join("")}</div>`;
  const team = () => `<div class="team-grid">${data.team.map(person => `<article class="team-card reveal"><img loading="lazy" src="${image(person.image, 700)}" alt="Portrait of ${esc(person.name)}"><h3>${esc(person.name)}</h3><p>${esc(person.role)}</p></article>`).join("")}</div>`;
  const articles = () => `<div class="article-grid">${data.articles.map(post => `<article class="article-card reveal"><img loading="lazy" src="${image(post.image, 800)}" alt=""><p class="eyebrow">${esc(post.category)}</p><h3>${esc(post.title)}</h3><p class="article-date">${esc(post.date)}</p></article>`).join("")}</div>`;
  const quoteCards = () => `<div class="quote-grid">${data.testimonials.map(item => `<article class="quote-card reveal"><p class="eyebrow">Client words</p><blockquote>“${esc(item.quote)}”</blockquote><div class="quote-author"><div><strong>${esc(item.name)}</strong><br><span class="muted">${esc(item.role)}</span></div></div></article>`).join("")}</div>`;
  const faqList = () => `<div class="faq-list">${data.faqs.map((item, index) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="${index === 0}" aria-controls="faq-${index}" id="faq-button-${index}"><span>${esc(item.question)}</span><span aria-hidden="true">+</span></button><div class="faq-answer" id="faq-${index}" role="region" aria-labelledby="faq-button-${index}" ${index === 0 ? "" : "hidden"}>${esc(item.answer)}</div></article>`).join("")}</div>`;
  const pageHero = (label, title, copy) => `<section class="page-hero wrap"><p class="eyebrow">${label}</p><h1>${title}</h1><p class="lead">${copy}</p></section>`;
  const ctaSection = `<section class="section wrap"><div class="cta-band reveal"><div><p class="eyebrow">A good place to begin</p><h2>Every next chapter starts somewhere.</h2></div>${cta()}</div></section>`;
  const pages = {
    home: () => `<main><section class="hero"><div class="wrap hero-content"><p class="eyebrow">${esc(data.identity.descriptor)}</p><h1>${esc(data.identity.tagline).replace("what’s next", "<span>what’s next</span>")}</h1><p class="lead">${esc(data.identity.intro)}</p><div class="hero-actions">${cta()}<a class="button text" href="work.html">See what’s possible <span aria-hidden="true">↓</span></a></div><div class="hero-note"><div class="avatar-stack">${data.team.slice(0, 3).map(person => `<img src="${image(person.image, 100)}" alt="">`).join("")}</div><span><strong>Good work, good people.</strong><br>Independent-minded. Always in your corner.</span></div></div></section>
      <div class="wrap"><div class="trust-row"><span>Common Ground</span><span>Open Field</span><span>Kindred Health</span><span>Hearth & Home</span></div></div>
      <section class="section wrap"><div class="intro-grid"><div><p class="eyebrow">A little about us</p><h2>Good things happen when the pieces come together.</h2></div><div><p class="lead">${esc(data.identity.intro)}</p><p>We bring thoughtful perspective, practical expertise, and a genuine interest in what makes your business yours. The result is progress that feels right — and works in the real world.</p>${cta("Get to know us", "about.html", "text")}</div></div></section>
      <section class="section wrap">${sectionTop("How we help", "A clearer path from here.", "Flexible, thoughtful support for the moments that matter.", cta("Explore services", "services.html", "text"))}${services()}</section>
      <section class="section wrap">${sectionTop("Selected work", "A few good things in motion.", "Every business has its own story. Here are a few we’ve been lucky to help shape.", cta("View all work", "work.html", "text"))}${projects(data.projects.slice(0, 2))}</section>
      <section class="section quote-section"><div class="wrap"><p class="eyebrow">A note from a client</p><blockquote>“${esc(data.testimonials[0].quote)}”</blockquote><div class="quote-author"><img src="${image(data.team[0].image, 120)}" alt=""><div><strong>${esc(data.testimonials[0].name)}</strong><br><span class="muted">${esc(data.testimonials[0].role)}</span></div></div></div></section>
      <section class="section wrap">${sectionTop("From the journal", "Ideas worth making time for.", "", cta("Read the journal", "journal.html", "text"))}${articles()}</section>${ctaSection}</main>`,
    about: () => `<main>${pageHero("A little about us", "Good people. Clear purpose. Work that matters.", data.identity.intro)}<section class="section wrap"><div class="detail-grid"><div><p class="eyebrow">Our point of view</p><h2>Make it matter. Make it human.</h2></div><div><p class="lead">We believe every business has something worth bringing into focus.</p><p>Our job is to listen closely, ask better questions, and turn possibility into progress. We pair big-picture thinking with practical action, so the work feels inspiring and useful in equal measure.</p><p>Since ${esc(data.identity.founded)}, we’ve helped teams build stronger foundations, connect more meaningfully with the people they serve, and take their next steps with confidence.</p><ul class="detail-list"><li>Thoughtful by nature, practical by design</li><li>Built around your people and your priorities</li><li>Committed to progress you can actually feel</li></ul></div></div></section><section class="section wrap">${sectionTop("The people behind the work", "A small team, all in.")}${team()}</section>${ctaSection}</main>`,
    services: () => `<main>${pageHero("What we do", "Thoughtful support for what’s next.", "From a first big question to the next stage of growth, we bring the right people and perspective to your most important work.")}<section class="section wrap">${services()}</section><section class="section wrap"><div class="detail-grid"><div><p class="eyebrow">Our approach</p><h2>Start with what matters.</h2></div><div><p class="lead">No off-the-shelf answers. No unnecessary complexity.</p><p>We start by understanding your business, your people, and what you want to make possible. Then we bring the right mix of thinking and doing to move it forward, together.</p><ul class="detail-list"><li>01 — Listen and learn</li><li>02 — Find the opportunity</li><li>03 — Make a plan and make it real</li></ul></div></div></section>${ctaSection}</main>`,
    "service-detail": () => `<main>${pageHero("Service details", esc(data.services[0].title) + ".", esc(data.services[0].text))}<section class="section wrap"><div class="detail-grid"><div><p class="eyebrow">A practical process</p><h2>Clarity you can put to work.</h2></div><div><p class="lead">The best strategy gives people the confidence to take action.</p><p>Together, we’ll make sense of where you are, identify the opportunities that matter most, and turn them into a shared direction for your team.</p><ul class="detail-list"><li>Business and audience discovery</li><li>Clear positioning and messaging</li><li>Prioritized roadmap and next steps</li><li>Working sessions with your team</li></ul>${cta()}</div></div></section><section class="section wrap">${sectionTop("Related ways to work", "A connected set of capabilities.")}${services()}</section>${ctaSection}</main>`,
    solutions: () => `<main>${pageHero("Solutions", "The right kind of help, at the right moment.", "Choose a starting point that fits where your business is today. We’ll shape the details around your goals and your team.")}<section class="section wrap"><div class="solution-grid">${data.solutions.map(item => `<article class="solution-card reveal"><span class="solution-icon" aria-hidden="true">${esc(item.icon)}</span><p class="eyebrow">${esc(item.label)}</p><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><a class="button text" href="contact.html">Let’s explore <span aria-hidden="true">↗</span></a></article>`).join("")}</div></section>${ctaSection}</main>`,
    work: () => `<main>${pageHero("Selected work", "Different challenges. Meaningful progress.", "A selection of businesses and teams we’ve worked alongside. Each project starts with listening — and ends with something made for them.")}<section class="section wrap"><div class="filter-row" role="group" aria-label="Filter projects"><button class="filter-button" type="button" aria-pressed="true" data-filter="All">All</button>${[...new Set(data.projects.map(item => item.category))].map(category => `<button class="filter-button" type="button" aria-pressed="false" data-filter="${esc(category)}">${esc(category)}</button>`).join("")}</div>${projects()}</section>${ctaSection}</main>`,
    team: () => `<main>${pageHero("Our team", "Good work starts with good people.", "Curious, collaborative, and committed to the details. We bring the right mix of experience and fresh perspective to every partnership.")}<section class="section wrap">${team()}</section>${ctaSection}</main>`,
    testimonials: () => `<main>${pageHero("Client words", "The best measure is what changes.", "We’re grateful for the trust our clients place in us — and for the kind words they share when good work gets going.")}<section class="section wrap">${quoteCards()}</section>${ctaSection}</main>`,
    journal: () => `<main>${pageHero("The journal", "Ideas for the in-between.", "A collection of perspectives, practical ideas, and notes from the work. Take what’s useful and make it your own.")}<section class="section wrap"><label class="sr-only" for="journal-search">Search journal articles</label><input class="search-box" type="search" id="journal-search" placeholder="Search articles" autocomplete="off"><p class="sr-only" id="journal-search-status" aria-live="polite"></p>${articles()}</section><section class="section wrap"><div class="cta-band"><div><p class="eyebrow">Stay in the loop</p><h2>A little inspiration, now and then.</h2></div><form class="newsletter-form" id="newsletter-form"><label class="sr-only" for="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" placeholder="Your email address" required><button type="submit" aria-label="Subscribe">↗</button><span class="form-status" role="status"></span></form></div></section></main>`,
    contact: () => `<main>${pageHero("Get in touch", "Tell us what you’re thinking.", "A question, an idea, a challenge you’re working through — we’d love to hear what’s on your mind.")}<section class="section wrap"><div class="contact-grid"><div class="contact-details"><div class="contact-item"><span>Email</span><a href="mailto:${esc(data.contact.email)}">${esc(data.contact.email)}</a></div><div class="contact-item"><span>Call</span><a href="tel:${esc(data.contact.phoneLink)}">${esc(data.contact.phone)}</a></div><div class="contact-item"><span>Visit</span><strong>${esc(data.contact.address)}</strong></div><div class="contact-item"><span>Hours</span><strong>${esc(data.contact.hours)}</strong></div><a class="button text" target="_blank" rel="noopener noreferrer" href="https://wa.me/${esc(data.contact.whatsapp)}">Message us on WhatsApp ↗</a></div><form class="contact-form" id="contact-form"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field full"><label for="company">Business / organization</label><input id="company" name="company" autocomplete="organization"></div><div class="field full"><label for="interest">What are you looking for?</label><select id="interest" name="interest"><option value="">Choose one (optional)</option>${data.services.map(item => `<option>${esc(item.title)}</option>`).join("")}<option>Something else</option></select></div><div class="field full"><label for="message">A little about it *</label><textarea id="message" name="message" required></textarea></div><div class="field full"><button class="button" type="submit">Send your note <span aria-hidden="true">↗</span></button></div><p class="form-status" role="status" id="contact-status">Your details open in your email app so you can review before sending.</p></form></div></section></main>`,
    faq: () => `<main>${pageHero("Frequently asked questions", "A few things you might be wondering.", "If you don’t see what you’re looking for, get in touch. We’re happy to talk it through.")}<section class="section wrap">${faqList()}</section>${ctaSection}</main>`,
    privacy: () => `<main>${pageHero("The details", "Privacy policy.", `Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`)}<section class="section wrap"><article class="legal-copy"><p>This template policy is provided as a starting point and is not legal advice. Replace it with a policy that reflects your actual business, jurisdiction, and data practices before publishing.</p><h2>Information we collect</h2><p>We may receive information you choose to share when you contact us, such as your name, email address, organization, and the contents of your message. This static template does not store form submissions or use analytics by default.</p><h2>How information is used</h2><p>Information you send is used to respond to your inquiry and provide requested services. We do not sell personal information. Add details here about any tools or processors your business uses.</p><h2>Cookies and third parties</h2><p>This site may load fonts and images from third-party providers. Their services may receive technical information such as your IP address. Update this section to reflect your final hosting, analytics, and cookie setup.</p><h2>Your choices and contact</h2><p>For questions or requests about your information, contact <a href="mailto:${esc(data.contact.email)}">${esc(data.contact.email)}</a>. Applicable rights vary by location; describe how your business handles requests here.</p></article></section></main>`,
    terms: () => `<main>${pageHero("The details", "Terms of use.", `Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`)}<section class="section wrap"><article class="legal-copy"><p>This template text is provided as a starting point and is not legal advice. Have a qualified professional adapt it to your business and applicable laws before publishing.</p><h2>Using this website</h2><p>By accessing this website, you agree to use it lawfully and not to disrupt its operation or infringe the rights of others. Website content is provided for general information and may change without notice.</p><h2>Intellectual property</h2><p>Unless otherwise stated, original materials on this website belong to the business identified here. Do not use third-party marks, photography, or content without permission or a suitable license.</p><h2>Information and services</h2><p>Descriptions of services are illustrative and do not create an offer or guarantee. Any engagement will be governed by a separate written agreement.</p><h2>Contact</h2><p>Questions about these terms? Contact <a href="mailto:${esc(data.contact.email)}">${esc(data.contact.email)}</a>.</p></article></section></main>`
  };
  const nav = `<a class="skip-link" href="#main-content">Skip to content</a><header class="site-header"><div class="wrap nav-bar"><a class="brand" href="index.html" aria-label="${esc(data.identity.name)} home"><span class="brand-mark" aria-hidden="true">m</span>${esc(data.identity.name)}</a><nav class="nav-links" id="primary-navigation" aria-label="Main navigation">${data.navigation.map(item => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}<a href="faq.html">FAQ</a><a href="contact.html">Contact</a></nav><div class="nav-actions"><a class="phone-link" href="tel:${esc(data.contact.phoneLink)}">${esc(data.contact.phone)}</a>${cta()}<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open menu">☰</button></div></div></header>`;
  const footer = `<footer class="site-footer"><div class="wrap"><div class="footer-top"><div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">m</span>${esc(data.identity.name)}</a><p>${esc(data.identity.intro)}</p></div><div class="footer-column"><h3>Explore</h3>${data.navigation.map(item => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}<a href="team.html">Our team</a><a href="testimonials.html">Client words</a></div><div class="footer-column"><h3>Say hello</h3><a href="mailto:${esc(data.contact.email)}">${esc(data.contact.email)}</a><a href="tel:${esc(data.contact.phoneLink)}">${esc(data.contact.phone)}</a><p>${esc(data.contact.hours)}</p>${data.social.map(item => `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)} ↗</a>`).join("")}</div><div class="footer-column"><h3>Good things, occasionally</h3><p>Ideas and notes from our world. No noise.</p><form class="newsletter-form" id="footer-newsletter"><label class="sr-only" for="footer-email">Email address</label><input id="footer-email" name="email" type="email" placeholder="Email address" required><button type="submit" aria-label="Subscribe">↗</button></form><span class="form-status" role="status"></span></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(data.identity.name)}. All rights reserved.</span><div class="footer-bottom-links"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="faq.html">FAQ</a></div></div></div></footer>`;
  const content = pages[page] || pages.home;
  document.documentElement.style.setProperty("--paper", data.theme.colors.paper);
  document.documentElement.style.setProperty("--ink", data.theme.colors.ink);
  document.documentElement.style.setProperty("--accent", data.theme.colors.accent);
  document.documentElement.style.setProperty("--muted", data.theme.colors.muted);
  document.documentElement.style.setProperty("--surface", data.theme.colors.surface);
  document.documentElement.style.setProperty("--heading", data.theme.fonts.heading);
  document.documentElement.style.setProperty("--body", data.theme.fonts.body);
  document.body.dataset.preset = data.theme.preset;
  document.body.dataset.layout = data.theme.layout;
  app.innerHTML = `${nav}<div id="main-content" tabindex="-1">${content()}</div>${footer}`;
  const pageTitle = document.querySelector("title");
  const titleNames = { home: "Home", about: "About", services: "Services", "service-detail": "Service details", solutions: "Solutions", work: "Projects", team: "Team", testimonials: "Testimonials", journal: "Journal", contact: "Contact", faq: "FAQ", privacy: "Privacy policy", terms: "Terms" };
  if (pageTitle) pageTitle.textContent = `${titleNames[page] || "Home"} | ${data.identity.name}`;
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === `${page}.html` || (page === "home" && link.getAttribute("href") === "index.html")) link.setAttribute("aria-current", "page");
  });
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("reduced-motion");
  const header = document.querySelector(".site-header");
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
    navLinks.classList.toggle("open", !expanded);
  });
  navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    }
  });
  document.querySelectorAll(".faq-question").forEach(button => button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    document.getElementById(button.getAttribute("aria-controls")).hidden = expanded;
  }));
  document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = button.dataset.filter !== "All" && card.dataset.category !== button.dataset.filter;
    });
  }));
  const journalSearch = document.getElementById("journal-search");
  if (journalSearch) journalSearch.addEventListener("input", () => {
    const query = journalSearch.value.trim().toLocaleLowerCase();
    const cards = [...document.querySelectorAll(".article-card")];
    let matches = 0;
    cards.forEach(card => {
      const visible = card.textContent.toLocaleLowerCase().includes(query);
      card.hidden = !visible;
      if (visible) matches++;
    });
    document.getElementById("journal-search-status").textContent = `${matches} article${matches === 1 ? "" : "s"} found.`;
  });
  const contactForm = document.getElementById("contact-form");
  if (contactForm) contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const fields = new FormData(contactForm);
    const subject = encodeURIComponent(`Website inquiry from ${fields.get("name")}`);
    const body = encodeURIComponent(`Name: ${fields.get("name")}\nEmail: ${fields.get("email")}\nBusiness: ${fields.get("company") || "Not provided"}\nInterested in: ${fields.get("interest") || "Not specified"}\n\n${fields.get("message")}`);
    document.getElementById("contact-status").textContent = "Opening your email app with your message. Please send it from there.";
    window.location.href = `mailto:${encodeURIComponent(data.contact.email)}?subject=${subject}&body=${body}`;
  });
  document.querySelectorAll(".newsletter-form").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = form.querySelector(".form-status") || form.nextElementSibling;
    if (status) status.textContent = "Thanks — connect this form to your email platform to collect signups.";
    form.reset();
  }));
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add("visible"));
})();
