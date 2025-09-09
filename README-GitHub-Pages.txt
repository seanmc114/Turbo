
# Deploying to GitHub Pages (no command line)

1. Go to GitHub → create a **New repository** (Public). Name can be anything (e.g., `spanish-phrase-game`).
2. In the repo, click **Add file → Upload files**. Drag these three files:
   - `index.html`
   - `style.css`
   - `script.js`
   Then **Commit changes**.
3. Open **Settings → Pages** (left sidebar). Under **Build and deployment**:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` and **/(root)**
   Click **Save**.
4. In about a minute, your site will be live at:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Tip for the “Try Again” link
If clicking **Try Again** sends you to the GitHub root instead of reloading the page, open `script.js` and change the `href="/"` to `href="./"` (or replace the link with `location.reload()`).
