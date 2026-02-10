# Our Tools

## What is Cursor?

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

### Modes

Cursor offers different modes so you can choose how the AI helps:

- **Plan** is for thinking before typing—it helps outline architecture, steps, and trade-offs without touching code. Use it when you're starting something non-trivial or want to sanity-check an approach before committing.
- **Agent** actively writes, edits, and navigates code across files to accomplish a task end-to-end. Use it when you want Cursor to "just do the work," like implementing a feature or refactoring with minimal back-and-forth.
- **Ask** answers questions about your codebase, errors, or concepts without making changes. Use it when you want explanations, guidance, or quick understanding rather than modifications.
- **Debug** focuses on diagnosing bugs by reasoning through failures, stack traces, and runtime behavior. Use it when something's broken and you want help figuring out why before (or instead of) fixing it automatically.

### Exercise 1: Experiment with Cursor

Try opening Cursor and playing around:

1. Create a new folder on your computer called `test-project`
2. Open that folder in Cursor (File → Open Folder)
3. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open the AI prompt
4. Ask Cursor to write a poem into a text file (e.g. "Write a short poem and save it to poem.txt")
5. Ask Cursor to create an HTML file that displays the poem with some nice styling
6. See what happens!

This isn't required, but it'll make Meeting 1 less overwhelming.

---

*Reminder (styled as a box on the site):* You *will* get stuck sometimes—everyone does. When that happens, use the **Ask** feature in Cursor: describe what you're trying to do and what went wrong, and work through the problem with the AI. There's no need to struggle alone.

> "The best debugger is the one who isn't afraid to ask for help—even if that help is another AI."
> — ChatGPT

---

## What is the Terminal?

The terminal (also called command line or shell) is a text-based interface where you type commands to interact with your computer. Instead of clicking buttons and menus, you type instructions that your computer executes.

Think of it like a conversation with your computer: you type a command, press Enter, and the computer responds with text output.

### Mac vs Windows: Terminal Differences

#### Mac (Terminal)

On Mac, the terminal is called **Terminal**. To access it:

1. Press `Cmd + Space` to open Spotlight search
2. Type "Terminal" and press Enter
3. Or go to Applications → Utilities → Terminal

Mac uses Unix-based commands (similar to Linux). The default shell is usually `zsh` or `bash`.

#### Windows (Command Prompt or PowerShell)

On Windows, you have two options:

**Option 1: Command Prompt**
1. Press `Windows + R` to open Run
2. Type `cmd` and press Enter
3. Or search for "Command Prompt" in the Start menu

**Option 2: PowerShell (recommended)**
1. Press `Windows + X` and select "Windows PowerShell"
2. Or search for "PowerShell" in the Start menu

PowerShell is more modern and powerful, similar to Unix terminals. Many commands work similarly between PowerShell and Mac/Linux terminals.

### Using the Terminal in Cursor

#### How to Open the Terminal in Cursor

1. **Menu method:** Go to `View → Terminal` (or `Terminal → New Terminal`)
2. **Keyboard shortcut:** 
   - Mac: `` Ctrl + ` `` (Control + backtick)
   - Windows: `` Ctrl + ` `` (Control + backtick)
3. **Command Palette:** Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows), then type "Terminal: Create New Terminal"

#### Advantages of Using Cursor's Terminal

- **Integrated workflow:** Run commands without leaving your editor
- **File context:** The terminal opens in your project folder automatically
- **Multiple terminals:** Open several terminal tabs for different tasks
- **AI context:** Terminal output can be included in Cursor's context (see below)

#### Terminal Output and Cursor's Context

**What is context?** Context is the information Cursor uses to understand your project and help you. It includes:
- Files you've opened
- Code you've selected
- Terminal output (when enabled)
- Error messages
- Recent changes

**When is terminal output included?**
- Terminal output is automatically included in Cursor's context when you're using the **Agent (Composer)**
- If you run a command and get an error, Cursor can see that error and help you fix it
- This makes debugging much easier—Cursor understands what went wrong

