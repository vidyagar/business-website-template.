# Morrow — universal business website template

A responsive, multi-page static website starter for service businesses, studios, independent retailers, consultants, wellness brands, and more. It uses plain HTML, CSS, and JavaScript with no build step or runtime dependencies.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. Internet access is used for the Google Fonts and Unsplash demo photography; replace those sources with assets you own or are licensed to use before launch.

## Customize

1. Edit `config.js` to update the business name, tagline, contact details, theme colors and fonts, navigation, services, solutions, project gallery, team, testimonials, journal cards, FAQs, and social links.
2. Replace the illustrative copy and client examples in `config.js`; update the About, Service details, Privacy, and Terms page copy in `app.js` to reflect your business.
3. Pick `theme.preset` (`editorial`, `light`, or `dark`) and `theme.layout` (`editorial`, `classic`, or `bold`), then adjust `theme.colors` / `theme.fonts`. Layout and content stay separate from the shared presentation layer.
4. Swap demo Unsplash photo IDs in `config.js` for original or properly licensed images. Meaningful images have descriptive alt text; decorative images use empty alt text.
5. Connect the newsletter forms to your email provider. The contact form validates fields in the browser and opens a prefilled email draft; it does not transmit or store submissions. WhatsApp, phone, and email links use the values in `config.js`.
6. Replace the starter Privacy Policy and Terms with jurisdiction-appropriate text reviewed for your business.

## Pages

Home, About, Services, Service details, Solutions, Projects, Team, Testimonials, Journal, Contact, FAQ, Privacy, and Terms. Every page shares the same responsive navigation and footer.

## Included interactions

Mobile navigation, active-page navigation state, keyboard-visible focus, reduced-motion support, scroll reveals, project category filters, journal search, FAQ accordions, browser-validated contact form, and a newsletter interface placeholder.

## Production notes

Use your own domain and hosting, configure social sharing metadata, connect forms to a secure backend or email platform, and review accessibility, legal copy, image licenses, and SEO metadata before publishing. The static contact form intentionally relies on the visitor's email application; a production contact endpoint requires a provider or server-side implementation.
