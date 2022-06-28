import "./contact.scss";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import ContactIcon from "../../../assets/contact-icon.svg";

import { countries } from "../../../utils/form-utils";
import { services } from "../../../utils/form-utils";
import { pohoneNumbers } from "../../../utils/form-utils";
import SelectServices from "./Dropdown";

const Contact = () => {
  return (
    <section className="contact__container" id="contact">
      <div className="contact__content">
        <div className="contact__text">
          <div className="contact__illuContainer">
            <div className="contact__illu">
              <img src={ContactIcon} alt="contact-icon" />
            </div>

            <h4 className="contact__titleH4">
              Contact <span className="span__title">Us</span>
            </h4>
          </div>
          <h2 className="contact__titleH2">Our rendezvous begins here!</h2>
          <p className="contact__description">
            Broker ipsum dolor sit amet, consectetuer noted architect elit.
            Modern interior commodo ligula eget dolor.
          </p>
        </div>
        <div className="contact__images">
          <img
            src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650301425/tiny%20is%20the%20new%20big/tierra-mallorca-NpTbVOkkom8-unsplash_fcohsm.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650300934/tiny%20is%20the%20new%20big/aysegul-yahsi-9QRqI6RbHWU-unsplash_m3dhn6.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1650301404/tiny%20is%20the%20new%20big/jet-dela-cruz-Gf6puSx3h6Y-unsplash_nfndgh.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="form__container">
        <form className="form__content">
          <div className="input__container">
            <label htmlFor="firstName" />
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              className="input__input"
            />
            <label htmlFor="lastName" />
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              className="input__input"
            />
          </div>
          <div className="input__container">
            <SelectServices dataDropdownList={countries} />
            <SelectServices dataDropdownList={services} />
          </div>
          <label htmlFor="email" />
          <input
            type="text"
            id="email"
            placeholder="Your email"
            className="input__email"
          />
          <label htmlFor="subject" />
          <textarea id="subject" className="input__textarea" />
          <button type="submit" className="form__button">
            Send
          </button>
        </form>
        <div className="form__call">
          <button className="call__btn">
            <MdOutlineCall color="#08A1BA" size="1.8rem" />
            Call now
          </button>
          <div className="input__container">
            <SelectServices dataDropdownList={pohoneNumbers} />
          </div>
        </div>
      </div>
      <div className="contact__triangle2"></div>
    </section>
  );
};

export default Contact;
