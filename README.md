# Hardik Offset — one-page business website

A fast, responsive, accessible static landing page for **https://hardikoffset.in**, built with plain HTML, CSS and JavaScript. Ready for GitHub Pages; **no Node/npm, database, server or build process required**.

## Files

- `index.html` — page content, search metadata, business JSON-LD
- `styles.css` — responsive layouts and all styling
- `script.js` — mobile menu, preselected enquiry types, WhatsApp quote message
- `assets/` — original, illustrative SVG assets (not photos of actual machinery)
- `CNAME` — intended GitHub Pages domain `hardikoffset.in`
- `.nojekyll`, `robots.txt`, `sitemap.xml`

## Features

- Responsive navigation, service cards, publication records, company story, address and directions.
- Tapping the displayed `+91 92272 30230` takes visitors to **WhatsApp** via `https://wa.me/919227230230` — it does **not** dial a call. A separate explicit **Call directly instead** link uses `tel:`.
- Enquiry form creates a **pre-filled WhatsApp message** with the visitor's chosen print type, optional name, quantity and requirements. Visitors can review the text before sending. No data is stored or sent to a website server.
- Mobile sticky WhatsApp button, keyboard-friendly mobile menu, accessibility labels, reduced-motion support.
- Search-engine metadata, canonical URL, structured LocalBusiness data, sitemap and share-card artwork.

## Deploy on GitHub Pages

1. Create a **public GitHub repository** named `hardikoffset` (or any repo name) on the account that will host the site.
2. Upload **the contents of this folder into the repository root**, preserving `assets/` and `CNAME` (don't upload only the ZIP).
3. Commit to the `main` branch.
4. In **Repository → Settings → Pages**, choose **Deploy from a branch**, Branch: `main`, Folder: `/(root)`, then click **Save**.
5. In **Pages → Custom domain**, enter `hardikoffset.in` and save. The included `CNAME` file already contains that domain.
6. At your DNS provider, add these GitHub Pages A records for the root domain. Remove conflicting parked/old A records:

   | Type | Host/name | Value |
   |---|---|---|
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |

7. **Recommended:** add a `CNAME` record `www` → `<YOUR-GITHUB-USERNAME>.github.io` (replace with your actual account). Don't point `www` CNAME at `hardikoffset.in`. GitHub Pages will redirect to the configured apex domain.
8. Wait for GitHub Pages and DNS to finish provisioning, then enable **Enforce HTTPS** in **Settings → Pages**. Propagation/certificate availability can take up to 24 hours.
9. Also consider GitHub's custom-domain verification, which reduces takeover risk. Do **not** use wildcard `*` DNS entries.

Official GitHub documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Test locally

Run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000/`.

## Edit your details

- WhatsApp/mobile: search for `919227230230` in `index.html` and `script.js`. Displayed digits appear as `92272 30230`.
- Business name, description, address: `index.html` including the JSON-LD section.
- Colors, layout and mobile styles: `styles.css` (`:root` at the top).
- Publication cards: edit titles/links in the `#publications` section of `index.html`.

## Facts and publication review before going live

- **Government-verified:** Hardik Offset appears in the Press Registrar General of India's (PRGI) accepted press list associated with **Raju Hasaram Dhanrajani**, near Old Lathi Bazar, Ahmedabad 380022.
  https://prgi.gov.in/index.php/our-services/approved-printing-press-list-page
- **Historical record:** *Kalpatru* (Gujarati weekly) registered 24 March 1999, with updated registration June 2026. Its record names Hardik Offset as printing press, and Raju Hasaram Dhanrajani as owner/publisher/editor of **Kalpatru** (which is **not** necessarily proof that he owns the press).
  https://prgi.gov.in/registration-title-details-data/20b8bb1c-2bef-423d-a266-a548c49cd113
- Other publication names and languages also link directly to PRGI title registrations on the live site. These are **historical records, not necessarily active customers**.
- Different historic government records spell the commercial centre `Golul`, `Gokul Commercial Centre`, or `Gokul Centre`, and cite different shop numbers (2, 6–9, and cellar). **Confirm the precise current shop number/address with the business before publishing**; this site's display uses the common Gokul Commercial Centre/Old Lathi Bazar landmark without claiming a precise shop number.
- The WhatsApp number **9227230230 was provided by the website requester**; confirm the account can receive messages before launch.
- Brochures, cards, invitations, books and catalogues are explicitly phrased as **types of enquiries**, not guaranteed in-house printing services.
- We have **not** claimed an exact year of business establishment, current customer count, specific printing equipment, business hours, GST number, pricing or production capacity.
- The decorative printing press image is **an original stylized illustration**, not a photograph of Hardik Offset's machinery.

## Hosting limitation

This is a static website. GitHub Pages cannot collect enquiries into a database by itself. The form hands off to WhatsApp; the visitor still needs to send the message in WhatsApp. No third-party contact-form service or tracking is installed.
## Original visiting-card identity

- `assets/hardik-offset-logo.png` is an AI-assisted cleaned reconstruction of the red monogram and swoosh in the user-supplied existing card, not the original vector master.
- Contact emails transcribed from that card: `hardikoffset@gmail.com` and `raju.press@yahoo.com`.
