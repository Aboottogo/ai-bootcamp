# Meeting 1: The Quick Win

**Goal:** Leave this session with a live website you can share with anyone.

By the end of today, you'll have a URL like `yourname.github.io/your-project` that works on any device. Text it to a friend. Put it in your Instagram bio. It's real, and it's yours.

---

## In-Class

### What is Cursor?

Cursor is a code editor—a program where you write and edit code. But unlike traditional editors, Cursor has AI built in. You can describe what you want in plain English, and Cursor will write the code for you.

This doesn't mean you don't need to understand anything. You still need to:
- Know what you're trying to build
- Review what Cursor generates
- Guide it when it gets things wrong
- Understand enough to debug problems

Think of Cursor as a very fast assistant who's good at writing code but needs clear direction.

**Key things to know:**
- `Cmd+K` (Mac) or `Ctrl+K` (Windows) opens the AI prompt—this is how you tell Cursor what to build
- Cursor generates files and code based on your description
- You can always ask Cursor to modify, fix, or explain what it created

---

### What is Git?

Git is a version control system. That's a fancy way of saying it tracks every change you make to your code.

Why this matters:
- **Undo mistakes:** If you break something, you can go back to a working version
- **Track history:** See what changed and when
- **Collaboration:** Multiple people can work on the same project
- **Portfolio:** Your Git history shows employers you can ship code

**Key vocabulary:**
- **Repository (repo):** A project folder tracked by Git
- **Commit:** A saved snapshot of your code at a point in time (like a save point in a video game)
- **Push:** Upload your commits to GitHub
- **Pull:** Download changes from GitHub to your computer

Today you'll do all four: create a repo, make commits, and push to GitHub.

---

### Live Demo: Building a Page

Watch as the instructor:
1. Opens Cursor and creates a new project folder
2. Uses `Cmd+K` to prompt: "Create a simple landing page for a personal expense tracking app"
3. Reviews the generated HTML and CSS files
4. Opens the page in a browser to see the result
5. Makes a small change using another prompt

Notice how the workflow goes: describe → review → refine.

---

### Hands-On: Build Your Landing Page

Now it's your turn. You're going to build a landing page for your project—not the app itself, just a page that describes it.

**Step 1: Create your project folder**
1. Create a new folder on your computer (e.g., `my-project` in your Documents folder)
2. Open Cursor
3. Go to File → Open Folder and select your new folder

**Step 2: Prompt Cursor to create your landing page**
1. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows)
2. Type a prompt describing your landing page. For example:

> Create a simple single-page HTML website (no frameworks) that describes [your project name]. Include sections for: project overview, key features (list 3-4), and about the developer. Make it visually clean with modern CSS. Use only HTML and CSS, no JavaScript frameworks.

3. Let Cursor generate the files
4. Look at what it created—you should see an `index.html` file and possibly a `styles.css` file

**Step 3: Preview your page**
1. Find the `index.html` file in Cursor's file explorer (left sidebar)
2. Right-click and select "Open with Live Server" or simply open the file in your web browser
3. See your landing page!

**Step 4: Iterate**
Your first version probably isn't perfect. Use `Cmd+K` to ask for changes:
- "Change the color scheme to blue and white"
- "Add my name to the about section"
- "Make the feature descriptions more detailed"
- "Add a section for screenshots (with placeholder images for now)"

Keep refining until you're happy with it.

**If you get stuck:** First, try asking Cursor to fix the problem. If that doesn't work, ask a neighbor. If still stuck, raise your hand.

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
git commit -m "Initial landing page"
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

### Start Building Your Full App

Between now and Meeting 2, start building the actual application (not just the landing page).

**Your task:**
1. Create a new folder for your app (or continue in the same folder if you prefer)
2. Use Cursor to build a working version of your idea

**Example prompt for an expense tracker:**

> Create a Next.js app for tracking personal expenses. Users should be able to add expenses with a date, amount, and category. Display a list of all expenses. For now, just store the data in the browser (we'll add a real database next week). Keep the design clean and simple.

**Don't worry about:**
- User accounts (we'll add those next week)
- Saving data permanently (we'll add a database next week)
- Making it perfect (we'll polish in Week 3)

**Do focus on:**
- Getting the core screens working
- Being able to add and view data
- Understanding what Cursor is generating

**If you get stuck:**
- Ask Cursor to explain what's wrong
- Check the [Troubleshooting](troubleshooting.md) page
- Note your question and bring it to Meeting 2

---

Next: [Meeting 2: The Real Thing](meeting-2.md)
