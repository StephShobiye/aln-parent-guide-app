const CACHE = "aln-guide-v1";
const ASSETS = [
  "/app/",
  "/app/app.en.html",
  "/app/manifest.webmanifest",
  // Add key content files so search works offline
  "/app/content/knowledge_base.md",
  "/app/content/chatbot_logic.md"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
