This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy with Neon (Postgres) on Vercel

This project uses Prisma with a Postgres datasource and works with NeonDB (which is Postgres-compatible).

Steps to deploy on Vercel with Neon:

1. Create a Neon project and get the connection string.
2. In the Vercel dashboard for your project, add an Environment Variable named `DATABASE_URL` with the Neon connection string.
	- It's recommended to append the query params `?sslmode=require&pgbouncer=true` to the URL for compatibility with serverless environments.
	- Example: `postgresql://username:password@ep-example-123456.neon.tech:5432/defaultdb?sslmode=require&pgbouncer=true`
3. Set NEXTAUTH_URL and NEXTAUTH_SECRET in Vercel
- Add both variables in your Vercel project (Production, Preview, Development).
- NEXTAUTH_URL: the public URL of your app (e.g. https://your-app.vercel.app). For local development use http://localhost:3000.
- NEXTAUTH_SECRET: a strong random string. Example generators:
    - OpenSSL: `openssl rand -base64 32`
    - Node: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- Make sure the values are consistent with the environment you’re deploying to (Production vs Preview).

4. Ensure Prisma client is generated during Vercel build
- Vercel runs `npm run build`. If you rely on `prisma generate` in `postinstall`/`postbuild`, confirm it’s defined in package.json, e.g.:
    - `"postinstall": "prisma generate"` or
    - include it in the build step: `"build": "prisma generate && next build"`
- Common issues:
    - Put `prisma` and `@prisma/client` in dependencies (not devDependencies) so they are available on the server during install.
    - `prisma generate` does not require a live DB; if it fails, check scripts and package placement.
- If generation still fails on Vercel, check build logs and ensure required env vars (if any) are set in the Vercel dashboard.

Local development:

- Copy `.env.example` to `.env` and set `DATABASE_URL` to a local Postgres or Neon connection string.
- Run `npm run dev`.

Notes:

- Keep your database credentials secret — do not commit a `.env` file with real credentials.
- If you run into connection limits on Vercel, verify that the Neon connection string includes `pgbouncer=true` and that you've followed Neon docs for connection pooling.
