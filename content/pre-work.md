# Pre-Work

Complete these steps before Meeting 1. Total time: about 30-45 minutes.

If you get stuck, don't panic. Note where you got stuck and we'll help you at the start of Meeting 1. But please attempt everything—it makes the first session much smoother.

---

## Create a GitHub Account

GitHub is where developers store and share code. It's also your portfolio—recruiters and hiring managers look at GitHub profiles.

**Steps:**
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Use your school email (this unlocks student benefits)
4. Choose a professional username—this will be visible to employers
   - Good: `jsmith`, `jane-smith`, `jsmith2027`
   - Avoid: `xX_codemaster_Xx`, `partyanimal99`
5. Complete the verification steps

**You're done when:** You can log in to GitHub and see your dashboard.

---

## Install Cursor

Cursor is a code editor with built-in AI. You describe what you want in plain English, and it writes the code.

**Steps:**
1. Go to [cursor.com](https://cursor.com)
2. Click "Download" and choose your operating system (Mac, Windows, or Linux)
3. Install the application
4. Open Cursor and create an account using your school email
5. Verify that your account shows "Pro" or "Student" status (this means the free tier is active)

**You're done when:** You can open Cursor and see an empty editor window.

**Note:** Cursor looks similar to VS Code. If you've used VS Code before, you'll feel at home. If you haven't, don't worry—we'll walk through it together.

---

## Install Git

Git is the tool that tracks changes to your code and lets you upload it to GitHub. Think of it like "track changes" in Word, but for code.

### Mac

1. Open Terminal (search for "Terminal" in Spotlight, or find it in Applications → Utilities)
2. Type `git --version` and press Enter
3. If Git isn't installed, you'll see a prompt to install it. Follow the instructions.
4. After installation, run `git --version` again. You should see a version number.

### Windows

**Option A: Install Git directly**
1. Go to [git-scm.com](https://git-scm.com)
2. Download the Windows installer
3. Run the installer, accepting the default options
4. Open Command Prompt and type `git --version` to verify

**Option B: Install GitHub Desktop (easier)**
1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install GitHub Desktop
3. Sign in with your GitHub account
4. GitHub Desktop includes Git automatically

### Configure Git

After installing, open Terminal (Mac) or Command Prompt (Windows) and run these two commands, replacing with your actual name and email:

```
git config --global user.name "Your Name"
git config --global user.email "your.email@school.edu"
```

This tells Git who you are, so your commits are attributed to you.

**You're done when:** Running `git --version` shows a version number (or GitHub Desktop is installed and signed in).

---

## Choose Your Project Idea

You need to arrive at Meeting 1 with a project in mind. This can be:

**Option A: Your own idea**

Think about a simple tool that would be useful to you or people you know. Good projects have:
- A clear purpose (what problem does it solve?)
- A small number of features (you can always add more later)
- Users who can create accounts and save data

**Option B: Pick from our suggestions**

See the [Project Ideas](project-ideas.md) page for ready-to-use ideas with descriptions and feature lists.

Either way, be prepared to answer:
- What does your app do?
- Who would use it?
- What are 2-3 core features?

**You're done when:** You can explain your project idea in 2-3 sentences.

---

## Verify Your Setup

Before Meeting 1, make sure:

- [ ] You can log in to GitHub
- [ ] Cursor opens and shows your account as "Pro" or "Student"
- [ ] Running `git --version` in Terminal/Command Prompt shows a version number
- [ ] You have a project idea ready

If any of these aren't working, note what's wrong and we'll troubleshoot at the start of Meeting 1.

---

## Optional: Experiment with Cursor

If you have extra time, try opening Cursor and playing around:

1. Create a new folder on your computer called `test-project`
2. Open that folder in Cursor (File → Open Folder)
3. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open the AI prompt
4. Try typing: "Create a simple HTML page that says Hello World with some nice styling"
5. See what happens!

This isn't required, but it'll make Meeting 1 less overwhelming.

---

Next: [Meeting 1: The Quick Win](meeting-1.md)
