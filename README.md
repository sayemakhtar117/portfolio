# Portfolio

A React + Vite portfolio built from your resume, styled as an "API console" — the
hero renders like a `curl` request/response and each section reads like a
documented endpoint (`GET /experience`, `GET /skills.config`, etc.), fitting a
backend/Java-Spring profile.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd portfolio
npm install
npm run dev
```

Open the printed `localhost` URL. Edit content in `src/App.jsx` (all your resume
data lives in the arrays at the top of the file) and styling in `src/index.css`.

To produce the production build:

```bash
npm run build
```

This outputs static files to `dist/` — a plain HTML/CSS/JS site with no server
required, which is what makes free hosting possible.

## 2. Free hosting — GitHub Pages via GitHub Actions

This repo already includes `.github/workflows/deploy.yml`, so pushing to
`main` automatically builds and deploys the site — no third-party sign-up.

**Steps:**

1. Create a new GitHub repository and push this folder:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. On GitHub, go to your repo → **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch").
4. Push any change to `main` (or go to the **Actions** tab and run the
   "Deploy to GitHub Pages" workflow manually) — it builds the Vite app and
   publishes `dist/` automatically.
5. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.
   `vite.config.js` is already set up with relative asset paths (`base: './'`)
   so it works correctly at that subpath with no extra config.

Every future push to `main` redeploys automatically — that's the whole benefit
of the Actions-based flow over a manual build-and-upload.

**One limitation to know:** GitHub Pages doesn't support custom HTTP response
headers, so the `Content-Security-Policy` / `Strict-Transport-Security`
headers described in section 4 can't be applied directly through Pages
(unlike Vercel/Netlify/Cloudflare Pages, which read `vercel.json` or a
`_headers` file). For a personal portfolio with no login form or user data,
this is a low-risk gap — but if you want those headers enforced, put
[Cloudflare](https://developers.cloudflare.com/pages/how-to/custom-headers/)
in front of your `github.io` site for free, or use one of the alternatives
below instead.

### Alternatives (also free, and support custom headers)

- **Vercel**: `git push`, import the repo at [vercel.com](https://vercel.com),
  it auto-detects Vite. The `vercel.json` already in this project applies the
  security headers from section 4 automatically.
- **Netlify**: same GitHub-import flow, or drag-and-drop `dist/` manually.
  Move the header rules into a `_headers` file — ask and I'll generate one.
- **Cloudflare Pages**: free, HTTPS + CDN + strong DDoS protection, and
  supports a `_headers` file the same way Netlify does.

## 3. Custom domain (optional, and can be $0)

Mapping a custom domain to GitHub Pages costs nothing — GitHub doesn't charge
for this. The only possible cost is *owning* the domain name itself. Two
paths, depending on whether you want to spend anything on that:

### Option A — you already own a domain (or don't mind buying one)

1. In your DNS provider's dashboard, add:
   - For an apex domain (`developer.dev`): four `A` records pointing to
     GitHub's Pages IPs — `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`.
   - For a subdomain (`portfolio.developer.dev`): a `CNAME` record pointing
     to `<your-username>.github.io`.
2. In your repo, edit `public/CNAME` (already in this project) and replace
   the placeholder with your real domain, e.g. `developer.dev`. Vite copies
   anything in `public/` straight into `dist/`, so it ships automatically.
3. Push — the next Actions run publishes it. GitHub Pages issues a free
   HTTPS certificate for the domain automatically (usually within an hour).
4. In **Settings → Pages**, confirm the custom domain shows a green check
   and tick **Enforce HTTPS**.

A domain from a low-cost registrar (Namecheap, Porkbun, Cloudflare
Registrar) runs roughly $5–15/year depending on the extension — the
mapping itself is still free either way.

### Option B — genuinely $0, no domain purchase

Use a free subdomain-hosting service instead of buying a domain:

- **[is-a.dev](https://www.is-a.dev/)** — free, popular with developers for
  exactly this use case. You get e.g. `developer.is-a.dev` by submitting a small
  JSON file to their GitHub repo pointing at your `github.io` site. Fully
  free, no ads, no catch — it's a community-run project.
- **[eu.org](https://nic.eu.org/)** — free domain registration if you don't
  mind a `.eu.org` suffix.

Both work the same way once approved: add the CNAME record they specify,
point it at `<your-username>.github.io`, and set `public/CNAME` in this repo
to the domain they give you.

Skip this section entirely and stick with the free
`https://<your-username>.github.io/<repo-name>/` URL if a custom domain
isn't a priority right now — it works identically otherwise.

## 4. Security hardening

This is a static site (no backend, no database, no login form), so the attack
surface is already small. Still, do these:

- **HTTPS everywhere** — Vercel/Netlify/Cloudflare Pages enforce this by
  default; never serve the live site over plain HTTP.
- **Security headers** — already configured in `vercel.json`:
  - `Content-Security-Policy` — restricts what scripts/styles/fonts can load,
    blocking most injected-script attacks.
  - `X-Frame-Options: DENY` — stops the site being embedded in a hidden
    iframe (clickjacking).
  - `X-Content-Type-Options: nosniff` — stops browsers guessing file types.
  - `Strict-Transport-Security` — forces HTTPS on every future visit.
  - `Referrer-Policy` and `Permissions-Policy` — limit what data leaks to
    other sites and disable camera/mic/geolocation access no site here needs.
  (If you switch to Netlify, move the same rules into a `_headers` file — ask
  and I'll generate one.)
- **No secrets in the frontend** — never put API keys, email-service tokens,
  or credentials directly in `src/`. Anything in a React bundle is publicly
  visible to anyone who views the page source. If you later add a contact
  form, send it through a serverless function (Vercel/Netlify support these
  free) that holds the secret server-side, not the browser.
- **Keep dependencies patched** — run `npm audit` periodically and
  `npm update` to pick up security fixes in React/Vite and their dependencies.
- **Don't self-host on a random VPS unless you plan to maintain it** —
  managed platforms like Vercel/Netlify/Cloudflare Pages patch their own
  infrastructure, handle TLS renewal, and absorb basic DDoS traffic for you.
  A self-managed server (e.g. plain Nginx on a VPS) needs you to handle
  firewall rules, TLS renewal (Let's Encrypt/certbot), and OS patching
  yourself — more control, more responsibility.
- **Rate-limit or disable any future contact form** — if you add one, use a
  spam-protection service (e.g. a serverless function with basic rate
  limiting) rather than emailing directly from client-side JS.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json        # security headers for Vercel
├── src/
│   ├── main.jsx
│   ├── App.jsx         # all resume content lives here
│   └── index.css
```
