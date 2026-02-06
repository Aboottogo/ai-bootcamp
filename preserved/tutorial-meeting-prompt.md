# First Meeting Prompt for Cursor

> **Instructions for Students:**
> 1. Open Cursor
> 2. Create a new empty folder for your tutorial (e.g., `my-app-tutorial`)
> 3. Open that folder in Cursor (File → Open Folder)
> 4. Make sure your app idea file (`my-app-idea.md`) is inside this folder
> 5. Open a new Composer chat (Cmd+I on Mac, Ctrl+I on Windows)
> 6. In the Composer, click the **+** button or type **@** to attach your `my-app-idea.md` file
> 7. Copy and paste this ENTIRE prompt (everything below the line) into the chat
> 8. Press Enter and let Cursor work
>
> **After Cursor finishes:** You'll have a folder with `index.html`, `README.md`, and possibly `styles.css`. Follow the README to host it on GitHub Pages!

---

**COPY EVERYTHING BELOW THIS LINE:**

---

I am a business student learning to build web apps with Cursor 2.0. I have attached my app idea file (`my-app-idea.md`) which describes the app I want to build. Please read it carefully before proceeding.

Your task is to create a **personalized tutorial website** that will teach me how to build this specific app. The tutorial site itself should be a simple static HTML website that I can host on GitHub Pages.

## Important Context

Before building the tutorial, please fetch and read the technical requirements document at:
```
https://aboottogo.github.io/ai-bootcamp/preserved/app-technical-requirements.md
```

This document specifies the exact tech stack I must use for the app (not the tutorial):
- **Framework:** Next.js with App Router
- **Database:** InstantDB (not Firebase, not Supabase)
- **Hosting:** Vercel (free Hobby plan)
- **Styling:** Tailwind CSS

All recommendations in the tutorial must follow these requirements.

## What to Build

Create a tutorial website with the following structure:

```
my-app-tutorial/
├── index.html          # Main tutorial page
├── styles.css          # Custom styles (minimal, Tailwind via CDN does most work)
└── README.md           # Instructions for hosting on GitHub Pages
```

### Technical Requirements for the Tutorial Site

- Use **plain HTML** with **Tailwind CSS via CDN** (no build step required)
- The site should be clean, readable, and mobile-friendly
- Use a simple, professional design with good typography
- Include a table of contents with anchor links to each section
- Each step should be clearly numbered and include code blocks where relevant
- Code blocks should have syntax highlighting (use a CDN like Prism.js or highlight.js)

### Tailwind CDN Setup

Include this in the HTML `<head>`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

For code syntax highlighting, include Prism.js:
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-tsx.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js"></script>
```

## Tutorial Content Structure

The tutorial should have the following sections. Personalize each section using my specific app idea.

### Section 1: Introduction
- Welcome message
- What we're building (summarize MY app idea)
- What technologies we'll use and why
- What we'll have at the end

### Section 2: Prerequisites
- Install Node.js (link to nodejs.org, recommend LTS version)
- Create a Vercel account (link to vercel.com, sign up with GitHub)
- Create an InstantDB account (link to instantdb.com)

### Section 3: Configure Cursor for This Project
Include this critical step:
1. Open Cursor Settings (Cmd+, or Ctrl+,)
2. Navigate to **Features → Docs**
3. Click **"Add Doc"**
4. Add the following documentation URL: `https://www.instantdb.com/docs`
5. Wait for Cursor to index the documentation
6. This allows Cursor to reference InstantDB's documentation when helping you code

