import './style.scss';
import { ReactComponent as IconLogo } from '../../assets/icons/footer/logo.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/phone.svg';
import { ReactComponent as IconMail } from '../../assets/icons/mail.svg';
import { ReactComponent as IconYoutube } from '../../assets/icons/socials/youtube.svg';
import { ReactComponent as IconInstagram } from '../../assets/icons/socials/instagram.svg';
import { ReactComponent as IconVK } from '../../assets/icons/socials/vk.svg';
import { ReactComponent as IconHabr } from '../../assets/icons/socials/habr.svg';
import { ReactComponent as IconTenchat } from '../../assets/icons/socials/tenchat.svg';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Borders from '../../shared';


const Footer = () => {
    const location = useLocation();

    function scrollTo(element) {
        if (location.pathname === '/') {
            if (element) {
                document.getElementById(element).scrollIntoView({
                    behavior: 'smooth',
                })
            } else {
                document.getElementById('App__container').scrollTo({
                    top: 0,
                });
            }
        }
    }

    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__inner'>
                    <div className='footer__info'>
                        <Link to='/'><IconLogo className='footer__icon' /></Link>
                        <div className='footer__phone'>
                            <IconPhone className='footer-icon__phone' /><span>+7 (911) 920-19-20</span>
                        </div>
                        <div className='footer__mail'>
                            <IconMail className='footer-icon__mail' /><span>hello@unios.io</span>
                        </div>
                        <div className='footer__socials'>
                            <IconYoutube className='footer__social' />
                            <IconVK className='footer__social' />
                            <IconInstagram className='footer__social' />
                            <IconTenchat className='footer__social' />
                            <IconHabr className='footer__social' />
                        </div>
                        <div className='footer__copyright'>© Developed by FTXCOM LLc</div>
                    </div>
                    <div className='footer__nav-container'>
                        <div className='footer__nav'>
                            <Link className='footer__link' onClick={() => scrollTo()} to='/'>Главная</Link>
                            <Link className='footer__link' to='/dispatching'>Диспетчеризация</Link>
                            <Link className='footer__link' to='/business'>ТОиР</Link>
                            <Link className='footer__link' onClick={() => scrollTo('news')} to='/#news'>Интеграция</Link>
                        </div>
                        <div className='footer__nav footer__nav-right'>
                            <Link className='footer__link' onClick={() => scrollTo()} to='/'>Контроль</Link>
                            <Link className='footer__link footer__link-news' to='/dispatching'>Новости</Link>
                            <Link className='footer__link footer__link-connect' to='/business'>Связаться с нами ></Link>
                        </div>
                    </div>
                    
                </div>
                <Borders />
            </div>
        </div>
    )
}

export default Footer;