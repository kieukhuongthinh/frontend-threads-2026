const handleDumiBasePath = () => {
  // Detect Service Worker URL based on pathname
  // If pathname has /frontend-threads-2026/ then use full path
  const hasBasePath = window.location.pathname.startsWith(
    '/frontend-threads-2026/',
  );
  const serviceWorkerUrl = hasBasePath
    ? '/frontend-threads-2026/mockServiceWorker.js'
    : '/mockServiceWorker.js';

  return serviceWorkerUrl;
};

export const setupApiMocks = async () => {
  if (typeof window === 'undefined') {
    return;
  }

  const { setupWorker } = await import('msw/browser');

  const worker = setupWorker();

  const serviceWorkerUrl = handleDumiBasePath();

  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: serviceWorkerUrl,
    },
  });

  return worker;
};
