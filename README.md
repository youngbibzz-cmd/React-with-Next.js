# Jordan Lee — Portfolio

A responsive frontend developer portfolio built with Next.js, React, TypeScript, and CSS. The App Router pages are server-rendered, and the contact form uses a small client component to prepare a message in the visitor’s email app.

## Run locally

Requires Node.js 20.9 or later. Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` and `npm run build` to check the project and create a production build; `npm run start` serves that build locally.

## Customize the sample content

- Update the sample name, email, biography, and social links in `app/` and `components/contact-form.tsx`.
- Edit project descriptions, skills, and the sample GitHub/demo URLs in `lib/portfolio.ts`.
- Replace the portrait and project photos in `public/images/` with your own images, keeping the filenames or updating the image paths in `lib/portfolio.ts`.
- The contact form opens the visitor’s default email app. Replace `hello@jordanlee.dev` with your email in `app/contact/page.tsx` and `components/contact-form.tsx`. To receive submissions directly, connect a form provider or implement a server-side email service.

## Deploy to Vercel

1. Push the project to a Git provider such as GitHub.
2. Sign in to [Vercel](https://vercel.com), choose **Add New → Project**, and import the repository.
3. Keep the detected Next.js build settings, then choose **Deploy**. Vercel runs the build and publishes the site.
4. Add a custom domain from the project’s **Settings → Domains** when you’re ready.
