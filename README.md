<div align="center">

# 🏥 Hospital Management Frontend (BFF)

### Feature-sliced Next.js frontend for an Express REST API

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-000000?style=for-the-badge&logo=shadcnui&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-validation-3E67B1?style=for-the-badge&logo=zod&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

**[📦 Source](https://github.com/n1j10/Hospital-Management_M)**

</div>

---

## ✨ Overview

The frontend of the hospital platform, built as a **Backend-for-Frontend**. The browser never talks to the API directly: Server Components and Server Actions call the Express backend from the server and attach the user's token from an **httpOnly cookie**, so client-side JavaScript never sees the token.

## 🏗️ Architecture

```mermaid
flowchart LR
  B[Browser] -->|httpOnly cookie| N[Next.js server]
  N -->|Bearer token, server-side| API[Express REST API]
  API --> DB[(PostgreSQL)]
```

**Feature-sliced structure.** Each domain keeps its own data access and UI:

```
src/
├── app/                 # routes only (thin pages)
├── features/
│   └── patients/        # every feature has the same shape
│       ├── actions.ts   # Server Actions (mutations)
│       ├── queries.ts   # server-side reads
│       ├── schemas.ts   # Zod validation
│       ├── types.ts
│       └── components/
├── components/          # shared UI (layout, forms, tables)
├── lib/                 # api-client, auth, formatting
└── proxy.ts             # route protection
```

## 🧩 Features

Dashboard · Patients · Doctors · Departments · Appointments · Consultations and prescriptions · Admissions and discharge · Pharmacy (low-stock, expiring) · Users · Per-user notification read state · Animated landing page

## 🔐 Security

Security was designed in from the start:

| Area | Implementation |
| --- | --- |
| Token handling | JWT in an **httpOnly, Secure, SameSite=Lax** cookie, read only on the server (`server-only` modules) |
| API calls | One typed `apiFetch` wrapper. Dynamic path segments are **URL-encoded**, so a crafted id can't reach another endpoint |
| Session expiry | A 401 from the API sends the user to `/logout`, which clears the stale cookie |
| Validation | Zod runs on every form before any network call |
| HTTP headers | HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`; `X-Powered-By` removed |

> Secrets are stored only in environment variables. `.env*` is git-ignored, and `.env.example` contains placeholders only.

## 🚀 Getting Started

```bash
npm install
cp .env.example .env   # API_URL=http://localhost:5000/api
npm run dev
```

## ☁️ Deployment

Deployed on **Vercel**. Add the variables from `.env.example` under *Project → Settings → Environment Variables*, then push. Vercel builds and deploys automatically.

Set `API_URL` to the deployed backend URL.

## 👤 Author

**n1j10**, full-stack engineer (Next.js · TypeScript · Node.js · PostgreSQL)

[![GitHub](https://img.shields.io/badge/GitHub-n1j10-181717?style=for-the-badge&logo=github)](https://github.com/n1j10)

> If you find this project useful, a ⭐ on the repo is appreciated.
