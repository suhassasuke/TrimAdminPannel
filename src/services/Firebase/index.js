import firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyBwRsMvJdN-c59kEnoV5jPlOmhEmW0idUo",
    authDomain: "trimz-1cb55.firebaseapp.com",
    projectId: "trimz-1cb55",
    storageBucket: "trimz-1cb55.appspot.com",
    messagingSenderId: "504229724692",
    appId: "1:504229724692:web:90b5bfff59e39d05e39d01",
    measurementId: "G-D5KBL07HD1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
    return messaging
        .getToken({
            vapidKey:
                "BDJqPbEyagPjIaTLwIPj5hhhK1kmGM_mHa9xAnFjv9SHBpg8J14fLtQVXcuLwuOr8wzGXQCOb5ebMF6lyfIxBiY"
        })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken);
                setTokenFound(true);
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log(
                    "No registration token available. Request permission to generate one."
                );
                setTokenFound(false);
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // catch error while creating client token
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });
