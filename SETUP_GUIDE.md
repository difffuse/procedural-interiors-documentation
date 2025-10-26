# Documentation Setup Guide

## Overview

This guide will help you:
1. Install Node.js (needed to run the site locally)
2. Clone the repository from GitHub
3. Install dependencies
4. Run the site locally
5. Edit documentation content
6. Deploy changes to the live site

**Time needed:** 15-20 minutes for initial setup

---

## Part 1: Initial Setup (One-Time Only)

### Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Download the **LTS version** (recommended for most users)
3. Run the installer and follow the prompts
4. Accept all default settings
5. Restart your computer after installation

**Verify installation:**
- Open Command Prompt (Windows) or Terminal (Mac/Linux)
- Type: `node --version`
- You should see a version number like `v20.x.x`

### Step 2: Install Git

1. Go to https://git-scm.com/downloads
2. Download Git for your operating system
3. Run the installer with default settings
4. Restart your computer after installation

**Verify installation:**
- Open Command Prompt or Terminal
- Type: `git --version`
- You should see a version number

### Step 3: Clone the Repository

1. Open Command Prompt or Terminal
2. Navigate to where you want the project:
   ```bash
   cd Desktop
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/difffuse/procedural-interiors-documentation
   ```
4. Navigate into the project folder:
   ```bash
   cd procedural-interiors-documentation
   ```

### Step 4: Install Dependencies

In the project folder, run:
```bash
npm install
```

This will take 2-3 minutes to download all required packages.

---

## Part 2: Running the Site Locally

### Start the Development Server

In the project folder, run:
```bash
npm run start
```

- The site will open automatically in your browser at `http://localhost:3000`
- Any changes you make will appear instantly in the browser
- Keep this window open while editing
- Press `Ctrl+C` to stop the server when done

---

## Part 3: Editing the Documentation

### Important Files and Folders

#### ✅ **SAFE TO EDIT** - Main content areas:

**1. Documentation Pages** (`docs/` folder)
- `docs/intro.md` - Introduction page
- `docs/installation/` - Installation guides
- `docs/how-to-use/` - Usage tutorials
- `docs/asset-browser/` - Asset browser documentation

**2. Landing Page Content**
- `src/components/HomepageFeatures/index.tsx` - Feature cards on homepage
- `src/pages/index.tsx` - Main landing page structure

**3. Site Configuration**
- `docusaurus.config.ts` - Site title, tagline, social links, metadata
- `src/css/custom.css` - Colors, fonts, styling

**4. Images**
- `static/assets/images/` - Documentation images (screenshots, diagrams)
- `static/img/` - Site logos and icons

#### ⚠️ **CAUTION** - System files (edit only if you know what you're doing):
- `package.json` - Dependencies
- `sidebars.ts` - Sidebar navigation structure
- `tsconfig.json` - TypeScript configuration
- `.github/workflows/` - Deployment automation

---

## Part 4: Common Editing Tasks

### Task 1: Edit Documentation Content

**Example: Edit the intro page**

1. Open `docs/intro.md` in any text editor
2. Make your changes using Markdown formatting
3. Save the file
4. Check the browser - changes appear instantly

**Basic Markdown formatting:**
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
1. Numbered list

