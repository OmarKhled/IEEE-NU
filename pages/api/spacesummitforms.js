import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import nodemailer from "nodemailer";
import QRCode from "qrcode";
import SpaceSummitMail from "../../templates/SpaceSummitMail";
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
        const docRef = await addDoc(collection(db, "attendees"), {
          ...req.body.data,
          emailSent: false,
          attended: false,
          hadMeal: false,
        });
        console.log("Document written with ID: ", docRef.id);

        const qr = await QRCode.toDataURL(docRef.id);

        try {
          console.log(process.env.EMAIL_PASSWORD);
          let transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "ieeenu@nu.edu.eg",
              pass: process.env.EMAIL_PASSWORD,
            },
          });

          let info = await transporter.sendMail({
            from: '"IEEE NU" <ieeenu@nu.edu.eg>', // sender address
            to: data.email, // list of receivers
            subject: "Egyptian Space Summit", // Subject line
            attachments: [
              {
                filename: "QrCode.png",
                content: qr.split(",")[1],
                encoding: "base64",
              },
            ],
            text: "Egyptian Space Summit Registration Confirmation", // plain text body
            html: SpaceSummitMail(data.name),
          });
          console.log(`Message sent: ${data.email} ${info.messageId}`);
          const ref = doc(db, "attendees", docRef.id);
          await updateDoc(ref, {
            emailSent: true,
          });
          if (info) {
            res.send({ success: true });
            res.end();
          }
        } catch (error) {
          console.log(error);
          res.send({ msg: "stop screwing up you shit!" });
          res.end();
        }

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
