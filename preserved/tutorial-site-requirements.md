# Tutorial Site Requirements

> **For Cursor/AI Assistants:** This document specifies how to build a personalized tutorial website that teaches a student to build their web app. The tutorial site must be educational, visually polished, and hostable on GitHub Pages (static HTML/CSS/JS only).

---

## Educational Philosophy

This tutorial is for **business undergraduates who have never written code before**. They are smart and motivated, but have no mental models for how software works.

**Every section must:**
1. Explain **what** we're doing
2. Explain **why** we're doing it
3. Build a **mental model** the student can use going forward
4. Only **then** provide the steps

**Do not** assume students understand:
- What a "terminal" or "command line" is
- What "frontend" vs "backend" means
- Why apps need databases
- What APIs are
- How the internet delivers web pages

**Do** use:
- Analogies to real-world concepts
- Diagrams or visual explanations where helpful
- Encouraging, conversational language
- "You" and "your" to speak directly to the student

---

## Site Structure: Multi-Page with Navigation

The tutorial must be split across **5 logical pages**, not one long page. This makes it less overwhelming and creates a sense of progress.

### Page Structure

```
my-app-tutorial/
├── index.html              # Page 1: Introduction & Concepts
├── setup.html              # Page 2: Prerequisites & Setup
├── build.html              # Page 3: Building Your App
├── deploy.html             # Page 4: Deployment
├── reference.html          # Page 5: Next Steps & Troubleshooting
├── styles.css              # Shared styles
├── scripts.js              # Shared interactivity (copy buttons, etc.)
└── README.md               # GitHub Pages hosting instructions
```

### Navigation

Include a **persistent top navigation bar** on all pages with:
- The app name/logo on the left
- Links to all 5 pages
- Visual indicator of the current page (e.g., underline, different color)

The navigation should be **sticky** (stays visible when scrolling).

---

## Visual Design: Professional & Minimal

### Overall Aesthetic
- Clean, modern, and professional (inspired by Stripe docs, Vercel docs)
- Generous whitespace
- Clear visual hierarchy
- Muted, professional color palette

### Color Palette
Choose a cohesive palette with:
- **Primary color**: Used for links, buttons, accents (e.g., a professional blue like `#2563eb` or teal like `#0d9488`)
- **Background**: White or very light gray (`#ffffff` or `#f9fafb`)
- **Text**: Dark gray, not pure black (`#1f2937` for body, `#111827` for headings)
- **Code blocks**: Light gray background (`#f3f4f6`) with slightly darker border
- **Muted accents**: For secondary information (`#6b7280`)

### Typography
- Use system fonts for performance: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Body text: 16-18px, line-height 1.6-1.7
- Headings: Clear hierarchy (h1 > h2 > h3), with appropriate spacing
- Code: Monospace font, slightly smaller than body text

### Layout
- Maximum content width: ~800px, centered
- Comfortable padding on mobile (16-24px)
- Responsive design that works on phones, tablets, and desktops

---

## Interactive Features

### 1. Code Copy Buttons
Every code block must have a "Copy" button that:
- Appears in the top-right corner of the code block
- Shows "Copied!" feedback for 2 seconds after clicking
- Uses the Clipboard API

### 2. Smooth Scrolling
- Enable smooth scrolling for anchor links
- Add subtle scroll-margin-top to account for sticky nav

### 3. Collapsible Sections
The troubleshooting/FAQ section should use collapsible accordions:
- Click to expand/collapse
- Smooth animation
- Plus/minus or chevron icon indicator
- Only one section open at a time (optional)

### 4. Subtle Animations
- Fade-in effect for main content on page load
- Smooth hover transitions on buttons and links
- No jarring or distracting animations

---

## Technical Implementation

### HTML Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Title] - [App Name] Tutorial</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#2563eb', // Customize this
                    }
                }
            }
        }
    </script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
    <link href="styles.css" rel="stylesheet" />
</head>
<body>
    <!-- Navigation -->
    <!-- Content -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-tsx.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
