# ReflectionTalks — Sabina Oulham

Recreare în React a site-ului [reflectiontalks.my.canva.site](https://reflectiontalks.my.canva.site/),
construită cu **React 19 + TypeScript + Vite + React Router**. Păstrează identitatea vizuală
a originalului (maro închis, roz prăfuit, teracotă, crem, serif Cormorant, spirala din logo)
și rezolvă problemele de design ale versiunii Canva:

- hero clar, cu mesaj și call-to-action „Book a free check-in call” vizibil imediat;
- povestea „My Lifepath” împărțită în trei piloni (Woman · Motherhood · Creativity);
- prețurile afișate în carduri, cu reducerea de lansare vizibilă;
- butoane consecvente, fiecare cu destinația corectă (email cu subiect precompletat);
- layout responsive real pe mobil, cu meniu dedicat;
- text alternativ pe imagini, H1 pe fiecare pagină, meta description în engleză;
- footer propriu, fără brandingul Canva.

## Pagini

| Rută         | Pagina                      |
| ------------ | --------------------------- |
| `/`          | Welcome + My Lifepath       |
| `/gifts`     | My Gifts to You (1:1)       |
| `/destiny`   | Your Next Destiny Program   |
| `/community` | Our Monthly Community       |
| `/podcast`   | My PodcastTalks             |
| `/contact`   | Get in Touch                |

## Rulare locală

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # verifică tipurile și generează build-ul în dist/
npm run preview  # servește local build-ul din dist/
npm run lint     # rulează oxlint
```

## Structura proiectului

```
src/
  data/content.ts     ← TOT conținutul: texte, prețuri, emailuri, imagini (cu focus/zoom)
  components/         ← Header, Footer, PageHero, CheckInBand, Spiral (logo SVG), PhotoImg
  pages/              ← câte o componentă pe pagină
  index.css           ← paletă, tonuri de secțiune, butoane, animații
  App.css             ← stilurile componentelor + responsive
```

## Deploy

Site-ul se publică automat pe GitHub Pages la fiecare push pe `main`
(`.github/workflows/deploy.yml` din rădăcina repo-ului). Workflow-ul setează `VITE_BASE`
la `/<repo>/`, iar build-ul copiază `index.html` în `404.html`, ca linkurile directe
(ex. `/ReflectionTalks/gifts`) să funcționeze. Local, `VITE_BASE` lipsește și site-ul
rulează de la `/`.

## Înainte de lansare

- **Imaginile** sunt încă servite de pe site-ul Canva (`ASSETS` în `content.ts`). Descarcă-le în
  `public/images/` și schimbă `ASSETS` în `'/images/'`, altfel dispar dacă site-ul Canva e șters.
- **Datele din Destiny Program** („We take off in January”, early-bird până la 1 December)
  sunt preluate ca atare — actualizează-le în `content.ts`.
- **Rezervările** se fac prin email (ca în original). Dacă se folosește Calendly sau altceva,
  schimbă linkurile din `links` / `mailto` în `content.ts`.
