import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcICHoMkObc2PaCHMjZKA7rp2giu8jzbU",
  authDomain: "db-prueba-7de12.firebaseapp.com",
  databaseURL: "https://db-prueba-7de12-default-rtdb.firebaseio.com",
  projectId: "db-prueba-7de12",
  storageBucket: "db-prueba-7de12.appspot.com",
  messagingSenderId: "30688804906",
  appId: "1:30688804906:web:105f209b41921c451cc353",
  measurementId: "G-QT9CFBSMK3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(db,"Agenda/Universidad Panamericana");
    onValue(dataRef, (snapshot) => {
      setData(snapshot.val());
    });
  }, []);
  return (
    <div style={{textAlign : "left"}}>
      <ul style={{listStyleType : "none"}}>
        {data && Object.keys(data).map((contacto) => (
          <li key={contacto}>
            <h1 style={{background : "black", color : "white"}}>{contacto}</h1>
            <h2>Nombre: {data[contacto].Nombre}</h2>
            <h2>Teléfono: {data[contacto].Telefono}</h2>
            <h2>Edad: {data[contacto].Edad}</h2>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