```

### Required JavaScript Features (scripts.js)

```javascript
// Copy button functionality
document.querySelectorAll('pre').forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.addEventListener('click', async () => {
        const code = block.querySelector('code').textContent;
        await navigator.clipboard.writeText(code);
        button.textContent = 'Copied!';
        setTimeout(() => button.textContent = 'Copy', 2000);
    });
    block.style.position = 'relative';
    block.appendChild(button);
});

// Collapsible accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.maxHeight;
        // Close all others (optional)
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.style.maxHeight = null;
        });
        // Toggle this one
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on load
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});
```

---

## Page Content Requirements

### Page 1: Introduction & Concepts (index.html)

**Purpose:** Orient the student, explain what they're building, and teach fundamental concepts about how web apps work.

#### Section 1.1: Welcome
- Congratulate the student on starting this journey
- Explain that by the end, they'll have a real, working app online
- Set expectations: they'll be directing an AI to write code, not writing it themselves

#### Section 1.2: What We're Building
- Summarize the student's specific app idea in 2-3 sentences
- Show a simple mockup or description of what the finished app will look like
- Emphasize that this is a **real app** that other people can use

#### Section 1.3: Understanding Full-Stack Web Apps (DEEP EXPLANATION)

This section must thoroughly explain:

**What is a Web App?**
- Difference between a "website" (static pages) and a "web app" (interactive, stores data)
- Examples: Google Docs is a web app, a restaurant menu page is a website
- The student's app is a web app because users can create accounts, save data, and interact

**The Client-Server Model**
Explain with an analogy:
> Imagine a restaurant. The **dining room** is where customers sit, read the menu, and place orders. The **kitchen** is where food is prepared and stored. Customers never go into the kitchen—they interact only with what they can see (the dining room) and send requests (orders) to the kitchen.
>
> Web apps work the same way:
> - **Frontend (Client)** = The dining room. It's what users see and interact with in their browser—buttons, forms, text, images.
> - **Backend (Server)** = The kitchen. It stores data, processes requests, and sends responses. Users never see it directly.
> - **API** = The waiter. It carries requests from the frontend to the backend, and brings responses back.

**Why Do We Need Both?**
- **Data persistence**: If data only lived in the browser, it would disappear when you close the tab. The backend stores data permanently.
- **Multiple users**: If Maya and Jordan both use your app, they need to see the same data. That data must live somewhere central—the backend.
- **Security**: Some logic (like checking permissions) must happen where users can't tamper with it—the backend.

**What This Means for Your App**
- The frontend will be built with **React** (via Next.js)—a popular way to build interactive user interfaces
- The backend will be handled by **InstantDB**—a service that stores your data and handles user accounts
- You don't need to build a backend from scratch—InstantDB provides one for you

#### Section 1.4: The Tools We'll Use

Briefly introduce each tool and its role:

| Tool | What It Does | Analogy |
|------|--------------|---------|
| **Cursor** | An AI-powered code editor that writes code for you | Your coding assistant |
| **Next.js** | A framework for building the frontend | The blueprint for your dining room |
| **InstantDB** | A backend service that stores data and handles users | Your kitchen, fully staffed |
| **Vercel** | A hosting service that puts your app online | The building that houses your restaurant |
| **GitHub** | Where your code is stored and versioned | A filing cabinet for your blueprints |

---

### Page 2: Prerequisites & Setup (setup.html)

**Purpose:** Get all accounts created and tools installed before building.

#### Section 2.1: Create Your Accounts

**GitHub Account**
- What it is: A website where developers store and share code
- Why you need it: Your code will live here, and it connects to Vercel for automatic deployment
- Steps: Go to github.com → Sign up → Verify email
- Note: Choose a professional username—it will be part of your app's URL

**Vercel Account**
- What it is: A service that hosts web apps (puts them on the internet)
- Why you need it: Vercel will take your code from GitHub and make it accessible to anyone with the URL
- Steps: Go to vercel.com → Sign up with GitHub → Authorize access
- Note: The free "Hobby" plan is all you need

**InstantDB Account**
- What it is: A backend service that stores data and handles user authentication
- Why you need it: Your app needs somewhere to store data (like user accounts and their information)
- Steps: Go to instantdb.com → Sign up → Verify email

#### Section 2.2: Create Your InstantDB App

This is a critical step. Explain it clearly:

1. Go to **https://instantdb.com/dash** (the InstantDB dashboard)
2. Click **"Create App"**
3. Name your app (e.g., the name of your project)
4. You'll see your **App ID**—a long string of letters, numbers, and dashes like:
   ```
   566ffee5-e773-4b68-a132-29678f8f6eea
   ```

**What is the App ID?**
> Think of the App ID like a mailing address for your database. When your app wants to read or write data, it needs to know where to send the request. The App ID tells InstantDB "this request is for THIS specific app's data, not someone else's."
>
> The App ID is **public**—it's safe to include in your code. It's not like a password. InstantDB uses a separate permissions system to control who can actually read or write data.

5. **Copy your App ID** and save it somewhere (a notes app, a text file). You'll need it soon.
6. Keep the InstantDB dashboard tab open—you'll return to it later.

#### Section 2.3: Install Node.js

**What is Node.js?**
> When you write code for a website, the code runs in the user's browser. But during development, you need to run code on your own computer—to preview your app, install packages, and prepare it for deployment. Node.js makes that possible.
>
> Think of Node.js as a translator that lets your computer understand and run JavaScript (the language web apps are written in).

**Steps:**
1. Go to **https://nodejs.org**
2. Download the **LTS version** (Long Term Support—the stable, recommended version)
3. Run the installer and follow the prompts
4. To verify it worked, open your terminal and type `node --version`. You should see a version number.

**What is a terminal?**
> The terminal (also called "command line") is a text-based way to give instructions to your computer. Instead of clicking icons, you type commands. It looks intimidating at first, but you'll only need a few simple commands, and Cursor will often handle them for you.
>
> - **On Mac:** Open the "Terminal" app (search for it in Spotlight)
> - **On Windows:** Open "PowerShell" or "Command Prompt" (search in Start menu)

#### Section 2.4: Install Cursor

**What is Cursor?**
> Cursor is a code editor—a special text editor designed for writing code. But unlike regular code editors, Cursor has a built-in AI assistant. You can describe what you want in plain English, and Cursor will write the code for you.
>
> You'll be using Cursor to direct the AI, not to write code yourself.

**Steps:**
1. Go to **https://cursor.com**
2. Download and install Cursor
3. Open Cursor and complete the setup wizard
4. Sign in or create an account when prompted

#### Section 2.5: Configure Cursor for This Project

**Why This Step Matters**

> Cursor's AI assistant is trained on lots of code and documentation, but it has a "knowledge cutoff"—it doesn't automatically know about new tools or recent updates. InstantDB is a newer tool that the AI might not know as well as older, more established tools.
>
> By adding InstantDB's documentation to Cursor, you're giving the AI a "cheat sheet" it can reference while helping you. This dramatically improves the quality of code it generates.

**When do you need to add documentation?**
- For newer or less common tools (like InstantDB)
- When you're getting incorrect or outdated code suggestions
- When working with a tool's newest features

**When is it not necessary?**
- For very popular, well-established tools (React, basic JavaScript)
- For simple, standard patterns the AI has seen millions of times

**Steps:**
1. Open **Cursor Settings** (Cmd+, on Mac, Ctrl+, on Windows)
2. Navigate to **Features → Docs**
3. Click **"Add Doc"**
4. Enter this URL: `https://www.instantdb.com/docs`
5. Wait for Cursor to finish indexing (may take a minute)
6. You should see InstantDB appear in your docs list

