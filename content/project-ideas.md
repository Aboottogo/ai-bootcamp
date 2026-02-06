# Project Ideas

Don't have your own idea yet? Pick one of these. Each is designed to be achievable in this bootcamp while still being substantial enough to discuss in interviews.

---

# Simple Projects

These have fewer moving parts, making them good choices if you want to focus on learning the tools rather than wrestling with complex features.

## Personal Expense Tracker

Track where your money goes.

**Features:**
- Log expenses with date, amount, category, and optional description
- View a list of all your expenses
- Filter by category or date range
- See monthly totals
- Delete expenses you entered by mistake

**Sample prompt for Cursor:**

> "Create a Next.js app for tracking personal expenses. Users should be able to sign in with email, add expenses with a date, amount, category (like Food, Transport, Entertainment), and optional description. Show a list of expenses sorted by date, with a running monthly total at the top. Use Supabase for authentication and database. Keep the design clean and simple."

---

## Reading List Manager

Keep track of books you want to read, are reading, or have finished.

**Features:**
- Add books with title and author
- Mark books as "want to read," "reading," or "finished"
- Add ratings and notes after finishing
- Filter by status
- Sort by date added or rating

**Sample prompt for Cursor:**

> "Build a reading list app with Next.js and Supabase. Users can sign up, then add books with a title and author. Each book has a status: 'want to read', 'reading', or 'finished'. For finished books, users can add a rating (1-5 stars) and notes. Include filtering by status and sorting by date added or rating."

---

## Habit Tracker

Build streaks by checking in daily.

**Features:**
- Create habits to track (exercise, reading, meditation, etc.)
- Daily check-in to mark habits complete
- Streak counting (consecutive days completed)
- Simple visualization of your current streaks
- Reset streak if you miss a day

**Sample prompt for Cursor:**

> "Create a habit tracking app using Next.js and Supabase. Users can sign up, create habits with names, and check them off each day. Track streaks showing how many consecutive days each habit has been completed. Show today's habits on the main screen with a simple way to mark them done. If a day is missed, reset the streak to zero."

---

## Simple Polling App

Create polls and share them with friends.

**Features:**
- Create a poll with a question and multiple choice options
- Get a shareable link
- Anyone with the link can vote (one vote per person)
- See results update in real-time
- Close polls when you're done collecting votes

**Sample prompt for Cursor:**

> "Build a polling app with Next.js and Supabase. Users can sign up and create polls with a question and 2-5 answer options. Each poll gets a unique shareable link. Visitors to that link can vote without signing up (but only once—track by browser). Show live results as a bar chart. Poll creators can close their polls to stop new votes."

---

# Ambitious Projects

These have more features and complexity. Good if you have a clear vision or want something more impressive for your portfolio.

## Study Group Coordinator

Help students find and organize study sessions.

**Features:**
- Create study sessions with title, subject, time, and location
- Browse upcoming sessions
- RSVP to sessions
- See who else is attending
- Cancel your RSVP
- Dashboard showing sessions you created and sessions you're attending

**Sample prompt for Cursor:**

> "Create a study group coordination app using Next.js and Supabase. Users can sign up with their school email, then create study sessions with a title, subject, date/time, location, and optional description. Other users can browse upcoming sessions and RSVP. Show a count of how many people are attending each session. Users should see a dashboard with sessions they created and sessions they've RSVP'd to."

---

## Club Membership Directory

A private directory for a student organization.

**Features:**
- Admin creates the club and invites members
- Member profiles with name, role, email, and optional photo
- Searchable directory
- Admin can edit member roles
- Members can update their own profiles

**Sample prompt for Cursor:**

> "Build a club membership directory with Next.js and Supabase. One user is the admin who creates the club. The admin can invite members by email. Each member has a profile with name, role (like 'President', 'Treasurer', 'Member'), email, and optional bio. Members can search the directory by name or role. Members can edit their own profiles; the admin can edit anyone's role."

---

## Event RSVP System

Create events, manage guest lists, track attendance.

**Features:**
- Create events with name, date, time, location, and capacity
- Shareable RSVP link
- Guests RSVP with their name and email
- Automatic waitlist when capacity is reached
- Host dashboard showing who's attending
- Email confirmations (optional/stretch)

**Sample prompt for Cursor:**

> "Create an event RSVP system with Next.js and Supabase. Event hosts can sign up and create events with a name, description, date/time, location, and maximum capacity. Each event gets a unique link. Guests can RSVP using that link by entering their name and email (no account needed). When capacity is reached, new RSVPs go to a waitlist. Hosts see a dashboard with their events and guest lists."

---

## Simple Inventory Tracker

Track items for a student org, small business, or personal collection.

**Features:**
- Add items with name, quantity, category, and location
- Update quantities (check in / check out)
- Search and filter items
- Low stock alerts
- History of changes (optional)

**Sample prompt for Cursor:**

> "Build an inventory tracking app with Next.js and Supabase. Users can sign up, then add items with a name, quantity, category (like 'Electronics', 'Office Supplies'), and location (like 'Storage Room A'). Show a searchable list of all items. Users can adjust quantities up or down (check in/out). Flag items with low stock (quantity below 5). Include filtering by category and location."

---

# Choosing Your Project

**If you're nervous:** Start with a simple project. Expense tracker or habit tracker are great first apps.

**If you have your own idea:** Use it! The prompts above are just starting points. Adapt them to what you actually want to build.

**If you're ambitious:** Try a more complex project, but have a fallback plan. If you get stuck on study group coordinator, you can always scale back to a simpler app.

**The real goal:** Build something, deploy it, and be able to talk about it. A simple, polished expense tracker is better than an ambitious, broken mess.

**Save your chosen idea (or adapted version) in a text file** (e.g. `my-app-idea.txt`). You'll attach that file in Meeting 1 when you prompt Cursor to generate your how-to tutorial. See [Pre-Work](pre-work.md#choose-your-project-idea) for the format.

**Sample `my-app-idea.txt`** (expense tracker):

```
Personal expense tracker. Users: me and other students who want to see where their money goes. Core features: log expenses with date, amount, and category; view a list of all expenses; see monthly totals.
```

---

# Sample Prompts for Iteration

After your initial build, you'll want to refine. Here are prompts for common improvements:

**Design:**
> "Make the design more visually appealing with better spacing, a consistent color scheme, and modern styling."

**Mobile:**
> "Make this app responsive so it looks good on mobile phones."

**Features:**
> "Add a delete button next to each item that removes it from the database with a confirmation dialog."

**Charts:**
> "Add a pie chart showing expenses by category using a simple charting library."

**Bugs:**
> "I'm getting this error: [paste error]. Fix it."

**Explanation:**
> "Explain what this code does: [paste code snippet]"
