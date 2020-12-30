const serviceWorkerRegister = () => {
    // REGISTER SERVICE WORKER
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("./service-worker.js")
                .then(() => {
                    console.log("service worker registered");
                })
                .catch(() => {
                    console.log("service worker failed");
                });
        });
    } else {
        console.log("browser doesn't support service worker");
    }    
}

export default serviceWorkerRegister;