---

### Page 3: Building Your App (build.html)

**Purpose:** Guide the student through using Cursor to generate their app.

#### Section 3.1: Create Your Project Folder

1. Create a new folder on your computer for this project
   - Name it something simple, like `my-app` or your app's name (no spaces—use dashes instead)
   - Put it somewhere easy to find, like your Desktop or Documents folder

2. Open Cursor
3. Go to **File → Open Folder** and select your new folder
4. You should see an empty folder in Cursor's sidebar

#### Section 3.2: The Build Prompt

Now comes the exciting part—you'll ask Cursor to build your entire app.

**Before you proceed:**
- Make sure you completed Section 2.2 and have your **InstantDB App ID** copied
- If you don't have it, go back to your InstantDB dashboard at https://instantdb.com/dash and copy it

**Steps:**
1. Open **Cursor's Composer** (Cmd+I on Mac, Ctrl+I on Windows)
   - This opens a chat interface where you can describe what you want
2. Copy the prompt below and paste it into the Composer
3. **IMPORTANT:** Replace `YOUR_APP_ID_HERE` in the prompt with your actual App ID
4. Press Enter and watch Cursor work

---

**[CURSOR: Insert the personalized build prompt here, generated using the template in Section 3.3 below. Fill in all [FILL IN] sections based on the student's app idea. Display it in a clearly marked, styled code block that students can easily copy.]**

---

#### Section 3.3: The Build Prompt Template

The prompt should follow this exact structure. **Cursor**: Generate this prompt by filling in the sections based on the student's app idea.

```markdown
Build me a Next.js web application. Here are the complete specifications:

## Tech Stack (DO NOT DEVIATE)
- Next.js 14+ with App Router (not Pages Router)
- TypeScript
- Tailwind CSS for styling
- InstantDB for database and authentication (use @instantdb/react)

## InstantDB Configuration
My InstantDB App ID is: YOUR_APP_ID_HERE

Initialize InstantDB in a file at `src/lib/db.ts` like this:
```typescript
import { init } from '@instantdb/react';
import schema from '../../instant.schema';

const APP_ID = 'YOUR_APP_ID_HERE';

export const db = init({ 
  appId: APP_ID, 
  schema 
});
```

## App Description
[FILL IN: 2-3 sentence description of what the app does, based on the student's idea]

## Data Model
Create an InstantDB schema in `instant.schema.ts` with these entities:

[FILL IN: List each entity with its fields, based on the student's app idea. Example:]
- `events`: title (string), description (string), date (date), location (string), createdAt (date)
- `rsvps`: status (string: "going" | "maybe" | "not_going")

And these relationships:
[FILL IN: How entities connect. Example:]
- Each event has many rsvps
- Each rsvp belongs to one event and one user

## Authentication
Implement user authentication using InstantDB's Magic Code flow:
1. User enters their email
2. InstantDB sends a 6-digit code to that email
3. User enters the code to log in
4. Use `db.useAuth()` to check login status
5. Protect routes that require authentication

## Pages to Create
[FILL IN: List each page/route based on the student's app idea. Example:]
- `/` - Home page: shows upcoming events, login prompt if not authenticated
- `/login` - Login page with email input and code verification
- `/events/new` - Form to create a new event (requires auth)
- `/events/[id]` - Event details page with RSVP functionality
- `/my-events` - Dashboard showing events I created and RSVPs (requires auth)

## Core Features
[FILL IN: List each feature based on the student's app idea. Example:]
1. Users can create events with title, description, date, and location
2. Users can view all upcoming events
3. Users can RSVP to events (going/maybe/not going)
4. Users can see who has RSVPed to an event
5. Users can view their own events and RSVPs in a dashboard

## UI Requirements
- Clean, modern design using Tailwind CSS
- Mobile-responsive (works on phones and desktops)
- Clear navigation between pages
- Loading states while data is being fetched
- Error messages when something goes wrong

## File Structure
Use this structure:
```
src/
├── app/
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Home page
│   ├── login/
│   │   └── page.tsx      # Login page
│   └── [other routes as needed]
├── components/
│   └── [reusable components]
└── lib/
    └── db.ts             # InstantDB initialization
instant.schema.ts         # InstantDB schema
instant.perms.ts          # InstantDB permissions
```

## Getting Started Steps
1. Create the Next.js app: `npx create-next-app@latest . --tailwind --eslint --app --src-dir --import-alias "@/*" --typescript`
2. Install InstantDB: `npm install @instantdb/react`
3. Create the files listed above
4. Set up the schema and permissions for InstantDB

Please create all necessary files with complete, working code.
```

#### Section 3.4: What to Expect

When you run this prompt:
1. Cursor will start generating files—you'll see them appear in the sidebar
2. This may take a few minutes; let it finish
3. Cursor might ask clarifying questions—answer them based on your app idea
4. When done, you'll have a complete project structure

**Don't worry if:**
- There are errors at first—we'll fix them
- The code looks overwhelming—you don't need to understand every line
- Cursor asks you to run terminal commands—just follow its instructions

#### Section 3.5: Running Your App Locally

Now let's see your app in action!

1. Open the **terminal in Cursor** (View → Terminal, or Ctrl+`)
2. Type this command and press Enter:
   ```bash
   npm run dev
   ```
3. Wait for it to compile (you'll see "Ready" and a URL)
4. Open your browser and go to **http://localhost:3000**
5. You should see your app!

**What is localhost?**
> When you run your app in development, it's not on the internet yet—it's running only on your computer. `localhost` is a special address that means "this computer." `:3000` is the "port"—think of it like a specific door into your computer that this app is using.

#### Section 3.6: Fixing Issues with Cursor

If something doesn't work:
1. Look at the error message (in the browser or terminal)
2. Copy the error message
3. Open Cursor's Composer (Cmd+I / Ctrl+I)
4. Paste the error and ask: "I'm getting this error. Please fix it."
5. Cursor will suggest changes—accept them and try again

This is the power of AI-assisted development: you don't need to understand the error yourself; you just need to show it to the AI.

---

### Page 4: Deployment (deploy.html)

**Purpose:** Get the app from the student's computer onto the internet.

#### Section 4.1: What is Deployment?

> Right now, your app runs on your computer. But if you close your laptop, no one can use it. **Deployment** means putting your app on a server—a computer that's always on—so anyone with the URL can access it anytime.
>
> We'll use **Vercel** for deployment because:
> - It's free for personal projects
> - It automatically redeploys when you update your code
> - It was created by the same team that created Next.js, so they work perfectly together

#### Section 4.2: Push Your Code to GitHub

First, we need to put your code on GitHub. Vercel will then pull it from there.

1. Go to **github.com** and sign in
2. Click the **+** button in the top right → **New repository**
3. Name your repository (e.g., your app name, lowercase, dashes for spaces)
4. Keep it **Public** (required for free Vercel hosting)
5. **Don't** check any boxes (no README, no .gitignore—Cursor already created these)
6. Click **Create repository**
7. You'll see a page with instructions—keep this tab open

Now, in Cursor:
1. Open the terminal (View → Terminal)
2. Ask Cursor: "Please help me push this project to GitHub. My repository URL is [paste the URL from GitHub]"
3. Cursor will guide you through the git commands
4. Refresh your GitHub page—you should see your files

#### Section 4.3: Deploy to Vercel

1. Go to **vercel.com** and sign in (with GitHub)
2. Click **"Add New Project"**
3. You'll see a list of your GitHub repositories—find and select your app
4. Before deploying, we need to add your InstantDB App ID:
   - Click **"Environment Variables"**
   - Add a new variable:
     - **Name:** `NEXT_PUBLIC_INSTANT_APP_ID`
     - **Value:** [Your InstantDB App ID]
   - Click **Add**
5. Click **"Deploy"**
6. Wait 1-2 minutes for the build to complete
7. When it says "Congratulations!"—click the URL to see your live app!

**What are Environment Variables?**
> Some values—like your App ID—shouldn't be hardcoded in your files, especially if those files are public on GitHub. Environment variables are a way to pass secret or configurable values to your app without putting them directly in the code.
>
> The `NEXT_PUBLIC_` prefix tells Next.js this variable is safe to expose to the browser (since our App ID is public anyway).

#### Section 4.4: Your App is Live!

Congratulations! Your app is now on the internet. You can:
- Share the URL with friends
- Access it from your phone
- Keep using it even when your computer is off

**Automatic Updates:** Whenever you push new code to GitHub, Vercel automatically rebuilds and redeploys your app. This usually takes 1-2 minutes.

---

### Page 5: Next Steps & Troubleshooting (reference.html)

**Purpose:** Provide ongoing reference material and help for common issues.

#### Section 5.1: Making Changes to Your App

Now that your app is deployed, how do you improve it?

1. **Make changes in Cursor** — Open your project, use the Composer to describe what you want to add or change
2. **Test locally** — Run `npm run dev` and check that it works at localhost:3000
3. **Push to GitHub** — Use Cursor's source control features or ask Cursor to push your changes
4. **Automatic deployment** — Vercel detects the change and redeploys within minutes

#### Section 5.2: Ideas for Features to Add

Based on your app, here are some features you might add next:
[FILL IN: 3-4 specific feature ideas based on the student's app. Example for an event app:]
- Add the ability to edit or delete events you created
- Add event categories (e.g., "Study Session", "Social", "Sports")
- Add a search or filter feature to find events
- Add email notifications when someone RSVPs to your event

To add any of these, just describe what you want to Cursor. For example:
> "I want users to be able to edit events they created. Add an edit button that opens a form pre-filled with the event's current information."

#### Section 5.3: Troubleshooting (Collapsible FAQ)

**This section should use collapsible accordions.**

**"I see a blank page"**
- Open your browser's developer console (Right-click → Inspect → Console tab)
- Look for red error messages
- Copy the error and ask Cursor to fix it

**"npm run dev shows an error"**
- Read the error message—it often says what's wrong
- Common fix: run `npm install` to make sure all packages are installed
- Ask Cursor: "I'm getting this error when running npm run dev: [paste error]"

**"My app works locally but not on Vercel"**
- Check that the environment variable `NEXT_PUBLIC_INSTANT_APP_ID` is set in Vercel
- Check the build logs in Vercel's dashboard for error messages
- Make sure you pushed all your files to GitHub

**"Login isn't working"**
- Verify your InstantDB App ID is correct
- Check that you're using a valid email address
- Look in your spam folder for the magic code email
- In InstantDB dashboard, check that email auth is enabled

**"My changes aren't showing up on the live site"**
- Did you push your changes to GitHub? Check your repository
- Vercel may take 1-2 minutes to rebuild
- Try a hard refresh in your browser (Cmd+Shift+R or Ctrl+Shift+R)

**"I want to start over"**
- You can delete your Vercel project and GitHub repository
- Create a new folder and run through the build prompt again
- This is totally fine—sometimes a fresh start is easiest

#### Section 5.4: Learning More

Want to understand more about what's happening under the hood?

- **Next.js Documentation:** https://nextjs.org/docs — Learn about the framework
- **InstantDB Documentation:** https://instantdb.com/docs — Learn about the database
- **Tailwind CSS Documentation:** https://tailwindcss.com/docs — Learn about styling
- **React Documentation:** https://react.dev — Learn about the UI library

You don't need to read these to use your app—but if you're curious, they're excellent resources.

---

## README.md Content

The README file should contain clear instructions for hosting the tutorial on GitHub Pages:

```markdown
# [App Name] - Build Tutorial

This is your personalized tutorial for building [App Name] using Next.js, InstantDB, and Vercel.

## Viewing This Tutorial

### Quick Start: View Locally
1. Open `index.html` in your web browser
2. Navigate through the pages using the top menu

### Host on GitHub Pages (Recommended)

#### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button → **New repository**
3. Name it (e.g., `[app-name]-tutorial`)
4. Select **Public**
5. Click **Create repository**

#### Step 2: Upload Files
1. On your repository page, click **"uploading an existing file"**
2. Drag all files from this folder:
   - `index.html`
   - `setup.html`
   - `build.html`
   - `deploy.html`
   - `reference.html`
   - `styles.css`
   - `scripts.js`
   - `README.md`
3. Click **Commit changes**

#### Step 3: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**

#### Step 4: View Your Tutorial
After a few minutes, your tutorial will be live at:
```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

---

## Next Steps

1. Follow the tutorial to build your app
2. Copy the Build Prompt from the "Building Your App" page
3. Deploy your finished app to Vercel
4. Share your app with friends!

Good luck! 🚀
```

---

## Final Checklist for Cursor

Before considering the tutorial complete, verify:

- [ ] All 5 HTML pages are created and linked
- [ ] Navigation works on all pages
- [ ] Code copy buttons work
- [ ] Collapsible FAQ sections work
- [ ] All links point to real URLs
- [ ] The build prompt is fully customized for the student's app idea
- [ ] InstantDB setup instructions are accurate
- [ ] The design is clean, professional, and mobile-responsive
- [ ] README includes GitHub Pages hosting instructions
- [ ] No placeholder text remains—everything is personalized
