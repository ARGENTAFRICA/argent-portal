# Backend (Supabase Auth)

This folder contains a minimal Express API that fronts Supabase Auth for sign-up, sign-in, and
fetching the current user. It is intended to keep auth logic on the server while you use the
Supabase project for identity management.

## Setup

1. Copy the example environment file and fill in your Supabase keys:

   ```bash
   cp .env.example .env
   ```

2. Install dependencies from this folder:

   ```bash
   npm install
   ```

3. Run the API:

   ```bash
   npm run dev
   ```

The server listens on `PORT` (defaults to `4000`).

## Routes

- `GET /health` — Basic health check.
- `POST /auth/signup` — Body: `{ "email": "", "password": "", "redirectTo": "" }`.
- `POST /auth/login` — Body: `{ "email": "", "password": "" }`.
- `GET /auth/me` — Requires `Authorization: Bearer <access_token>`.
- `POST /auth/logout` — Returns guidance to clear the client session.

## Notes

- `SUPABASE_ANON_KEY` is used for user-facing auth operations.
- `SUPABASE_SERVICE_ROLE_KEY` is optional and can be used later for admin operations.
