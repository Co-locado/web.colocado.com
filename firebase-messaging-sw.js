importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDS6tV20nZuboENUDd8YMIwuuee-E-4XjA",
  authDomain: "web-co-locado.firebaseapp.com",
  projectId: "web-co-locado",
  storageBucket: "web-co-locado.appspot.com",
  messagingSenderId: "350754763736",
  appId: "1:350754763736:web:2261d7713f518e0e62f8ad",
  measurementId: "G-31KZVTE4XD"
};

firebase.initializeApp(firebaseConfig);

/*
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 console.log('[firebase-messaging-sw.js] Received background message ', payload);
 const notificationTitle = 'Background Message from html';
  const notificationOptions = {
   body: 'Background Message body.',
 };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const FIREBASE_PUBLIC_KEY = "BER4k2mBKtUOxUf7MDxLx-Ipl1Ro5fhgYPOT8NtHY47__xEEQtTAR9QVjUFUbHYPx15LSSu-D8LItcAvUgxbncU";
messaging.getToken({ vapidKey: FIREBASE_PUBLIC_KEY }).then((currentToken) => {
  console.log("token:", currentToken);
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});
*/
