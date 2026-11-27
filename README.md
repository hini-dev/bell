# Bell Networks — React single-page website

A responsive React + Vite single-page corporate website based on the supplied Bell Networks company profile.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code / terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown by Vite.

## Production build
Run `npm run build`. The deployable site will be generated in the `dist` folder.

## Customize
- Main content and sections: `src/App.jsx`
- Colors, layout and responsive styles: `src/styles.css`
- Page title and SEO description: `index.html`

The contact form opens the visitor's default email application and prepares an email addressed to `mohan@bellns.com`. No phone number is displayed.

## Notes
- Images are loaded from Unsplash URLs and therefore require an internet connection.
- Partner names are represented as text-based wordmarks, not official partner logo artwork.
- The site uses the details and service categories in the supplied Bell Networks PDF; wording has been adapted for a web experience.
