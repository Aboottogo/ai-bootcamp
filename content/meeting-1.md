# Meeting 1: The Quick Win

**Goal:** Leave this session with a live website you can share with anyone.

By the end of today, you'll have a URL like `yourname.github.io/your-project` that works on any device. Text it to a friend. Put it in your Instagram bio. It's real, and it's yours. The site is a **how-to tutorial** for your app idea—customized to what you want to build—not the app itself. You'll follow that tutorial as homework before Meeting 2.

---

## In-Class

### Live Demo: Generating Your Tutorial

Watch as the instructor:
1. Opens Cursor and creates a new project folder
2. Has `my-app-idea.txt` (or equivalent) ready with an app description
3. Opens the **Agent** (Composer), switches to **Plan mode** (Shift+Tab in the agent input)
4. Pastes the exact prompt (provided below) and **attaches** the app-idea text file
5. Lets Cursor generate the tutorial site—briefly shows the plan and output
6. Previews the site in a browser, then pushes to GitHub and enables GitHub Pages

Notice: we're asking for a **tutorial** that teaches how to build the app, not the app itself. Describe → review → refine.

---

### Hands-On: Generate Your Tutorial and Deploy

Now it's your turn. You're going to ask Cursor to build a **how-to tutorial** for your app idea (not the app itself), then deploy that tutorial site to GitHub Pages.

**Step 1: Create your project folder**
1. Create a new folder on your computer (e.g., `my-app-tutorial` in your Documents folder)
2. Open Cursor
3. Go to File → Open Folder and select your new folder

**Step 2: Have your app-idea file ready**
- Use `my-app-idea.txt` from pre-work, or create it now (see [Pre-Work](pre-work.md#choose-your-project-idea)). Keep it in the project folder or somewhere you can attach it from.

**Step 3: Open Agent and Plan mode**
1. Open the **Agent** (Composer)—e.g. Cmd+I (Mac) or Ctrl+I (Windows), or via the UI
2. In the agent input, press **Shift+Tab** to switch to **Plan mode**
3. You'll paste the prompt and attach your file here

**Step 4: Paste the prompt and attach your app-idea file**
1. Copy the exact prompt from the **[Prompt to use in Plan mode](#prompt-to-use-in-plan-mode)** section below
2. Paste it into the agent input
3. **Attach** your app-idea text file (e.g. `my-app-idea.txt`) using Cursor's attach/add-file option when sending the prompt
4. Send the message and let Cursor generate the tutorial site

**Step 5: Review and iterate**
1. Look at what Cursor created—you should see an `index.html` and likely `styles.css`
2. If you want changes, use follow-up prompts (e.g. "Make the steps clearer," "Add a table of contents")
3. Preview: right-click `index.html` → "Open with Live Server" or open in your browser

**Step 6: Push to GitHub and deploy**
Continue with **Pushing to GitHub** and **Deploying to GitHub Pages** below.

**If you get stuck:** First, try asking Cursor to fix the problem. If that doesn't work, ask a neighbor. If still stuck, raise your hand.

---

#### Prompt to use in Plan mode

- **Where:** Agent (Composer), Plan mode (Shift+Tab in the agent input).
- **What to attach:** Your app-idea text file (`my-app-idea.txt` or similar).

**Copy-paste this prompt** (then attach your file and send):

```
I'm in a coding bootcamp. My app idea is described in the attached text file.

Your task: Create a how-to tutorial *website* (not the app itself) that teaches someone how to build that app. The tutorial is the deliverable. Teaching is the primary goal; the app itself is secondary.

Technical constraints — the tutorial site must be deployable on GitHub Pages:
- Static only: HTML, CSS, and optional client-side JavaScript.
- No backend, no server-side code, no databases, no server processes.
- No Node, no build step required for the tutorial site itself (plain HTML/CSS/JS or a static output that can be served from the repo root).

Content: Customize the tutorial to the app idea in the attachment. Provide clear, step-by-step instructions a beginner can follow to build that app (e.g. project setup, core features, local preview). The tutorial will be used as homework before the next class, so steps should be self-contained and doable in about a week. Format it as a clean, readable tutorial site.

Output: A static tutorial website I can push to GitHub and deploy via GitHub Pages (Deploy from a branch, main, / root). Use a simple structure (e.g. index.html, styles.css) so it works with Pages.
```

---

### Pushing to GitHub

Now let's get your code on GitHub.

**Step 1: Initialize Git in your project**

Open the terminal in Cursor (View → Terminal) and run:

```bash
git init
```

This tells Git to start tracking this folder.

**Step 2: Stage and commit your files**

```bash
git add .
git commit -m "Initial tutorial site"
```

The first command stages all your files (tells Git "these are the changes I want to save"). The second creates a commit with a message describing what you did.

**Step 3: Create a repository on GitHub**

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top right, then "New repository"
3. Name it the same as your project folder (e.g., `my-project`)
4. Keep it Public
5. Don't check any boxes (no README, no .gitignore)
6. Click "Create repository"

**Step 4: Connect and push**

GitHub will show you commands to run. Copy and run the ones under "push an existing repository":

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

Refresh your GitHub page—your code should be there!

---

### Deploying to GitHub Pages

GitHub Pages turns your repository into a live website for free.

**Step 1: Enable GitHub Pages**
1. On your repository page, click "Settings"
2. In the left sidebar, click "Pages"
3. Under "Source," select "Deploy from a branch"
4. Under "Branch," select "main" and "/ (root)"
5. Click "Save"

**Step 2: Wait and visit**
1. GitHub will build your site (this takes 1-2 minutes)
2. Refresh the Settings → Pages page
3. You'll see a message: "Your site is live at https://yourusername.github.io/your-repo-name"
4. Click the link!

**Congratulations.** You have a live website.

---

## Homework

### Follow Your Tutorial

Between now and Meeting 2, **use the tutorial Cursor generated as your homework.** Work through it step by step to build your app (or the frontend/core the tutorial covers).

**Your task:**
1. Open your tutorial site (the one you deployed to GitHub Pages) or the project folder Cursor created
2. Follow the tutorial's instructions to build your app before Meeting 2

**Don't worry about:**
- User accounts (we'll add those next week)
- Saving data permanently (we'll add a database next week)
- Making it perfect (we'll polish in Week 3)

**Do focus on:**
- Completing the tutorial steps
- Getting the core flow working
- Understanding what you're building

**If you get stuck:**
- Ask Cursor to explain what's wrong
- Check the [Troubleshooting](troubleshooting.md) page
- Note your question and bring it to Meeting 2

---

Next: [Meeting 2: The Real Thing](meeting-2.md)
