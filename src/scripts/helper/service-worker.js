
export async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.error("this browser does not support service worker!");
    return;
  }
  try {
    await navigator.serviceWorker.register("/sw.bundle.js")
  } catch (error) {
    console.error(error);
  }
}
