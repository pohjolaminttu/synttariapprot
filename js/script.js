import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


const firebaseConfig = {
    authDomain: "lovebuttonforwebsite.firebaseapp.com",
    databaseURL: "https://lovebuttonforwebsite-default-rtdb.firebaseio.com/",
    projectId: "lovebuttonforwebsite",
    storageBucket: "lovebuttonforwebsite.appspot.com",
    messagingSenderId: "1096809912576",
    //appId: "YOUR_APP_ID"
    //apiKey: "YOUR_API_KEY"
};

const app = firebaseConfig.initializeApp(firebaseConfig);
const db = firebaseConfig.databaseURL(app);

const laskuriRef = db.ref("laskuri");

// Hae ja näytä nykyinen arvo
laskuriRef.on("value", snapshot => {
    const data = snapshot.val();
    document.getElementById("numero").textContent = data || 0;  // Jos ei ole arvoa, näytetään 0
});

// Nappi lisää 1 laskuriin
document.getElementById("love").addEventListener("click", function () {
    laskuriRef.transaction(currentValue => {
        return (currentValue || 0) + 1;  // Lisää 1 nykyiseen arvoon
    });
});