import { spawn } from "child_process";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Pageclip from "pageclip";
const pageclip = new Pageclip("api_enM7l7GWwLLzJvrkRfESsfSdte5N3Zrt");

const firebaseConfig = {
  apiKey: "AIzaSyB7EedYToCVQMKEYFClGT-sRrx6o2DsJXM",
  authDomain: "ieee-nu.firebaseapp.com",
  projectId: "ieee-nu",
  storageBucket: "ieee-nu.appspot.com",
  messagingSenderId: "482944964315",
  appId: "1:482944964315:web:7df6dc9efda403dc1a5efe",
  measurementId: "G-MJFMV4NGHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(process.env.NODE_ENV, "node_env");
    const pageclipForm =
      process.env.NODE_ENV == "development" ? "test" : req.body.form;
    pageclip
      .send(pageclipForm, req.body.data)
      .then(async (response) => {
        console.log(response.status, response.data, response.form);
        res.send({ success: response.status == 200 ? true : false });
        res.end();
      })
      .catch(async (error) => {
        res.send({ success: false });
        console.log(error, "error");
      });
  }
}
