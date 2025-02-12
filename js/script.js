import { initializeApp } from "firebase/app";
import { getAnalyticsref, set, get, onValue } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCVPSDVdeocDwST38KSe1spFUre4-1y05M",
    authDomain: "lovebuttonforwebsite.firebaseapp.com",
    databaseURL: "https://lovebuttonforwebsite-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "lovebuttonforwebsite",
    storageBucket: "lovebuttonforwebsite.firebasestorage.app",
    messagingSenderId: "1096809912576",
    appId: "1:1096809912576:web:0c4d578ba24cc5c781fbe5",
    measurementId: "G-96H3HWWXCH"
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