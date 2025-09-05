# W8list Architecture (ARCH.md)

## Client
- Expo React Native app (iOS/Android)
- React Native Web shell (sales-first: marketing site, checkout, login)

## Navigation
- Organizer Navigator → Dashboard, Events, Create Event, Reports, Finance, Inbox, Settings
- Attendee Navigator → Discover, Event Detail, Checkout, My Tickets, Account Settings
- Social Navigator → Popular, Waitlist, Resell, Friends, Map, Feed, Shop, Profile, Groups, Stories, Venues, Recommendations

## State
- Zustand for local UI state
- React Query for server state (data fetching, caching)

## Backend
- Supabase: Postgres, Auth, Storage, Realtime, Edge Functions
- Stripe: payments & payouts
- Optional Node/TypeScript service (future heavy logic)

## Auth & Security
- Supabase Auth (JWT) + RBAC claims
- Row Level Security (RLS) policies per table
- Roles: Attendee, Organizer, Collaborator, Admin, Moderator

## Payments
- Stripe PaymentIntent for ticket sales
- Stripe Connect for organizer payouts
- Edge Functions for webhooks (payment confirmation, refunds, fraud checks)

## Notifications
- Adapter layer:
  - Email (Resend/SendGrid)
  - Push (Expo/FCM)
  - SMS (Twilio)
- Used for confirmations, waitlist claims, event updates

## Community
- Supabase Realtime for event chat/groups
- Opt-in only
- Moderation: mute, ban, report

## Ticketing
- Tickets in Postgres (status: active, transferred, refunded)
- QR codes validated client + server
- Waitlists: claim windows + capacity checks

## Seatmap Data Model
- Seatmaps stored as JSON in Postgres (sections, rows, seats)
- Tickets mapped to section/seat IDs
- Organizer UI: seatmap builder modal writes JSON
- Validation keeps seats in sync with tiers

## Resale Transfer Flow
- Edge Function for resale listing + purchase
- Ownership reassigned (old owner → new owner)
- Audit trail in Postgres
- Organizer % fee deducted automatically

## Organizer Reports Layer
- Pre-computed Postgres views for sales, revenue, conversions
- Materialized views refreshed periodically
- Dashboard reads from aggregates

## Files & Assets
- Supabase Storage or S3/R2 for images (event banners, merch)

## Infra / DevOps
- Expo EAS for mobile builds
- Vercel/Netlify for web shell
- Render/Fly.io for backend if needed
- GitHub Actions for CI/CD
- Monitoring: Sentry (errors), Datadog/Logtail (logs)

---
