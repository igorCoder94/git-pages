import './style.scss';
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as IconLogoMobile } from '../../assets/icons/logo-mobile.svg';
import { ReactComponent as IconBurger } from '../../assets/icons/burger.svg';
import { useMediaQuery } from '@react-hook/media-query';
import { useLocation } from 'react-router-dom';


const Header = ({ toggleMenu }) => {
    const isMobile = useMediaQuery('(max-width: 800px)');
    const location = useLocation();

    function openMenu() {
        toggleMenu();
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
        <div className='header'>
            <div className='header__container'>
                {isMobile ?
                    <div className='header__burger'>
                        <IconBurger className='header__burger-icon' onClick={openMenu} />
                        <span className='header__border'></span>
                        <Link className='header__logo-container' to='/'><IconLogoMobile className='header__logo header__logo--mobile' /></Link>
                    </div>
                    :
                    null}
                {!isMobile ? <Link to='/'><IconLogo className='header__logo' /></Link> : null}
                {!isMobile ? <nav className='header-nav'>
                    <span className='header-nav__link'><Link onClick={() => scrollTo()} to='/'>Главная</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo()} to='/dispatching'>Диспетчеризация</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo()} to='/business'>ТОиР</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo()} to='/business'>Интеграция</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo()} to='/business'>Контроль</Link></span>
                    <span className='header-nav__link'><Link onClick={() => scrollTo('news')} to='/#news'>Новости</Link></span>
                </nav> : null}
                <Link to='https://go.unios.io/ng/login' className='header__signin'>
                    {!isMobile ? <span>Контакты</span> : null}
                </Link>
            </div>
        </div >
    )
}

export default Header;