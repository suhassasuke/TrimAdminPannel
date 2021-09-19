/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBwRsMvJdN-c59kEnoV5jPlOmhEmW0idUo",
    authDomain: "trimz-1cb55.firebaseapp.com",
    projectId: "trimz-1cb55",
    storageBucket: "trimz-1cb55.appspot.com",
    messagingSenderId: "504229724692",
    appId: "1:504229724692:web:90b5bfff59e39d05e39d01",
    measurementId: "G-D5KBL07HD1"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
