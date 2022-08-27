import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import nodemailer from "nodemailer";
import QRCode from "qrcode";
import SpaceSummitMail from "../../templates/SpaceSummitMail";

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
    const body = req.body;
    console.log(body);
    const data = body.item.payload;
    if (body.token === process.env.PAGECLIP_TOKEN) {
      const docRef = await addDoc(collection(db, "attendees"), data);
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
        if (info) {
          res.send({ success: true });
          res.end();
        }
      } catch (error) {
        console.log(error);
        res.send({ msg: "stop screwing up you shit!" });
        res.end();
      }
    } else {
      console.log("dump request");
      res.send({ msg: "stop screwing up you shit!" });
      res.end();
    }
  }
}
