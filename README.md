# Clerk Repro

1. Create a new application in Clerk dashboard
2. Configure paths (/apps/<app_id>/instances/<instace_id>/paths)
   - `Fallback development host` = `http://localhost:3000`
   - `Sign-in-page on development host` = `/sign-in`
   - `Sign-up page on development host` = `/sign-in`
   - User Button `Page on development host` = ` ` (blank)
3. Disable account portal in Clerk dashboard
4. Copy API keys to `.env.local`
5. `pnpm install`
6. `pnpm dev`
7. Sign in to your account
8. Sign out of your account
   - You will be redirected to `accounts.dev/sign-in?redirect_url=<fallback_host>/home&__dev_session=<a.b.c&__clerk_db_jwt=<a.b.d>`.
