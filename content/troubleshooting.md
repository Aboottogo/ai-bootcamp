# Troubleshooting

This page collects solutions to common problems. It grows over time as students encounter issues and document fixes.

**Found a solution to something that isn't here?** [Contribute to this curriculum](/meeting-3#contributing-to-this-curriculum) and help the next cohort.

---

## General Advice

Before diving into specific issues:

1. **Read the error message carefully.** It often tells you exactly what's wrong.
2. **Copy the full error and paste it to Cursor.** Say: "I'm getting this error: [paste]. Fix it."
3. **Google the error.** Someone else has probably hit the same issue.
4. **Check that your files are saved.** Unsaved changes don't run.
5. **Try restarting.** Close and reopen Cursor. Stop and restart your dev server (`Ctrl+C`, then `npm run dev`).

---

## Common Cursor Issues

### Cursor isn't generating anything

- Make sure you're in the chat panel or using Cmd+K (Mac) / Ctrl+K (Windows)
- Check your internet connection
- Verify you're logged in and on the student plan (Settings → Account)

### Generated code has errors

This happens. Cursor isn't perfect. Try:
- Paste the error message back to Cursor and ask it to fix
- Be more specific in your prompt about what you want
- Ask Cursor to explain what it generated so you can understand what went wrong

### Cursor generated way more files than expected

AI sometimes over-engineers. If it created a complex folder structure when you wanted something simple, try:
> "Simplify this. I want a basic single-file approach, not a complex project structure."

---

## Common Git Issues

### "fatal: not a git repository"

You're trying to run a Git command in a folder that hasn't been initialized.

Fix: Run `git init` first.

### "Please tell me who you are"

Git needs your identity for commits.

Fix:
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### "failed to push some refs"

Usually means your local repo is behind the remote (someone else pushed, or you made changes on GitHub directly).

Fix: Pull first, then push:
```bash
git pull origin main
git push origin main
```

### "Permission denied (publickey)"

Your computer isn't authenticated with GitHub.

Fix: The easiest solution is to use HTTPS instead of SSH. When cloning or adding a remote, use URLs that start with `https://` not `git@`.

Or set up SSH keys: [GitHub's SSH guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

## Common Supabase Issues

### "Invalid API key" or connection errors

- Double-check you copied the full URL and anon key from Supabase dashboard
- Make sure there are no extra spaces or missing characters
- Verify the environment variable names match what your code expects

### Data isn't saving

- Check the Supabase dashboard → Table Editor. Is the table created?
- Check Supabase dashboard → Logs for any errors
- Make sure Row Level Security (RLS) isn't blocking inserts (for beginners, you may need to disable RLS or set up policies)

### Users can see each other's data

You need to filter by user ID. Ask Cursor:
> "Update the query to only fetch records where user_id matches the logged-in user."

And make sure you're storing `user_id` when creating records.

### Authentication not working

- Check that your Supabase URL and anon key are correct
- Look at the browser console for errors (Right-click → Inspect → Console)
- Verify email confirmation settings in Supabase (Authentication → Settings)

---

## Common Vercel Issues

### Build failed

Click on the failed deployment to see the error log. Common causes:
- Missing environment variables (add them in Vercel project settings)
- Code errors that didn't show up locally
- Missing dependencies (make sure `package.json` is committed)

### Environment variables not working

- Variable names must match exactly (case-sensitive)
- For Next.js, client-side variables must start with `NEXT_PUBLIC_`
- After adding/changing variables, redeploy (or push a new commit)

### Site shows old version

Vercel caches aggressively. Try:
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear your browser cache
- Wait a few minutes for cache to expire

### "404 - This page could not be found"

- Check that your routes/pages are set up correctly
- For Next.js App Router, make sure you have `page.tsx` files in the right folders
- Check Vercel logs for build errors

---

## Still Stuck?

1. **Ask Cursor** with a detailed description of the problem
2. **Search the error message** on Google or Stack Overflow
3. **Ask a classmate** — they might have hit the same issue
4. **Raise your hand** during in-class sessions
5. **Post in the group chat** with:
   - What you're trying to do
   - What's happening instead
   - The full error message
   - What you've already tried

---

## Contribute

Hit a problem that took you forever to solve? Add it here so the next person doesn't have to struggle.

See [Contributing to This Curriculum](/meeting-3#contributing-to-this-curriculum) for how to submit your additions.