[Link text](https://example.com)

![Image description](/assets/images/example.png)
```

### Task 2: Add or Replace Images

1. Place your image in `static/assets/images/`
2. Use it in documentation:
   ```markdown
   ![Description](/assets/images/your-image.png)
   ```

**Image guidelines:**
- Use PNG for screenshots
- Use JPG for photos
- Keep file sizes under 500KB
- Use descriptive filenames (e.g., `addon-preferences-panel.png`)

### Task 3: Edit Homepage Features

**File:** `src/components/HomepageFeatures/index.tsx`

Find the `FeatureList` array (lines 12-43) and edit:

```typescript
{
  title: 'Your Feature Title',
  Svg: require('@site/static/img/your-icon.svg').default,
  description: (
    <>
      Your feature description here.
      Can span multiple lines.
    </>
  ),
},
```

### Task 4: Change Site Title and Tagline

**File:** `docusaurus.config.ts`

Find and edit (lines 8-9):
```typescript
title: 'Procedural Interiors',
tagline: 'Procedural interior generator Add-on for Blender',
```

### Task 5: Update Social Media Links

**File:** `docusaurus.config.ts`

Find the `navbar` section (around line 94) and edit the `href` values:
```typescript
{
  href: 'https://www.youtube.com/@difffusestudio',
  className: 'navbar-icon-link',
  position: 'right',
  html: '<i class="fa-brands fa-youtube" aria-label="YouTube"></i>',
},
```

### Task 6: Change Colors and Theme

**File:** `src/css/custom.css`

**Light mode colors** (lines 8-33):
```css
:root {
  --ifm-color-primary: #4a4a4a;        /* Main brand color */
  --ifm-color-primary-dark: #3d3d3d;   /* Darker shade */
  --ifm-color-primary-darker: #333333; /* Even darker */
  /* ... */
}
```

**Dark mode colors** (lines 36-54):
```css
[data-theme='dark'] {
  --ifm-color-primary: #c0c0c0;        /* Main brand color (dark mode) */
  /* ... */
}
```

**Banner/Hero colors:**
- The hero banner uses a background image: `static/assets/images/background.png`
- Text colors are defined in lines 57-68 of `custom.css`

### Task 7: Create a New Documentation Page

1. Create a new `.md` file in the appropriate `docs/` subfolder
2. Add frontmatter at the top:
   ```markdown
   ---
   sidebar_position: 3
   ---

   # Your Page Title

   Your content here...
   ```
3. The page will automatically appear in the sidebar

---

## Part 5: Deploying Your Changes

### Step 1: Check Your Changes Locally

1. Make sure `npm run start` is running
2. Review all changes in the browser
3. Test all links and images
4. Stop the server with `Ctrl+C`

### Step 2: Commit and Push to GitHub

```bash
git add .
git commit -m "Brief description of your changes"
git push
```

**Example commit messages:**
- `git commit -m "Updated installation instructions"`
- `git commit -m "Added new screenshots for doors tutorial"`
- `git commit -m "Changed homepage colors"`

### Step 3: Wait for Deployment

- GitHub will automatically build and deploy your changes
- **Wait 4-5 minutes** for changes to appear
- Visit: https://difffuse.github.io/procedural-interiors-documentation
- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

## Part 6: Troubleshooting

### Problem: Site won't start

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run start
```

### Problem: Changes not appearing on live site

**Checklist:**
1. Did you run `git push`?
2. Wait 4-5 minutes after pushing
3. Hard refresh browser: `Ctrl+Shift+R`
4. Check GitHub Actions tab in repository for build status

### Problem: Broken links or images

- Use relative paths: `/assets/images/example.png` (with leading slash)
- Check file names match exactly (case-sensitive)
- Verify files exist in `static/` folder

### Problem: Git push rejected

**Solution:**
```bash
# Pull latest changes first
git pull
# Then push again
git push
```

---

## Quick Reference

### Daily Workflow

1. **Start editing:**
   ```bash
   cd procedural-interiors-documentation
   npm run start
   ```

2. **Make changes** to files in `docs/` or `src/`

3. **Deploy changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

4. **Wait 4-5 minutes** and check the live site

### Key Files to Edit

| What to Change | File Location |
|----------------|---------------|
| Documentation content | `docs/**/*.md` |
| Homepage features | `src/components/HomepageFeatures/index.tsx` |
| Site title/tagline | `docusaurus.config.ts` (lines 8-9) |
| Colors/theme | `src/css/custom.css` |
| Images | `static/assets/images/` |
| Logo | `static/img/difffuse_logo.svg` |
| Social links | `docusaurus.config.ts` (lines 107-148) |

### Useful Commands

```bash
npm run start          # Start local development server
npm run build          # Build site for production (test before deploying)
git status             # See what files changed
git log                # See commit history
git pull               # Get latest changes from GitHub
```

---

## Getting Help

- **Docusaurus Documentation:** https://docusaurus.io/docs
- **Markdown Guide:** https://www.markdownguide.org/basic-syntax/
- **Git Basics:** https://git-scm.com/book/en/v2/Getting-Started-Git-Basics

---

**You're all set!** Start by running `npm run start` and exploring the files in the `docs/` folder.

