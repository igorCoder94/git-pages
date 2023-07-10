import React, { useRef } from "react";
import { useOnClickOutside } from "../../../hooks/hooks";
import './style.scss';
import { Link } from "react-router-dom";
import { ReactComponent as IconClose } from "../../../assets/icons/close.svg";
import { ReactComponent as Icon } from "../../../assets/icons/logo-mobile-black.svg";
import { ReactComponent as IconArrow } from "../../../assets/icons/arrow-right-black.svg";
import { useLocation } from "react-router-dom";

// import { useOnClickOutside } from "../../hooks";

const Menu = ({ open, toggleMenu }) => {
    const node = useRef(null);
    const toCloseMenu = true;
    const location = useLocation();

    useOnClickOutside(node, () => toggleMenu(toCloseMenu));

    function scrollTo(element) {
        if (location.pathname === '/') {
            if (element) {
                document.getElementById(element).scrollIntoView({
                    behavior: 'smooth',
                });
                location.hash = '';
            } else {
                document.getElementById('App__container').scrollTo({
                    top: 0,
                });
            }
        }
    }

    const close = (element) => {
        toggleMenu();
        scrollTo(element);
    }

    return (
        <div ref={node}>
            <div className={`menu__container ${open ? 'menu__container--opened' : ''}`}>
                <div className='menu__header'>
                    <IconClose className='menu__close' onClick={() => close()} />
                    <span className='menu__border'></span>
                    <Link className='menu__icon' to='/'><Icon /></Link>
                </div>
                <div className="menu__links">
                    <Link className='menu__link' to='/' onClick={() => close()}>Главная <IconArrow /></Link>
                    <Link className='menu__link' to='/dispatching' onClick={() => close()}>Диспетчеризация <IconArrow /></Link>
                    <Link className='menu__link' to='/business' onClick={() => close()}>Бизнесс-процессы <IconArrow /></Link>
                    <Link className='menu__link' to='/#news' onClick={() => close('news')}>Новости <IconArrow /></Link>
                </div>
            </div>
        </div >
    );
};

export default Menu;