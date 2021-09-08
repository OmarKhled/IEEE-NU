import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

import validator from "validator";

const NewsletterMessage = ({ remove }) => {
  const turnOff = () => {
    localStorage.setItem("revealPop", "off");
    remove();
  };
  const agree = () => {
    localStorage.setItem("revealPop", "off");
    remove();
    setModalShow(true);
    setTimeout(() => {
      var form = document.querySelector("#form-email-letter");
      window.Pageclip.form(form, {
        onResponse: (err, response) => {
          console.log("object");
          if (err) throw err;
          document.getElementById("form-email-letter").innerHTML = `
              <h2>Thanks for your interest</h2>
            `;
        },
      });
    }, 200);
  };
  const [modalShow, setModalShow] = useState(false);
  const onHide = () => setModalShow(false);

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (alerts.length > 0) {
      setTimeout(() => {
        setAlerts([]);
      }, 2300);
    }
  }, [alerts]);

  useEffect(() => {}, []);

  const validate = (e) => {
    const email = document.querySelector("#letter-email");
    if (email.value) {
      if (validator.isEmail(email.value)) {
        console.log("helo");
        return true;
      }
    }
    setAlerts(["Please provide a valid email"]);
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        show={modalShow}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="newsletter-modal space-even">
          <div className="text-center">
            <h3>Subscribe to our news letter.</h3>
          </div>
          <div>
            {alerts.map((alert) => (
              <div className="alert alert-danger" color="danger">
                {alert}
              </div>
            ))}
          </div>
          <form
            action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/News-Letter-Form"
            method="post"
            onSubmit={validate}
            id="form-email-letter"
            className="pageclip-form space-even mt-4"
          >
            <div>
              <label htmlFor="">
                <h3> Email:</h3>{" "}
              </label>
              <input
                className="mailLetter-input"
                id="letter-email"
                placeholder="Email"
                name="Email"
                type="email"
              />
            </div>
            <div className="d-flex justify-content-center">
              <input type="submit" className="btn-subscribe" value="Submit" />
            </div>
          </form>
        </div>
      </Modal>
      <div className="news-letter">
        <div className="newsletter-header">
          <h3>Do you want to subscribe to our news letter ?</h3>
        </div>
        <div className="newsletter-body">
          <button className="newsletter-btn" onClick={agree}>
            Yes
          </button>
          <button className="newsletter-btn" onClick={turnOff}>
            Not really...
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterMessage;
