// Listen for events

self.addEventListener('install', function (event) {
    // Perform some task
    console.log("App installed")
});

self.addEventListener('activate', function (event) {
    // Perform some task
    console.log("App activated")
});

self.addEventListener('fetch', function (event) {
    console.log("Fetch")
});