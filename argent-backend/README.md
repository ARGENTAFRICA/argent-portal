# Argent Backend API

Minimal backend API for Argent Africa - Authentication service using Supabase.

## Tech Stack

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Supabase** - Authentication
- **Node.js** - Runtime environment

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   - `SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (optional, for admin operations)

3. **Run development server:**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Authentication
- `GET /api/auth/user` - Get current user (requires Bearer token in Authorization header)

## Supabase Configuration

This backend uses Supabase for authentication. The Supabase credentials are configured in `src/index.ts`:

- **Project URL**: `https://mqsjjrglblvlfyjdmzyb.supabase.co`
- **Anon Key**: Configured in the code

Authentication is handled entirely by Supabase. Users sign up and log in through the frontend, which communicates directly with Supabase. The backend provides a simple endpoint to verify tokens if needed.

## Authentication

Authentication is handled by Supabase. The frontend communicates directly with Supabase for sign up, login, and logout. The backend provides a simple endpoint (`GET /api/auth/user`) to verify tokens if needed.

The authentication middleware (`src/middleware/auth.ts`) is available for protecting future routes if needed.

## Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check without building

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 3000) |
| `NODE_ENV` | Environment (development/production) | No |
| `SUPABASE_URL` | Supabase project URL | No (defaults to configured value) |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | No (defaults to configured value) |
| `CORS_ORIGIN` | Allowed CORS origin | No (default: http://localhost:8080) |

## License

MIT
