// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves static files only, so there is no server entry: `nitro: false` drops
// the server build and prerender emits real HTML at build time.
//
// Do NOT turn on `spa` mode here. It renders the shell at maskPath "/" and overwrites the
// prerendered index.html with an empty hydration stub. The "/404" page below matches no
// route on purpose, so it prerenders the root notFoundComponent — GitHub Pages serves that
// file for any unknown path.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: [{ path: "/404", prerender: { enabled: true, autoSubfolderIndex: false } }],
  },
});
