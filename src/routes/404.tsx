import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/NotFound";

// Exists purely so the prerenderer has a 200-status page to render into 404.html, which is
// what GitHub Pages serves for unknown paths. The prerenderer treats a real 404 status as a
// build error, so the not-found UI cannot be captured any other way.
export const Route = createFileRoute("/404")({
  component: NotFound,
  head: () => ({
    meta: [{ title: "Page not found — Claire Chang" }, { name: "robots", content: "noindex" }],
  }),
});
