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
1. Go to [cursor.com/students](https://cursor.com/students)
2. Click "Download" and choose your operating system (Mac, Windows, or Linux)
3. Install the application
4. **Sign up for the student discount.** Create your Cursor account using your **valid .edu university email**—this is required. Your Cursor account email must match this .edu email, and you must use the same email when you verify your student status.
5. Verify your status as a currently enrolled student by clicking "Verify Status" at the top of the [students page](https://cursor.com/students) and following the instructions. If you don't already have Cursor Pro, sign up for Cursor Pro in your account settings after verifying.
6. Confirm that your account shows "Pro" or "Student" status (the free tier is active)

**Benefits:** Eligible students get one free year of Cursor Pro, including **$20 of usage per month**. That covers normal use of AI features in the editor. If you need additional model capacity beyond the included amount, you can enable usage-based pricing in your account; you'll only be charged for usage above the $20 monthly credit.

**API pricing (in brief):** Cursor Pro gives you a set amount of AI usage each month (the $20 credit). When you use the AI to edit code, ask questions, or generate content, that usage counts against this amount. If you go over it, you can turn on usage-based pricing to keep using more—you pay only for the extra usage. For most students in this bootcamp, the included $20 per month is enough.

**You're done when:** You can open Cursor and see an empty editor window, with your account showing Pro or Student status.

**Note:** Cursor looks similar to VS Code. If you've used VS Code before, you'll feel at home. If you haven't, don't worry—we'll walk through it together.

---

## Install Git

Git is the tool that tracks changes to your code and lets you upload it to GitHub. Think of it like "track changes" in Word, but for code.

### Mac

1. Open Terminal (search for "Terminal" in Spotlight, or find it in Applications → Utilities)
2. Type `git --version` and press Enter. If you see a version number (e.g. `git version 2.x.x`), Git is already installed—you're done.
3. If Git is not installed, install it by running the Xcode Command Line Tools installer. In Terminal, type `xcode-select --install` and press Enter.
4. A dialog will appear asking to install the command line developer tools. Click "Install" and wait for the installation to finish.
5. When it's done, run `git --version` again to verify. You should see a version number.

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

## Configure GitHub in Cursor

Connect your GitHub account to Cursor so you can push and pull code without entering credentials every time. Use the same GitHub account you created in the steps above.

**Steps:**
1. Open Cursor
2. Open the Source Control view by clicking the branch icon in the left sidebar, or go to **View → Source Control**
3. If you're not signed in to GitHub, click **Sign in with GitHub** (or click the account icon in the bottom-left corner and choose **Turn on Settings Sync** or **Sign in to GitHub**)
4. Complete the sign-in in your browser when prompted. Authorize Cursor to access your GitHub account
5. Once signed in, Cursor will use your GitHub account for cloning repos, pushing, and pulling—no need to enter your password each time

**You're done when:** Your GitHub account appears in the Source Control view or in the account menu (bottom-left), and you're ready to clone and push repos from Cursor.

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

**Create a text file with your app idea.** Save it as `my-app-idea.txt` (or similar). Include:
- What does your app do?
- Who would use it?
- What are 2-3 core features?

You will **attach this file** in Meeting 1 when you prompt Cursor to generate your tutorial. Keep it somewhere easy to find (e.g. in a folder you'll open in Cursor).

**Example** (for a personal expense tracker):

```
Personal expense tracker. Users: me and other students who want to see where their money goes. Core features: log expenses with date, amount, and category; view a list of all expenses; see monthly totals.
```

**You're done when:** You have the text file saved and can attach it in Cursor during Meeting 1.

---

## Verify Your Setup

Before Meeting 1, make sure:

- [ ] You can log in to GitHub
- [ ] Cursor opens and shows your account as "Pro" or "Student"
- [ ] Your GitHub account is signed in within Cursor (Source Control or account menu)
- [ ] Running `git --version` in Terminal/Command Prompt shows a version number
- [ ] You have your app-idea text file ready (`my-app-idea.txt` or similar)

If any of these aren't working, note what's wrong and we'll troubleshoot at the start of Meeting 1.

---

Next: [Meeting 1: The Quick Win](meeting-1.md)
