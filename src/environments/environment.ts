export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: process.env["API_KEY"],
        authDomain: "bloodpressureapp-c1e59.firebaseapp.com",
        projectId: "bloodpressureapp-c1e59",
        storageBucket: "bloodpressureapp-c1e59.firebasestorage.app",
        messagingSenderId: process.env["MESSAGING_SENDER_ID"],
        appId: process.env["APP_ID"],
        measurementId: process.env["MEASUREMENT_ID"]
    } 
};