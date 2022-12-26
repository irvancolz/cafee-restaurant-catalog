import * as WorkboxWindow from "workbox-window";

export async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.error("this browser does not support service worker!");
    return;
  }
  const workbox = new WorkboxWindow.Workbox("/sw.bundle.js");
  try {
    await workbox.register();
    console.log("installing service worker")
  } catch (error) {
    console.error(error);
  }
}
