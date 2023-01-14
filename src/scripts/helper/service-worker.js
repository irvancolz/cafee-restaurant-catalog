import { Workbox } from "workbox-window";

export async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.error("this browser does not support service worker!");
    return;
  }
  try {
    const workbox = new Workbox("/sw.bundle.js");
    await workbox.register();
    console.log("registering sw")
  } catch (error) {
    console.error(error);
  }
}
