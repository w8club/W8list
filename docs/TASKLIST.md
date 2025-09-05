# W8list Project Tasklist (Phased + Test-First)

---

## Phase 1 — MVP (Core Product)
**Goal:** Ticket sales, wallet, payouts, basic notifications.  
**Testing Focus:** E2E > integration > (minimal) unit.

### Foundation
- [ ] Init repo (Expo + RN + TS + ESLint/Prettier)
- [ ] Add NativeWind, React Navigation, Zustand, React Query
- [ ] GitHub Actions (CI) + EAS builds
- [ ] Sentry + Logtail/Datadog
- [ ] **TEST:** Choose RN E2E framework → **Maestro** (simple) or **Detox** (more control)
  - [ ] Add test runner + sample test
  - [ ] Add CI job to run E2E on emulator (Android first)

### Design System
- [ ] Tokens + ThemeProvider + useTheme
- [ ] UI primitives (Screen, Text, Button, Card, Input, Select, Tabs)
- [ ] ComingSoon component
- [ ] **TEST:** Visual smoke E2E (screens render without crash)

### Navigation
- [ ] RootNavigator (tabs) + Organizer/Attendee stacks
- [ ] **TEST (E2E):** Tab switch + basic screen navigation works

### Organizer Core
- [ ] DashboardScreen
- [ ] EventsListScreen
- [ ] EventNewScreen (create event + tickets + payouts)
- [ ] EventOverviewScreen
- [ ] SettingsScreen
- [ ] **TEST (E2E):** Organizer happy path
  - [ ] Create Event → add ticket tier → save draft
  - [ ] Publish event (mock backend) → overview shows published
  - [ ] Payout account connect flow (mocked)

### Attendee Core
- [ ] EventsScreen (Discover)
- [ ] EventDetailScreen (tiers, RSVP)
- [ ] CheckoutScreen
- [ ] OrderScreen (confirmation)
- [ ] MyTicketsScreen (wallet + QR)
- [ ] AccountSettingsScreen
- [ ] **TEST (E2E):** Attendee happy path
  - [ ] Discover → Event Detail → Select tier → Checkout → Order confirm
  - [ ] Ticket appears in Wallet with QR
  - [ ] QR validates (mock validation endpoint)

### Backend Core (Supabase + Stripe)
- [ ] Schema: users, events, tickets, orders, waitlists
- [ ] Supabase Auth (JWT + RBAC) + RLS
- [ ] Edge Function: purchase confirmation (webhook-safe)
- [ ] Edge Function: waitlist claim
- [ ] Stripe PaymentIntent + Connect payouts
- [ ] Webhooks: payment confirm / refunds
- [ ] **TEST (Integration/E2E via mocks):**
  - [ ] Seed script (test org, test event, test tier)
  - [ ] Mock Stripe in tests (success, fail)
  - [ ] E2E: waitlist join → claim notification received (mock) → purchase succeeds

### Notifications
- [ ] Email (Resend/SendGrid), Push (Expo/FCM), SMS (Twilio)
- [ ] Triggers: purchase confirm, waitlist claim, event reminder
- [ ] **TEST (E2E mock):** Assert notification enqueue events fired

---

## Phase 2 — Enhanced Features
**Goal:** Seatmaps, Reports/Finance, Merch.

### Organizer
- [ ] EventEditScreen
- [ ] ReportsScreen (sales, revenue, conversions, exports)
- [ ] FinanceScreen (payouts, statements, tax)
- [ ] InboxScreen
- [ ] MarketingScreen
- [ ] **TEST (E2E):** Reports filters persist; export triggers; statements download mock

### Seatmaps
- [ ] Seatmap JSON model (sections/rows/seats)
- [ ] Seatmap builder modal
- [ ] Assign seats to tiers; sync validation (no double-booking)
- [ ] **TEST (E2E):** Assign seats → purchase specific seat → wallet shows seat

### Merch & Shop
- [ ] Merch preorder at checkout
- [ ] Merch history on profile
- [ ] Organizer shop tab + Social Shop screen
- [ ] **TEST (E2E):** Add merch to order → payment → order shows ticket + merch

---

## Phase 3 — Community & Social
**Goal:** Social proof, engagement, resale.

### Social Layer
- [ ] Popular, Waitlist (public), Resell, Friends, Map, Feed, Profile
- [ ] Groups + EventGroup (Realtime chat)
- [ ] Stories, Following, Venues, Venue, Recommendations
- [ ] **TEST (E2E):**
  - [ ] Toggle “I’m Going” → visible on event
  - [ ] Join group → post message → appears for others (mock realtime)
  - [ ] Follow organizer → personalized feed shows their events

### Backend Social
- [ ] Edge Function: resale transfer flow + audit trail + fee share
- [ ] Realtime chat channels; moderation endpoints (report, mute, ban)
- [ ] **TEST (E2E):** List ticket for resale → buy as user B → ownership moves to user B

---

## Phase 4 — Advanced & Growth
**Goal:** Differentiate + scale.

### Analytics
- [ ] Materialized views; heavy dashboards
- [ ] AI recommendations
- [ ] Referrals, dynamic pricing, bundles, VIP perks
- [ ] Music integrations (Spotify/Apple)
- [ ] **TEST (E2E/Contract):** Analytics endpoints return aggregates with filters

### Infra/DevOps
- [ ] Optional Node/TS service for heavy workflows
- [ ] Offline check-in mode
- [ ] Observability deep dive
- [ ] **TEST (CI):** Run E2E on PR with seeded data; block merge on failures

---

## Phase 5 — QA & Testing Infrastructure (Ongoing)
**Framework & Runner**
- [ ] Pick one: **Maestro** (yaml flow, simple) or **Detox** (JS, powerful)
- [ ] Local emulator scripts (Android first; iOS later)

**Test Data & Mocks**
- [ ] `scripts/seed.ts` → create org, event, tiers, user accounts
- [ ] Stripe mock (success/failure/refund)
- [ ] Notifications mock (email/push/SMS queue assertions)
- [ ] Feature flags for test variants (e.g., seatmaps on/off)

**Core E2E Scenarios**
- [ ] Organizer: create event → publish → overview updates
- [ ] Attendee: browse → purchase → wallet → QR validate
- [ ] Waitlist: join → claim → checkout
- [ ] Resale: list → buy → ownership transfer
- [ ] Merch: add to order → confirm
- [ ] Reports: filter → export
- [ ] Finance: payout created → statement available

**Quality Gates**
- [ ] Run E2E in CI on each PR (smoke subset) + nightly full suite
- [ ] Flake control (retry policy, screenshots/video on fail)
- [ ] Minimal unit tests for pure utils only (date/price/validators)
- [ ] Contract tests for Edge Functions (input/output schemas)

---
