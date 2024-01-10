import "./style.scss";
import { ReactComponent as IconLogo } from "../../assets/icons/footer/logo.svg";
import { ReactComponent as IconPhone } from "../../assets/icons/phone.svg";
import { ReactComponent as IconMail } from "../../assets/icons/mail.svg";
import { ReactComponent as IconYoutube } from "../../assets/icons/socials/youtube.svg";
import { ReactComponent as IconVK } from "../../assets/icons/socials/vk.svg";
import { ReactComponent as IconHabr } from "../../assets/icons/socials/habr.svg";
import { ReactComponent as IconTenchat } from "../../assets/icons/socials/tenchat.svg";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import Borders from "../../shared/borders";

const Footer = ({ togglePopup }) => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 800px)");

  function scrollTo(element) {
    if (location.pathname === "/") {
      if (element) {
        document.getElementById(element).scrollIntoView({
          behavior: "smooth",
        });
      } else {
        document.getElementById("App__container").scrollTo({
          top: 0,
        });
      }
    }
  }

  return (
    <div className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__inner">
          <div className="footer__info">
            {!isMobile ? (
              <Link to="/">
                <IconLogo className="footer__icon" />
              </Link>
            ) : null}
            <div className="footer__phone">
              <IconPhone className="footer-icon__phone" />
              <span>+7 (911) 920-19-20</span>
            </div>
            <div className="footer__mail">
              <IconMail className="footer-icon__mail" />
              <span>hello@unios.io</span>
            </div>
            <div className="footer__socials">
              <a
                href="https://www.youtube.com/@unios8721"
                target="_blank"
                rel="noreferrer"
              >
                <IconYoutube className="footer__social" />
              </a>
              <a href="https://vk.com/uniosio" target="_blank" rel="noreferrer">
                <IconVK className="footer__social" />
              </a>
              {/* <a href='https://instagram.com/unios_iot?igshid=NGVhN2U2NjQ0Yg==' target="_blank" rel="noreferrer"><IconInstagram className='footer__social' /></a> */}
              <a
                href="https://tenchat.ru/chats/group/44320e17-12d7-4110-b86e-6370fc4190a9"
                target="_blank"
                rel="noreferrer"
              >
                <IconTenchat className="footer__social" />
              </a>
              <a
                href="https://career.habr.com/companies/unios"
                target="_blank"
                rel="noreferrer"
              >
                <IconHabr className="footer__social" />
              </a>
            </div>
            <div className="footer__copyright">© Developed by FTXCOM LLc</div>
          </div>
          <div className="footer__nav-container">
            {isMobile ? (
              <Link to="/">
                <IconLogo className="footer__icon" />
              </Link>
            ) : null}
            <div className="footer__nav">
              <Link className="footer__link" onClick={() => scrollTo()} to="/">
                Главная
              </Link>
              <Link
                className="footer__link"
                onClick={() => scrollTo("scada")}
                to="/#scada"
              >
                Диспетчеризация
              </Link>
              <Link
                className="footer__link"
                onClick={() => scrollTo("toir")}
                to="/#toir"
              >
                ТОиР
              </Link>
              <Link
                className="footer__link"
                onClick={() => scrollTo("integration")}
                to="/#integration"
              >
                Интеграция
              </Link>
            </div>
            <div className="footer__nav footer__nav-right">
              <Link
                className="footer__link"
                onClick={() => scrollTo("control")}
                to="/#control"
              >
                Контроль
              </Link>
              <Link
                className="footer__link footer__link-news"
                onClick={() => scrollTo("news")}
                to="/#news"
              >
                Новости
              </Link>
            </div>
          </div>
        </div>
        <Borders />
      </div>
    </div>
  );
};

export default Footer;