**Example:** If you run `python script.py` and get an error, you can ask Cursor "What's wrong?" and it will see the error message and suggest a fix.

### Exercise 1: Hello World (No Installation Required)

Let's start with something simple that works on any computer without installing anything.

#### Step 1: Ask Cursor to Create a Hello World Script

1. Open Cursor and create a new folder (or use an existing project folder)
2. Open the Agent (Composer) by pressing `Cmd+I` (Mac) or `Ctrl+I` (Windows)
3. Type this prompt:

```
Create a simple "Hello World" script that I can run in the terminal. Use a language that doesn't require installation (like a shell script for Mac or batch file for Windows).
```

4. Cursor will create a script file for you

#### Step 2: Run the Script

1. Open the terminal in Cursor (`` Ctrl + ` ``)
2. Run the script:
   - **Mac:** Type `bash hello.sh` (or whatever filename Cursor created)
   - **Windows:** Type `hello.bat` (or whatever filename Cursor created)
3. You should see "Hello World" printed in the terminal!

**What you learned:** You can ask Cursor to create scripts, and then run them directly in Cursor's integrated terminal.

### Exercise 2: A Number-Guessing Game in Python (With Installation)

Now let's try something that requires installing a programming language. We'll use Python to build a simple game you can run in the terminal.

**The game:** The program randomly picks an integer between 1 and 10 and asks the user to guess. If the guess is wrong, it replies in the terminal with either "Wrong guess! Too High!" or "Wrong guess! Too Low!" and prompts the user to try again. If the guess is correct, it replies with "Correct! Good job!" and then ends.

<a href="../examples/guess_the_number.py" download>See solution example</a> — You can download this example script to see one way the game might be written. Try building your own with Cursor first, then compare.

#### Step 1: Ask Cursor to Create the Game

1. In Cursor, ask the Agent something like:

```
Write a Python script that plays a simple game in the terminal: randomly choose an integer between 1 and 10 and ask the user to guess. If the guess is wrong, print "Wrong guess! Too High!" or "Wrong guess! Too Low!" as appropriate and ask again; if correct, print "Correct! Good job!" and exit.
```

2. Cursor will create a Python script (e.g. `guess_the_number.py`) for you

#### Step 2: Try to Run It (It May Fail)

1. Open the terminal in Cursor
2. Try running: `python guess_the_number.py` (or whatever filename Cursor used)
3. You might get an error like "command not found" or "python is not recognized"

**This is expected** if Python isn't installed yet.

#### Step 3: Ask Cursor to Help Install Python

Instead of searching for installation instructions, **ask Cursor:**

```
I'm trying to run a Python script but I get an error that python is not found. Help me install Python on my [Mac/Windows] system. Provide step-by-step instructions.
```

Cursor will:
- Give you platform-specific instructions
- Explain what Python is and why you need it
- Guide you through the installation process

#### Step 4: Follow Cursor's Instructions

1. Follow the steps Cursor provides
2. For Mac, Cursor might suggest using Homebrew or downloading from python.org
3. For Windows, Cursor might suggest the Microsoft Store or python.org
4. After installation, verify with: `python --version`

#### Step 5: Run Your Game

1. Run your script: `python guess_the_number.py`
2. Guess numbers until you see "Correct! Good job!"

**What you learned:**
- You can ask Cursor to build a small program from a description
- You can ask Cursor to help install tools (like Python) when something is missing
- The terminal is where you run programs and see their output
- Cursor can use terminal errors as context to help you fix issues

### Key Takeaways

- **Terminal = text-based interface** for running commands
- **Mac uses Terminal**, Windows uses **Command Prompt or PowerShell**
- **Cursor's integrated terminal** keeps you in your workflow
- **Terminal output becomes context** that Cursor can use to help you
- **Ask Cursor for help** instead of searching—it can provide platform-specific guidance
- **Installation is part of development**—Cursor can guide you through it

The terminal might seem intimidating at first, but it's just another way to talk to your computer. With Cursor's help, you'll get comfortable with it quickly.

---

## What is Git?

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
