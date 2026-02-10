# First Meeting Prompt for Cursor

## Instructions for Students

Follow these steps carefully:

### Before You Start
1. Make sure you have your **app idea file** (`my-app-idea.md`) ready
2. Make sure you have created an **InstantDB account** at [instantdb.com](https://instantdb.com)

> **Note:** You'll create your InstantDB *app* and get your App ID later, as part of the tutorial. You just need the account for now.

### Running the Prompt
1. **Create a new folder** on your computer for your tutorial (e.g., `my-app-tutorial`)
2. **Open Cursor** and go to **File → Open Folder** — select your new folder
3. **Copy your app idea file** (`my-app-idea.md`) into this folder
4. **Open Cursor's Composer** (Cmd+I on Mac, Ctrl+I on Windows)
5. **Attach your app idea file**: Click the **+** button or type **@** and select `my-app-idea.md`
6. **Copy everything below the line** and paste it into the Composer
7. **Press Enter** and let Cursor work (this may take several minutes)

### After Cursor Finishes
You'll have a folder with multiple HTML files, a CSS file, a JavaScript file, and a README. Follow the README to host your tutorial on GitHub Pages, then follow your tutorial to build your app!

---

## ✂️ COPY EVERYTHING BELOW THIS LINE ✂️

---

I am a business student learning to build web apps with AI assistance. I have **never written code before**. I have attached my app idea file (`my-app-idea.md`) which describes the app I want to build. Please read it carefully before proceeding.

## Your Task

Create a **personalized, multi-page tutorial website** that will teach me how to build this specific app. The tutorial site itself should be a static HTML/CSS/JS website that I can host on GitHub Pages.

## Required Reading

Before you begin, you **must** fetch and read these two specification documents:

### 1. Tutorial Site Requirements
```
https://aboottogo.github.io/ai-bootcamp/content/tutorial-site-requirements.md
```
This document specifies:
- The educational philosophy (deep explanations, not just steps)
- The multi-page site structure (5 pages with navigation)
- Visual design requirements (professional, minimal, Tailwind CSS)
- Interactive features (copy buttons, collapsible FAQ, smooth scroll)
- Detailed content requirements for each page
- The build prompt template structure

### 2. App Technical Requirements
```
https://aboottogo.github.io/ai-bootcamp/content/app-technical-requirements.md
```
This document specifies:
- The required tech stack: Next.js, InstantDB, Tailwind, Vercel
- Database setup and authentication requirements
- What features are in scope and out of scope
- Project structure and deployment guidelines

**Read both documents completely before generating any files.**

## Key Requirements Summary

### Tutorial Site Must:
- Be split across **5 pages** (Introduction, Setup, Build, Deploy, Reference)
- Have a **persistent navigation bar** linking all pages
- Include **deep educational explanations** of concepts like frontend/backend, client-server model, etc.
- Have **code copy buttons** with "Copied!" feedback
- Have **collapsible FAQ sections** for troubleshooting
- Use **professional, minimal styling** with Tailwind CSS via CDN
- Be **fully personalized** to my specific app idea

### The App Must:
- Use **Next.js** with App Router
- Use **InstantDB** for database and authentication (Magic Code login)
- Use **Tailwind CSS** for styling
- Be deployable to **Vercel** free tier
- Include user accounts so users can save their own data

## Output Files

Create these files in my project folder:
```
index.html          # Page 1: Introduction & Concepts
setup.html          # Page 2: Prerequisites & Setup  
build.html          # Page 3: Building Your App (includes the build prompt)
deploy.html         # Page 4: Deployment to Vercel
reference.html      # Page 5: Next Steps & Troubleshooting
styles.css          # Shared custom styles
scripts.js          # Shared JavaScript (copy buttons, accordions, etc.)
README.md           # Instructions for hosting on GitHub Pages
```

## Final Notes

- Make the tutorial **encouraging and beginner-friendly**
- Use **"you" and "your"** to speak directly to me
- Explain **why** for every step, not just what
- Include **analogies** to help build mental models
- Assume I have **never coded before** but am smart and motivated
- Make sure all **links work** and point to real resources
- The **build prompt** in the Build page must be completely customized for my specific app idea

Now please read my attached app idea file and the two specification documents, then create the personalized tutorial website!
