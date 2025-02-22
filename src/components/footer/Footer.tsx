import "./footer.scss";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { dropdownLinks } from "../../utils/utils";
import DropdownMenu from "./DropdownMenu";
import scrollToTop from "../../utils/scrolltotp";
import { linkNav } from "../../utils/utils";

const Footer = () => {
  const newYear = new Date().getFullYear();

  return (
    <footer className="footer__container">
      <div className="footer__content">
        <nav className="footer__nav">
          <ul className="footer__ul">
            <li className="footer__li">
              <Link to="/" onClick={() => scrollToTop()}>
                Home
              </Link>
            </li>
            <DropdownMenu linksData={dropdownLinks} />
          </ul>
          <ul className="footer__ul">
            {linkNav.map((link) => {
              const { id, text, url } = link;
              return (
                <li className="footer__li" key={id}>
                  <Link to={url} onClick={() => scrollToTop()}>
                    {text}
                  </Link>
                </li>
              );
            })}
            <li className="footer__li">Terms of use</li>
          </ul>
        </nav>
        <div className="footer__newsletterSocial">
          <div className="newsletter">
            <h4 className="newsletter__H4">Subscribe to our newsletter</h4>
            <form className="newsletter__form">
              <label htmlFor="newsletter" />
              <input
                type="text"
                id="newsletter"
                placeholder="your_email@outlook.com"
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__button">
                <BiMailSend size="1.8rem" color="#fff" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__date">
        <AiOutlineCopyrightCircle />
        <p className="date__now">www.tinyhousing.com - {`${newYear}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
