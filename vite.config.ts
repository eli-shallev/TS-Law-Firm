import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Custom lightweight static HTML prerender plugin
function staticPrerenderPlugin() {
  return {
    name: 'vite-plugin-static-prerender',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const routes = [
        'about',
        'insolvency',
        'epoa',
        'litigation',
        'wills',
        'repossessions',
        'contact',
        'privacy',
        'accessibility'
      ];
      
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) {
        console.warn('index.html not found, skipping static prerendering...');
        return;
      }
      
      const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');
      
      routes.forEach((route) => {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        
        // Write the main single-page template so static hosting knows how to mount it
        fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtmlContent);
        console.log(`[static-prerender] Created route file at: dist/${route}/index.html`);
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      staticPrerenderPlugin()
    ],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
