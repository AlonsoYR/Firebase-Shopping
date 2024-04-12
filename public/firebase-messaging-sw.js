importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDdMacVY0bUh_sBdWXTj8WxKS9oVc2Oh5s",
    authDomain: "fir-shopping-69bd2.firebaseapp.com",
    projectId: "fir-shopping-69bd2",
    storageBucket: "fir-shopping-69bd2.appspot.com",
    messagingSenderId: "740508353124",
    appId: "1:740508353124:web:fab6d57c3fa9f4bbcb1571"
  });

  const messaging = firebase.messaging();

//   messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Titulo de notificación';
//     const notificationOptions = {
//       body: 'Este es el body.',
//       icon: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });
 