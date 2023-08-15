import React, { useState } from 'react';
import contact1 from './contact1.png';
import './Contact.css';

const apiKey = process.env.REACT_APP_GETFORM_IO_KEY;

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <img src={contact1} alt="" />

                <div className="details">
                  <h1>David Bujosa</h1>
                  <p>Chief Operating Officer</p>
                  <p>
                    I am available for freelance work. Connect with me via and
                    call in to my account.
                  </p>{' '}
                  <br />
                  <p>Phone: +18292666009</p>
                  <p>Email: davidbujosa@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <a href="https://www.linkedin.com/in/davidbujosa/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </button>
                    <button className="btn_shadow">
                      <a href="https://www.github.com/bujosa">
                        <i className="fab fa-github"></i>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form action={apiKey} method="POST">
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="8"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
