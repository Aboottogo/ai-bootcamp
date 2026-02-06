# App Technical Requirements

> **For Cursor/AI Assistants:** This document specifies the technical constraints for student apps in this bootcamp. All technology choices must comply with these requirements. When in doubt, choose the simpler option.

---

## Overview

Students in this bootcamp are building their first web applications using AI assistance. All technical choices must optimize for:

1. **Free tier availability** — Students should not need to pay for any service
2. **Beginner friendliness** — Minimal configuration and setup complexity
3. **AI-assistant compatibility** — Well-documented tools that Cursor understands well
4. **Reliability** — Established services that won't disappear or change unexpectedly

---

## Required Tech Stack

### Framework: Next.js

- **Use:** Next.js with the App Router (not Pages Router)
- **Version:** Latest stable version
- **Styling:** Tailwind CSS (included with Next.js setup)
- **Why:** Next.js has excellent documentation, Cursor understands it well, and it deploys seamlessly to Vercel

#### Setup Command
```bash
npx create-next-app@latest my-app --tailwind --eslint --app --src-dir --import-alias "@/*"
```

When prompted:
- TypeScript: **Yes**
- ESLint: **Yes**  
- Tailwind CSS: **Yes**
- `src/` directory: **Yes**
- App Router: **Yes**
- Import alias: **Yes** (accept default `@/*`)

---

### Database: InstantDB

- **Service:** [InstantDB](https://www.instantdb.com)
- **Why this choice:**
  - Generous free tier with no project pausing (unlike Supabase which pauses after 7 days of inactivity)
  - Excellent AI/LLM support with built-in documentation for Cursor
  - Real-time sync and offline support built-in
  - Simple React hooks that are easy for beginners to understand
  - No separate backend code required

#### Key Features to Use
- `db.useQuery()` — Read data reactively
- `db.transact()` — Write data with automatic optimistic updates
- `db.useAuth()` — Handle user authentication
- Permissions system — Control who can read/write what data

#### Documentation
- Main docs: https://www.instantdb.com/docs
- React getting started: https://www.instantdb.com/docs/start-react
- Auth guide: https://www.instantdb.com/docs/auth
- Permissions: https://www.instantdb.com/docs/permissions

#### Cursor Docs Integration
Students should add InstantDB docs to Cursor:
1. Open Cursor Settings
2. Navigate to Features → Docs
3. Click "Add Doc"
4. Enter URL: `https://www.instantdb.com/docs`

---

### Hosting: Vercel

- **Service:** [Vercel](https://vercel.com) Hobby Plan (free)
- **Why:** Vercel created Next.js; deployment is automatic and seamless
- **Limits (Hobby Plan):**
  - 100 GB bandwidth per month
  - Unlimited projects
  - Automatic HTTPS
  - Preview deployments for every push

#### Deployment Process
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Vercel auto-deploys on every push

---

## Authentication Requirements

All apps **should** implement user authentication so that:
- Users have their own accounts
- Users can see their own data
- Data can be associated with specific users

#### Recommended Auth Method
Use InstantDB's **Magic Code** authentication:
- Users enter their email
- They receive a 6-digit code
- They enter the code to log in
- No passwords to manage

This is the simplest auth flow and works well for bootcamp apps.

See: https://www.instantdb.com/docs/auth

---

## Data Modeling Guidelines

### Keep It Simple
- Start with 2-4 data entities maximum
- Each entity should map to a clear concept (e.g., `events`, `users`, `rsvps`)
- Use InstantDB's relational links to connect entities

### Common Patterns

**User-owned data:**
```typescript
// Schema example: todos owned by users
const schema = i.schema({
  entities: {
    todos: i.entity({
      text: i.string(),
      done: i.boolean(),
      createdAt: i.date(),
    }),
  },
});
```

**Many-to-many relationships:**
```typescript
// Schema example: users can RSVP to events
const schema = i.schema({
  entities: {
    events: i.entity({
      title: i.string(),
      date: i.date(),
    }),
    rsvps: i.entity({
      status: i.string(), // "going", "maybe", "not going"
    }),
  },
  links: {
    eventRsvps: {
      forward: { on: "events", has: "many", label: "rsvps" },
      reverse: { on: "rsvps", has: "one", label: "event" },
    },
    userRsvps: {
      forward: { on: "$users", has: "many", label: "rsvps" },
      reverse: { on: "rsvps", has: "one", label: "user" },
    },
  },
});
```

---

## What NOT to Build

The following features are **out of scope** for this bootcamp:

| Feature | Why It's Excluded |
|---------|-------------------|
| External API integrations | Requires API keys, rate limit handling, error recovery |
| File/image uploads | Requires storage service configuration |
| Payment processing | Security, compliance, and legal complexity |
| Email sending (beyond auth) | Requires email service configuration |
| Background jobs/cron | Requires additional infrastructure |
| Maps/geolocation | Adds significant complexity |
| AI/ML features | Requires additional services and costs |
| Real-time collaboration (cursors, presence) | Complex to implement correctly |
| Admin dashboards | Adds scope; focus on core user experience |

If a student's app idea requires any of these, help them simplify the idea to work without it.

---

## Project Structure

Recommended structure for Next.js + InstantDB apps:

```
my-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with providers
│   │   ├── page.tsx        # Home page
│   │   ├── login/
│   │   │   └── page.tsx    # Login page
│   │   └── [other routes]/
│   ├── components/
│   │   └── [reusable components]
│   └── lib/
│       └── db.ts           # InstantDB initialization
├── instant.schema.ts       # InstantDB schema
├── instant.perms.ts        # InstantDB permissions
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Environment Variables

Only one environment variable is required:

```env
# .env.local
NEXT_PUBLIC_INSTANT_APP_ID=your-app-id-here
```

Get the App ID from https://www.instantdb.com/dash after creating an app.

---

## Deployment Checklist

Before deploying to Vercel:

1. ✅ App works locally (`npm run dev`)
2. ✅ InstantDB schema is pushed (`npx instant-cli push schema`)
3. ✅ InstantDB permissions are pushed (`npx instant-cli push perms`)
4. ✅ Environment variable `NEXT_PUBLIC_INSTANT_APP_ID` is set in Vercel
5. ✅ No hardcoded localhost URLs in the code
6. ✅ No sensitive data in the codebase

---

## Getting Help

### Cursor Settings for This Bootcamp

Students should configure Cursor with the following documentation sources:

1. **InstantDB Docs:** `https://www.instantdb.com/docs`
2. **Next.js Docs:** `https://nextjs.org/docs`
3. **Tailwind CSS Docs:** `https://tailwindcss.com/docs`

To add docs: Cursor Settings → Features → Docs → Add Doc

### Common Issues

| Issue | Solution |
|-------|----------|
| "Module not found" errors | Run `npm install` |
| InstantDB connection errors | Check that APP_ID is correct and app exists in dashboard |
| Blank page after deploy | Check browser console for errors; verify environment variables in Vercel |
| Permissions errors | Review instant.perms.ts; ensure auth rules match your data model |

---

## Version Information

This document was last updated for:
- Next.js 14+
- InstantDB (latest)
- Vercel Hobby Plan

---

*This document is referenced by the bootcamp tutorial generator. Do not modify the structure without updating the corresponding prompts.*
