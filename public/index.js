import app from "./assets/js/app.js";
import serviceWorkerRegister from "./assets/js/sw-register.js";


serviceWorkerRegister();
window.addEventListener("DOMContentLoaded", app);
