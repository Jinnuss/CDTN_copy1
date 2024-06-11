import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyB88BeRVrPXOopcvNfeBjB17BsHdQzYe58",
    authDomain: "cdtn-3082b.firebaseapp.com",
    databaseURL: "https://cdtn-3082b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cdtn-3082b",
    storageBucket: "cdtn-3082b.appspot.com",
    messagingSenderId: "630084049894",
    appId: "1:630084049894:web:d64dbd1fff15e1e0c3d427",
    measurementId: "G-PWTVLTH38W"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const fetchData = (db, path) => {
    return new Promise((resolve, reject) => {
        onValue(ref(db, path), (snapshot) => {
            // console.log(path);
            const result = snapshot.val();
            // console.log(snapshot.val());
            if (result !== null) {
                resolve(result);
            } else {
                reject(new Error("No data found"));
            }
        }, (error) => {
            reject(error);
        });
    });
}
export const Getdb = async (path) => {
    try {
        const resultNew = await fetchData(db, path);
        // console.log('Updated resultNew:', resultNew);
        return resultNew;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Đảm bảo lỗi được xử lý bên ngoài
    }
}