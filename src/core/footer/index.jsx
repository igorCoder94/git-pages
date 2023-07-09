import './style.scss';
import { ReactComponent as IconLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/phone.svg';
import { ReactComponent as IconMail } from '../../assets/icons/mail.svg';
import { ReactComponent as IconArrow } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as IconYoutube } from '../../assets/icons/socials/youtube.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
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
                        </div>
                        <div className='footer__copyright'>© Developed by FTXCOM LLc</div>
                    </div>
                    <div className='footer__nav'>
                        <Link className='footer__link' to='/'><IconArrow className='footer__arrow' />Главная</Link>
                        <Link className='footer__link' to='/dispatching'><IconArrow className='footer__arrow' />Диспетчеризация</Link>
                        <Link className='footer__link' to='/business'><IconArrow className='footer__arrow' />Бизнес-процессы</Link>
                        <Link className='footer__link' to='https://go.unios.io/ng/login'><IconArrow className='footer__arrow' />Вход</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;