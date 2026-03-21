# Adnani Apps Support Hub

This repository hosts the support pages for all your apps.

## Structure
- `index.html`: The main landing page listing all your apps.
- `apps/template.html`: A template support page you can copy for each new app.
- `css/style.css`: Shared styles to keep everything consistent.
- `js/script.js`: Shared logic for interactive elements (FAQs, Modals).

## How to Add a New App

1.  **Create the App Page**:
    - Go to the `apps/` folder.
    - Copy `template.html` and rename it to your app name (e.g., `my-new-app.html`).
    - Open the new file and replace:
        - `<!-- APP NAME -->` with your app's name.
        - The Privacy Policy and Terms text with your specific policies.

2.  **Add to Landing Page**:
    - Open `index.html`.
    - Find the `<div class="app-grid">` section.
    - Add a new "card" for your app:
      ```html
      <a href="apps/my-new-app.html" class="app-card">
          <div class="app-card-title">My New App</div>
          <div class="app-card-desc">Support & Privacy Policy</div>
      </a>
      ```

3.  **Publish**:
    - Commit and push your changes to GitHub.
    - Your new support page will be at: `https://yourusername.github.io/repo-name/apps/my-new-app.html`

## Customization

- **Colors**: Edit `css/style.css` and change the `--primary-color` variable.
- **Contact Email**: Edit the `mailto:` links in `index.html` and `apps/template.html` if your email changes.
