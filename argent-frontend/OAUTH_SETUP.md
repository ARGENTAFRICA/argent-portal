# OAuth Setup Guide

## Environment Variables

1. Create a `.env` file in the `argent-portal` directory with:
```
VITE_SUPABASE_URL=https://mqsjjrglblvlfyjdmzyb.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xc2pqcmdsYmx2bGZ5amRtenliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3Nzk2OTIsImV4cCI6MjA4NTM1NTY5Mn0.aD7yEtu26KSOlMkIBeHF2Gi20Ch9QuEcNsjixgGEB4A
```

2. Restart your dev server after creating the `.env` file.

## Supabase OAuth Configuration

To enable OAuth providers (Google, GitHub), you need to configure them in your Supabase dashboard:

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Set application type to "Web application"
6. Add authorized redirect URI: `https://mqsjjrglblvlfyjdmzyb.supabase.co/auth/v1/callback`
7. Copy the Client ID and Client Secret
8. In Supabase Dashboard → Authentication → Providers → Google:
   - Enable Google provider
   - Paste Client ID and Client Secret
   - Save

### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Set Application name: "Argent Africa"
4. Set Homepage URL: `http://localhost:8080` (or your production URL)
5. Set Authorization callback URL: `https://mqsjjrglblvlfyjdmzyb.supabase.co/auth/v1/callback`
6. Copy the Client ID and Client Secret
7. In Supabase Dashboard → Authentication → Providers → GitHub:
   - Enable GitHub provider
   - Paste Client ID and Client Secret
   - Save

### Important Notes

- The redirect URI must match exactly: `https://mqsjjrglblvlfyjdmzyb.supabase.co/auth/v1/callback`
- For production, update the redirect URI in your OAuth provider settings
- The `.env` file is gitignored and won't be committed to the repository
