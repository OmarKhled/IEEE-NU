import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { postSubscriber } from "../redux/newsLetter/newsLetterActions";
import LoadingComponent from "./Loading";

const NewsletterMessage = ({ remove }) => {
  const dispatch = useDispatch();

  const { loading, alerts } = useSelector((state) => state.newsLetter);
  const turnOff = () => {
    localStorage.setItem("revealPop", "off");
    remove();
  };
  const agree = () => {
    localStorage.setItem("revealPop", "off");
    remove();
    setModalShow(true);
  };
  const [modalShow, setModalShow] = useState(false);
  const onHide = () => setModalShow(false);

  const [email, setEmail] = useState("");

  const onSubmit = () => {
    dispatch(postSubscriber(email));
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
            <h3 className="mb-2">Subscribe to our news letter.</h3>
          </div>
          {loading ? (
            <LoadingComponent />
          ) : (
            <>
              {alerts.map((alert, index) => (
                <div key={index}>{alert.msg}</div>
              ))}
              <div className="space-even mt-4">
                <div>
                  <input
                    className="mailLetter-input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn-subscribe mt-3" onClick={onSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </>
          )}
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
