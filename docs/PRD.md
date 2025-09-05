# W8list — PRD (Quick Context)

## Overview
- **Name:** W8list (pronounced “waitlist”)
- **Core:** Ticketing-first platform with waitlists, RSVPs, social proof, and light community features.
- **Goal:** Connect community + commerce + ticketing in one app.

---

## Users
- **Organizers:** Sell tickets, payouts, reporting, merch add-ons.
- **Attendees:** Buy/store tickets, join waitlists, resale, merch, social proof.
- **Collaborators:** Team roles with limited permissions.
- **Admins/Mods:** Compliance, fraud prevention, community tools.

---

## MVP Features
- **Ticketing Core:**  
  - Create/manage ticket tiers  
  - Attendee wallet + QR validation  
  - Stripe integration + instant payouts  
  - Organizer dashboard (events, sales, reports)

- **Waitlist/RSVP:**  
  - Join waitlist if sold out  
  - Public waitlists (social proof)  
  - Free RSVP tickets

- **Community Layer:**  
  - “Who’s Going” + badges  
  - Event chat/threads  
  - Friends/follow system  
  - Groups (event-based + general)  
  - Local event map + discovery feed  
  - Event stories

- **Merch & Add-ons:**  
  - Merch preorder at checkout  
  - Profiles store ticket + merch history  
  - Shop tab for drops

- **Resale Marketplace:**  
  - Validated resale inside wallet  
  - Organizers earn % of resale

- **Role Management:**  
  - Organizer, Collaborator, Admin permissions

---

## Future Features
- Advanced analytics, referrals, VIP perks
- Offline check-in
- Dynamic pricing, bundles
- AI recommendations
- Music integrations (Spotify, Apple)

---

## Tech Stack
**Frontend:** Expo + React Native (iOS/Android/Web)  
- React Navigation, Zustand, React Query, React Hook Form  
- NativeWind (UI), Expo Barcode Scanner, Expo Notifications  

**Backend:** Node.js + TypeScript (Express/NestJS)  
- PostgreSQL + Prisma ORM (Supabase/Neon)  
- Supabase Auth (JWT/RBAC)  
- REST APIs (tRPC later)  

**Integrations:** Stripe, Apple/Google Wallet, Twilio, SendGrid/Resend, Expo/FCM  

**Infra/DevOps:** Expo EAS, Render/Fly.io, Supabase Storage/S3, GitHub Actions, Sentry/Datadog  

---

## Success Metrics
- **MVP:** Ticket sales, time-to-sellout, conversion rate  
- **Secondary:** Merch sales, waitlist conversions, resale activity  
- **Community:** Opt-in rate (“I’m Going”), group/chat participation  
- **Health:** DAU/MAU, organizer retention, uptime

---

## Risks
- **Tech:** On-sale spikes, overselling, fraud → mitigated w/ Stripe & queues  
- **Business:** Slow organizer adoption, underused social features  
- **Community:** Toxic chats, privacy concerns  
- **Ops:** Small team bandwidth, app store delays → fallback web always on
