# Marketing / Public
/                       # Home: hero, features, CTAs (Create Event, Book Demo)
/pricing                # (Optional) Plans, fees, value props
/about                  # (Optional) Brand story, trust markers
/demo                   # Book a Demo form or scheduler
/auth                   # Login / Signup entry point
/legal/terms            # Terms of Service
/legal/privacy          # Privacy Policy

# Organizer App (after login)
/org                    # Dashboard: performance graph + key stats
/org/events             # Event List: search, filters, create button, table of events
/org/events/new         # Create Event: basics, tickets, seatmap modal, payouts, publish
/org/events/[eventId]/overview   # Event Overview: live stats, actions (edit, share, export)
/org/events/[eventId]/edit       # Event Edit: update basics/tickets/seatmap
/org/reports            # Reports: sales, revenue, conversions, exports
/org/finance            # Finance: payouts, statements, fee settings, tax toggle
/org/inbox              # Inbox: attendee messages, support threads
/org/marketing          # (Future) Promo tools: links, email/social
/org/settings           # Settings: profile, org details, branding, payout account, team

# Attendee Core (MVP)
/events                 # Discover: browse, search, categories, trending
/events/[slug]          # Event Detail: info, tickets, RSVP/waitlist, who's going
/checkout               # Cart/Checkout
/order/[orderId]        # Order Confirmation
/account/tickets        # Wallet: tickets, QR codes, transfers, resale
/account/settings       # Attendee profile, privacy, notifications

# Social / Community Expansion
/waitlist/[eventId]     # Public waitlist view (counts, avatars, social proof)
/resell                 # Validated resale marketplace (browse + list tickets)
/friends                # Friend finder, “who’s going” list
/popular                # Popular events feed, socially boosted
/map                    # Local events map: see what’s happening nearby
/feed                   # Community feed: posts, check-ins, photos
/shop                   # Merch + drops marketplace (organizers, brands)
/profile/[username]     # Public attendee profile
/groups                 # General community groups (e.g., “Ravers KC”)
/groups/[eventId]       # Event-based temporary group/chat
/stories/[eventId]      # Event Stories: IG/TikTok style, organizer + attendee curated
/following              # List of organizers/venues/curators a user follows
/venues                 # Venue directory page
/venues/[venueId]       # Venue profile: events, photos, follower counts
/recommendations        # Personalized event recommendations

# Shared System
/onboarding             # (Optional) Organizer first-time setup
/404                    # Error: page not found
/500                    # Error: server issue
/maintenance            # Status page
/auth/verify            # Verify Email
/auth/reset             # Reset Password

---

## MVP Template Integration
For each page above, create a corresponding screen/component in your app. If a page is not part of the MVP, display the `ComingSoon` component with the page title.

### Example Usage
```tsx
// src/screens/Organizer/DashboardScreen.tsx
import Screen from '../../components/ui/Screen';
import Text from '../../components/ui/Text';
export default function DashboardScreen() {
  return (
    <Screen>
      <Text variant="h1">Dashboard</Text>
      {/* Add v0 template here */}
    </Screen>
  );
}

// src/screens/Social/SocialScreen.tsx
import ComingSoon from '../../components/ui/ComingSoon';
export default function SocialScreen() {
  return <ComingSoon title="Social" />;
}
```

### Notes
- Update this map as new pages/templates are added.
- Use this as a reference for integrating v0 templates quickly.
