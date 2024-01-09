import './style.scss';
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as IconLogoDark } from '../../assets/icons/logo-dark.svg';
import { ReactComponent as IconLogoMobile } from '../../assets/icons/logo-mobile.svg';
import { ReactComponent as IconLogoMobileBlack } from "../../assets/icons/logo-mobile-black.svg";
import { ReactComponent as IconBurger } from '../../assets/icons/burger.svg';
import { ReactComponent as IconConnect } from '../../assets/icons/connect-mobile.svg';
import { ReactComponent as IconConnectBlack } from '../../assets/icons/connect-mobile-black.svg';
import { ReactComponent as IconBurgerBlack} from '../../assets/icons/burger-black.svg';
import { useMediaQuery } from '@react-hook/media-query';
import { useLocation } from 'react-router-dom';
import Borders from '../../shared/borders';

const Header = ({ toggleMenu, togglePopup, isMenuOpen }) => {
    const isMobile = useMediaQuery('(max-width: 1142px)');
    const location = useLocation();

    function openMenu() {
        toggleMenu();
    }

    function openPopup() {
        togglePopup();
    }

    function chooseBackgroundClass() {
        switch (location.pathname) {
          case '/':
            return 'header-main';
          default:
            return 'header-light';
        }
      }

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
        <div className={`header ${chooseBackgroundClass()}`}>
            <div className={`header__container`}>
                {isMobile ?
                    <div className='header__burger'>
                        <Link className='header__logo-container' to='/'>
                            { chooseBackgroundClass() === 'header-main' ? <IconLogoMobile className={`header__logo header__logo--mobile 
                            ${isMenuOpen ? 'header__transform' : ''}`} /> :
                                <IconLogoMobileBlack className={`header__logo header__logo--mobile 
                                ${isMenuOpen ? 'header__transform' : ''}`} />
                            }
                        </Link>
                        { chooseBackgroundClass() === 'header-main' ? 
                        <div className='header__icons'>
                            <IconConnect className='header__burger-icon'onClick={openPopup} />
                            <IconBurger className='header__burger-icon' onClick={openMenu} />
                        </div>
                         : 
                         <div className='header__icons'>
                            <IconConnectBlack className='header__burger-icon'onClick={openPopup} />
                            <IconBurgerBlack className='header__burger-icon' onClick={openMenu} />
                        </div> }
                    </div>
                    :
                    null}
                {!isMobile ? <Link to='/'>
                        { location.pathname === '/' ? <IconLogo className='header__logo' /> : <IconLogoDark className='header__logo' />}
                    </Link> : null}
                {!isMobile ? <nav className='header-nav'>
                    <span className='header-nav__link'><Link onClick={() => scrollTo()} to='/'>Главная</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo('dispatching')} to='/#dispatching'>Диспетчеризация</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo('toir')} to='/#toir'>ТОиР</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo('integration')} to='/#integration'>Интеграция</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo('control')} to='/#control'>Контроль</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo('news')} to='/#news'>Новости</Link></span>
                </nav> : null}
                <div className='header__signin'>
                    {!isMobile ? <Link className='header-nav__link' onClick={() => scrollTo('footer')} to='/#footer'>Контакты</Link> : null}
                    {!isMobile ? <span className='header-nav__connect' onClick={openPopup}>Связаться с нами</span> : null}
                </div>
                { location.pathname !== '/' ? <Borders /> : null }
            </div>
        </div >
    )
}

export default Header;