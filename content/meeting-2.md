# Meeting 2

**Goal:** Leave this session with a fully functional app—with user accounts and a real database—deployed on the web.

Last week you deployed a custom how-to tutorial for your app and, for homework, followed that tutorial to start building it. This week we add a backend (Supabase) and deploy the app to Vercel.

---

## In-Class

### What is a Backend?

So far, everything you've built runs in the browser. When you close the browser, any data disappears. That's because you've only built the **frontend**—the part users see and interact with.

A **backend** is everything that happens on a server:
- Storing data in a database
- Managing user accounts
- Processing information
- Keeping data safe and private

When you log in to Instagram, the frontend is the app on your phone. The backend is Instagram's servers, which store your photos, remember who you follow, and make sure you only see your own DMs.

**Today you'll add a backend to your app.** Users will be able to create accounts, and their data will persist—even if they close the browser or use a different device.

---

### What is a Database?

A database is structured storage for your app's data. Think of it like a collection of spreadsheets:
- Each "table" is like a spreadsheet
- Each "row" is an item (a user, an expense, a habit)
- Each "column" is a property (name, amount, date)

For example, an expense tracker might have:

**Users table:**
| id | email | created_at |
|----|-------|------------|
| 1 | jane@school.edu | 2024-01-15 |
| 2 | bob@school.edu | 2024-01-16 |

**Expenses table:**
| id | user_id | amount | category | date |
|----|---------|--------|----------|------|
| 1 | 1 | 12.50 | Food | 2024-01-15 |
| 2 | 1 | 45.00 | Books | 2024-01-16 |
| 3 | 2 | 8.00 | Coffee | 2024-01-16 |

The `user_id` column links each expense to the user who created it. This is how Jane only sees her expenses, not Bob's.

---

### Introduction to Supabase

Supabase is a service that gives you a database and user authentication with minimal setup. It has a generous free tier that's perfect for student projects.

**What Supabase provides:**
- A PostgreSQL database (the spreadsheet-like storage)
- Authentication (sign up, log in, password reset)
- A dashboard where you can see and edit your data
- An API that your app uses to read and write data

**Setting up Supabase:**

1. Go to [supabase.com](https://supabase.com) and create an account
2. Click "New Project"
3. Give it a name (e.g., "expense-tracker")
4. Set a database password (save this somewhere!)
5. Choose a region close to you
6. Click "Create new project" and wait for setup (1-2 minutes)

**Finding your credentials:**

Once your project is created:
1. Go to Settings → API
2. You'll see two important values:
   - **Project URL:** Something like `https://abcdefg.supabase.co`
   - **Anon/Public Key:** A long string starting with `eyJ...`

You'll need both of these to connect your app to Supabase.

---

### Live Demo: Adding Authentication

Watch as the instructor:
1. Opens a sample app in Cursor
2. Prompts Cursor to add Supabase authentication
3. Configures the Supabase credentials
4. Tests sign-up and login
5. Shows the new user appearing in the Supabase dashboard

---

### Hands-On: Build Your App with Supabase

Now you'll add Supabase to your app. We're assuming you have a project from following your tutorial. **If you didn't finish the tutorial, that's okay—we'll get you up to speed.**

**Step 1: Install Supabase in your project**

Open the terminal in Cursor and run:

```bash
npm install @supabase/supabase-js
```

**Step 2: Create environment variables**

Create a file called `.env.local` in your project root with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Replace the values with your actual credentials from the Supabase dashboard.

**Step 3: Prompt Cursor to integrate Supabase**

Use `Cmd+K` with a prompt like:

> Add Supabase authentication to this app. Users should be able to sign up with email and password, log in, and log out. Show different content based on whether the user is logged in. Use the Supabase credentials from environment variables.

**Step 4: Create your database table**

In the Supabase dashboard:
1. Go to Table Editor
2. Click "New Table"
3. Create a table for your app's data (e.g., "expenses" with columns for amount, category, date, user_id)
4. Enable Row Level Security (RLS) so users only see their own data

**Step 5: Connect your app to the database**

Prompt Cursor:

> Update the app to save [expenses/habits/items] to Supabase instead of local storage. Each record should be associated with the logged-in user. Only show records belonging to the current user.

**Step 6: Test everything**
1. Sign up with a test email
2. Add some data
3. Check the Supabase dashboard—you should see your data in the table
4. Log out and log in again—your data should still be there

**If you hit errors:** Supabase connection issues are common. Check:
- Are your environment variables spelled correctly?
- Did you restart your development server after adding `.env.local`?
- Is Row Level Security configured correctly?

Ask Cursor to help debug: "I'm getting this error: [paste error]. How do I fix it?"

---

### Introduction to Vercel

Vercel is a hosting platform that makes deployment simple. When you push code to GitHub, Vercel automatically builds and deploys your updated app.

**Why Vercel instead of GitHub Pages?**
- GitHub Pages only hosts static files (HTML, CSS, JS)
- Vercel handles server-side rendering and API routes
- Cursor typically generates Next.js apps, which need Vercel's capabilities

**How it works:**
1. Connect Vercel to your GitHub repository
2. Vercel watches for changes
3. When you push code, Vercel automatically rebuilds and deploys
4. Your app gets a URL like `your-project.vercel.app`

---

### Deploying to Vercel

**Step 1: Push your code to GitHub**

Make sure all your changes are committed and pushed:

```bash
git add .
git commit -m "Add Supabase integration"
git push
```

**Step 2: Create a Vercel account**

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

**Step 3: Import your project**

1. Click "Add New..." → "Project"
2. Find and select your repository
3. Vercel will detect it's a Next.js project

**Step 4: Add environment variables**

Before deploying, add your Supabase credentials:
1. Expand "Environment Variables"
2. Add `NEXT_PUBLIC_SUPABASE_URL` with your project URL
3. Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your anon key

**Step 5: Deploy**

1. Click "Deploy"
2. Wait for the build (1-3 minutes)
3. When it's done, click the preview link

**Your app is now live.** Every time you push to GitHub, Vercel will automatically redeploy.

---

## Homework

### Polish Your App

Between now and Meeting 3, improve your app:

**Functionality:**
- Fix any bugs you noticed
- Add any missing features
- Make sure the core flow works smoothly

**Design:**
- Improve the visual design
- Make sure it looks good on mobile
- Add helpful error messages

**Prompts that might help:**
- "Make this page look more professional with better spacing and typography"
- "Add error handling so users see a helpful message if something goes wrong"
- "Make this layout responsive so it works on mobile"

### Draft Your Blog Post

Write a short post (300-400 words) about your project. You can use AI to help draft it.

**Prompt template:**

> Write a short blog post (300-400 words) about [project name], a web app I built using Cursor AI. The app [brief description of what it does]. During the project, I learned about [list 2-3 concepts you learned]. One challenge I faced was [describe a challenge]. Write in first person, keep it conversational, and make it appropriate for LinkedIn.

Review and edit whatever AI generates—make sure it sounds like you and accurately describes your experience.

Bring the draft to Meeting 3.

---

Next: [Meeting 3](meeting-3.md)
