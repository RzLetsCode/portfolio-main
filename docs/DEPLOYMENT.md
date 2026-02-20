# Deployment Guide

## code2career_ai Deployment Instructions

This guide provides step-by-step instructions for deploying the code2career_ai project.

## Prerequisites

- GitHub Account (already set up)
- Git installed on your local machine
- Text editor or IDE
- Basic familiarity with GitHub

## Deployment Methods

### Method 1: GitHub Pages (Recommended - Already Configured)

The project is already configured to deploy via GitHub Pages. GitHub automatically deploys changes pushed to the main branch.

**Current Configuration:**
- **Repository**: https://github.com/RzLetsCode/code2career_ai
- **Live Site**: https://rzletscode.github.io/code2career_ai/
- **Source**: main branch, root directory
- **Deployment Status**: Active

### Method 2: Local Development & Testing

#### Step 1: Clone the Repository

```bash
git clone https://github.com/RzLetsCode/code2career_ai.git
cd code2career_ai
```

#### Step 2: Run Local Server

```bash
npm run dev
# Or use Python
python -m http.server 8000
```

#### Step 3: Access in Browser

Open `http://localhost:8000` in your web browser.

### Method 3: Making Changes & Pushing to GitHub

#### Step 1: Make Changes Locally

Edit HTML, CSS, or JavaScript files as needed:

```bash
# Example: Edit index.html
vim index.html
```

#### Step 2: Commit Changes

```bash
git add .
git commit -m "Add: Description of your changes"
```

#### Step 3: Push to GitHub

```bash
git push origin main
```

#### Step 4: Verify Deployment

- GitHub Actions will automatically build and deploy
- Check the live site: https://rzletscode.github.io/code2career_ai/
- Deployment typically completes within 1-2 minutes

## Making Updates

### Updating Content

1. **Edit HTML files** directly in the repository
   - index.html (home page)
   - about-me.html (about page)
   - portfolio.html (projects)
   - skill-set.html (skills)

2. **Update CSS**
   - style.css (global styles)
   - style-about-me.css (about page)
   - style-portfolio.css (portfolio page)

3. **Modify JavaScript**
   - js/theme.js (dark mode)
   - js/utils.js (utilities)
   - js/main.js (main functionality)

### Example: Adding a New Project

1. Edit `portfolio.html`
2. Add project card HTML:
   ```html
   <div class="project-card">
     <h3>Project Title</h3>
     <p>Project description</p>
     <a href="#">View Project</a>
   </div>
   ```
3. Add styling in `style-portfolio.css`
4. Commit and push changes

## GitHub Pages Settings

### Current Configuration

```
Settings > Pages
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

### To Modify Settings

1. Go to: https://github.com/RzLetsCode/code2career_ai/settings/pages
2. Under "Build and deployment":
   - Select source branch (currently: main)
   - Select folder (currently: / root)
3. Click "Save"

## Performance Optimization

### Image Optimization

- Compress images before uploading
- Use WebP format when possible
- Add alt text to all images

### CSS Optimization

- CSS is already organized and modular
- Consider minifying for production:
  ```bash
  npm run build
  ```

### JavaScript Optimization

- Scripts are async/deferred for performance
- Lazy load images using loading="lazy"

## Troubleshooting

### Site Not Updating

1. Clear browser cache (Ctrl+Shift+Delete)
2. Wait 2-5 minutes for GitHub Pages to rebuild
3. Check commit history: https://github.com/RzLetsCode/code2career_ai/commits/main
4. Verify build status in GitHub Actions

### 404 Errors

- Ensure file paths are correct
- Check that files exist in the main branch
- Verify relative paths (use ./ for current directory)

### Styling Issues

- Hard refresh browser (Ctrl+Shift+R)
- Check browser DevTools for CSS errors
- Verify CSS file is linked in HTML head

### Contact Form Not Working

1. Check EmailJS configuration in index.html
2. Verify EmailJS service/template IDs are correct
3. Check browser console for errors
4. Test with DevTools Network tab

## Continuous Integration

### Automated Checks (Future)

Consider adding:
- GitHub Actions for automated testing
- HTML/CSS validation
- Performance monitoring
- Accessibility checks

## Custom Domain (Optional)

To use a custom domain:

1. Go to: https://github.com/RzLetsCode/code2career_ai/settings/pages
2. Under "Custom domain", enter your domain
3. Update DNS records at your domain provider
4. Wait for HTTPS certificate (24-48 hours)

## Monitoring & Maintenance

### Check Live Site

- Visit: https://rzletscode.github.io/code2career_ai/
- Test all links and forms
- Verify responsive design on mobile

### Regular Updates

- Update portfolio projects quarterly
- Review and update skills section
- Check for broken links
- Monitor contact form submissions

## Rollback Procedures

If you need to revert to a previous version:

```bash
# View commit history
git log --oneline

# Revert to specific commit
git revert <commit-hash>

# Push changes
git push origin main
```

## Support & Resources

- GitHub Pages Documentation: https://pages.github.com/
- Git Documentation: https://git-scm.com/doc
- Repository Issues: https://github.com/RzLetsCode/code2career_ai/issues
- ARCHITECTURE.md: Detailed project structure
- MIGRATION-GUIDE.md: Setup and migration guide

## Next Steps

1. Make a test change and deploy
2. Verify the live site updates
3. Share the portfolio link
4. Monitor usage and feedback
5. Plan future enhancements

---

**Last Updated**: February 2026
**Deployment Status**: ✅ Active
**Live Site**: https://rzletscode.github.io/code2career_ai/