### Section 4: Create Your InstantDB App
- Go to https://www.instantdb.com/dash
- Click "Create App"
- Name it after your project
- Copy your App ID (you'll need this later)
- Keep this tab open

### Section 5: The Prompt to Build Your App

This is the most important section. Include a complete, ready-to-use prompt that I can paste into Cursor to build my actual app. 

Write this prompt specifically for MY app idea. The prompt should:
- Describe exactly what app to build (based on my idea)
- Reference the tech stack (Next.js, InstantDB, Tailwind)
- Include the data model (entities and relationships) specific to my app
- Include authentication requirements
- Include the main pages/routes needed
- Include the core features
- Be detailed enough that Cursor can build a working first version

Format this prompt in a clearly marked, copy-able code block with a "Copy" button if possible.

The prompt should start with something like:
```
Build me a Next.js web application for [MY APP PURPOSE]. 

## Tech Stack
- Next.js 14+ with App Router
- InstantDB for the database (use @instantdb/react)
- Tailwind CSS for styling
- TypeScript

## App Description
[PERSONALIZED DESCRIPTION FROM MY APP IDEA]

## Data Model
[ENTITIES AND RELATIONSHIPS SPECIFIC TO MY APP]

## Authentication
Use InstantDB's Magic Code authentication...

## Pages
[LIST OF PAGES SPECIFIC TO MY APP]

## Core Features
[FEATURES FROM MY APP IDEA]

## Getting Started
1. Create the Next.js app: npx create-next-app@latest [app-name] --tailwind --eslint --app --src-dir --import-alias "@/*"
2. Install InstantDB: npm install @instantdb/react
3. Create instant.schema.ts with the data model above
4. Create instant.perms.ts with appropriate permissions
...
```

### Section 6: Running Your App Locally
- How to start the development server (`npm run dev`)
- How to view it in the browser (localhost:3000)
- How to make changes and see them update

### Section 7: Setting Up InstantDB
- How to initialize the InstantDB CLI: `npx instant-cli@latest init`
- How to push the schema: `npx instant-cli push schema`
- How to push permissions: `npx instant-cli push perms`
- How to add the App ID to `.env.local`

### Section 8: Deploy to Vercel
Step-by-step instructions:
1. Make sure your code is pushed to GitHub
2. Go to vercel.com and sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Add the environment variable: `NEXT_PUBLIC_INSTANT_APP_ID` with your InstantDB App ID
6. Click "Deploy"
7. Wait for deployment to complete
8. Click the URL to see your live app!

### Section 9: Next Steps
- Ideas for features to add
- How to make changes (edit code, push to GitHub, Vercel auto-deploys)
- Resources for learning more

### Section 10: Troubleshooting
Common issues and solutions:
- "Cannot find module" → run `npm install`
- Blank page → check browser console for errors
- Auth not working → verify InstantDB App ID is correct
- Changes not showing on live site → wait a minute for Vercel to rebuild

---

## README.md Content

The README.md file should contain instructions for hosting the tutorial site on GitHub Pages:

```markdown
# [My App Name] - Tutorial Site

This is a personalized tutorial for building [my app] using Next.js, InstantDB, and Vercel.

## Hosting This Tutorial on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button in the top right, then **New repository**
3. Name your repository (e.g., `my-app-tutorial`)
4. Make sure **Public** is selected (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Upload the Tutorial Files

1. On your new repository page, click **uploading an existing file**
2. Drag and drop all files from this folder:
   - `index.html`
   - `styles.css` (if present)
   - `README.md`
3. Scroll down and click **Commit changes**

### Step 3: Enable GitHub Pages

1. In your repository, click the **Settings** tab
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and **/ (root)**
5. Click **Save**

### Step 4: Access Your Tutorial

After a few minutes, your tutorial will be live at:
```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

For example: `https://janedoe.github.io/my-app-tutorial/`

You can find this URL in the **Pages** settings after deployment completes.

---

## Next Steps

Once you can view your tutorial online:
1. Follow the tutorial steps to build your app!
2. Use the "Build Prompt" in Section 5 with Cursor
3. Deploy your finished app to Vercel

Good luck! 🚀
```

---

## Final Notes

- Make the tutorial encouraging and beginner-friendly
- Use "you" and "your" to speak directly to me
- Include emoji sparingly to make it feel approachable
- Assume I have never coded before but am smart and motivated
- If any step might be confusing, add a brief explanation of WHY we're doing it
- Test that all links work and point to real resources

Now please read my attached app idea file and create this personalized tutorial website!
