# Copilot Context — W8list

## Project Overview
- **Name:** W8list (waitlist → “W8list” brand spelling).
- **Core:** Ticketing-first platform with waitlists, RSVPs, resale marketplace, merch add-ons, and social/community features.
- **Stack:** Expo React Native (mobile + web shell), Supabase (Postgres, Auth, Realtime, Storage, Edge Functions), Stripe (payments & payouts).

## Docs in /docs
- **ARCH.md** → Architecture (client, backend, data flows, payments, seatmaps, resale, reports).
- **PRD.md** → Product Requirements (features, users, goals, flows, risks).
- **TASKLIST.md** → Project tasks with checkboxes, split into phases (MVP → Advanced).

## Development Rules
- **Design system:** Use tokens from theme (colors, spacing, radius, shadows, typography). No inline hex or magic numbers.
- **Primitives:** Always build UI using /components/ui (Screen, Text, Button, Card, Input, Select, Tabs).
- **Blocks:** Larger reusable UI patterns in /components/blocks.
- **Navigation:** RootNavigator → OrganizerNavigator, AttendeeNavigator, SocialNavigator. Each feature = Stack.Screen.
- **State:** Zustand (local), React Query (server).
- **Backend:** Supabase schema + Edge Functions for purchase confirm, waitlist claims, resale, payouts.
- **Payments:** Stripe PaymentIntent + Connect payouts. Webhooks for refunds and instant payouts.
- **Community:** Supabase Realtime for chat, opt-in only, with moderation.
- **Reports:** Pre-computed Postgres views for organizer analytics.

## Copilot Usage
- When generating code: 
  - Reference **ARCH.md** for architecture decisions.  
  - Reference **PRD.md** for product requirements.  
  - Reference **TASKLIST.md** for what to build next.  
- Respect tokens + primitives — no hardcoding styles.
- Create stubs with `<ComingSoon />` if functionality not yet ready.
- Keep components pure, state in Zustand or screen-level.
- Add accessibility roles for pressables.
- Write TypeScript types for all props.

---
