import "./Contact.css";
import msg_icon from "../assets/msg-icon.png";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import white_arrow from '../assets/white-arrow.png'
import React from "react";



const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bf65a42b-f135-4a19-a243-31e6feb55c10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((response) => response.json());

    if (response.success) {
      console.log("success",response)
      setResult(response.message);
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };




  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={phone} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label>Write your msg here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">Submit now <img className="img" src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
