# Deployment Notes

**Date:** 2026-02-22  
**Engineer:** Beck (BlueCorp infra)

## Status

Production is live and up to date:

**https://scooters-web.vercel.app** -- HTTP 200, serving latest build

The user location feature (pulsing blue dot + Locate Me button, commit `e2fbda2`) is included in the current production build. The latest deployed commit is `d7c40c1`.

## What Happened

Vercel is connected to the GitHub repo (`blue-plhery-assistant/zurich-scooters`) via the Vercel GitHub App. Every push to `main` triggers an automatic deployment. No manual token or CLI invocation is needed for normal deployments.

The deployment for `d7c40c1` completed successfully at 2026-02-22T21:22:43Z with status `success`, confirmed via the GitHub Deployments API.

## Token Situation

Both stored Vercel tokens are invalid (both return `403 forbidden / invalidToken`):

- `accounts/vercel/blue.assistant/api-token` -- invalid
- `accounts/vercel/blue.assistant/refresh-token` -- invalid

Because there is no valid token, a new one cannot be generated programmatically. The Vercel API requires an existing valid token to create a new token.

**Action required for Paul:** To restore a working API token for future use (e.g. manual deploys, checking logs, managing project settings):

1. Go to https://vercel.com/account/tokens
2. Create a new token (name it something like `blue-assistant-cli`)
3. Run:
   ```
   gopass insert accounts/vercel/blue.assistant/api-token
   ```
   Paste the new token when prompted.
4. Delete the old refresh-token entry (it is stale):
   ```
   gopass rm accounts/vercel/blue.assistant/refresh-token
   ```

**This is not blocking** -- the Vercel GitHub integration handles all production deployments automatically. A personal API token is only needed for CLI operations (checking deployment logs, triggering manual redeploys outside of git push, etc.).

## How Deployments Work

- Push to `main` on GitHub -> Vercel GitHub App picks it up -> builds and deploys automatically
- Production alias: `https://scooters-web.vercel.app`
- Vercel project ID: `prj_kXnE6cO6xNcGYp4bXWrUKnaxmwXX`
- Org/team ID: `team_ulrAEX7ZnL8PH32B1pdIYzjT`
