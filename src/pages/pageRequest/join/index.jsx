import Borders from '../../../shared/borders';
import blueDoc from '../../../assets/icons/pageMain/join/page-blue.svg';
import yellowDoc from '../../../assets/icons/pageMain/join/page-yellow.svg';
import './style.scss';

const Join = () => {
    return <section className='request-join__section'>
        <div className='request-join__container container'>
            <div className='request-join__title-container'>
                <h2 className='request-join__title'>Присоединиться</h2>
                <div className='request-join__description'>
                    Готовы начать?<br/>
                    Свяжитесь с нами или создайте учетную запись.
                    Получите доступ к полноценной системе мониторинга и диспетчеризации с простой оплатой по мере использования.<br/>
                    Или свяжитесь с нами, чтобы разработать индивидуальный пакет специально для вашего бизнеса.
                </div>
            </div>
            <div className='request-join__docs'>
                <div className='request-join__doc'>
                    <img className='request-join__img' src={blueDoc} alt="" />
                    <div className='request-join__text'>
                        Вы можете для начала ознакомиться с нашей презентацией.
                    </div>
                    <a className='join__text join__link' href="/Unios. Презентация 26.09.23.pdf" download>Скачать презентацию ></a>
                </div>
                <div className='request-join__doc request-join__yellow'>
                    <img className='request-join__img' src={yellowDoc} alt="" />
                    <div className='request-join__text'>
                        Начните строить свою интеграцию за считанные минуты. Подберите свой уникальный пакет специально для вашего бизнеса.
                    </div>
                    <a className='request-join__text request-join__link' href="">Узнать больше ></a>
                </div>
            </div>
            <Borders />
        </div>
        <div className='request-join__rectangle'></div>
    </section>
}

export default Join;