self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 🔥 Skip WebSocket and Vite HMR connections
  if (url.protocol === "ws:" || url.protocol === "wss:" || url.hostname === "localhost") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).then((fetchedResponse) => {
          const cloned = fetchedResponse.clone();
          caches.open("notebook-cache-v1").then((cache) => {
            cache.put(event.request, cloned);
          });
          return fetchedResponse;
        })
      );
    })
  );
});
