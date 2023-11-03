import Borders from '../../../shared';
import blueDoc from '../../../assets/icons/pageMain/join/page-blue.svg';
import yellowDoc from '../../../assets/icons/pageMain/join/page-yellow.svg';
import './style.scss';

const Join = () => {
    return <section className='join__section'>
        <div className='join__container container'>
            <div className='join__title-container'>
                <h2 className='join__title'>Присоединиться</h2>
                <div className='join__description'>
                    Готовы начать?<br/>
                    Свяжитесь с нами или создайте учетную запись.
                    Получите доступ к полноценной системе мониторинга и диспетчеризации с простой оплатой по мере использования.<br/>
                    Или свяжитесь с нами, чтобы разработать индивидуальный пакет специально для вашего бизнеса.
                </div>
            </div>
            <div className='join__docs'>
                <div className='join__doc join__yellow'>
                    <img className='join__img' src={blueDoc} alt="" />
                    <div className='join__text'>
                        Вы можете для начала ознакомиться с нашей презентацией.
                    </div>
                    <a className='join__text join__link' href="">Скачать презентацию ></a>
                </div>
                <div className='join__doc join__yellow'>
                    <img className='join__img' src={yellowDoc} alt="" />
                    <div className='join__text'>
                        Начните строить свою интеграцию за считанные минуты. Подберите свой уникальный пакет специально для вашего бизнеса.
                    </div>
                    <a className='join__text join__link' href="">Узнать больше ></a>
                </div>
            </div>
            <Borders />
        </div>
        <div className='join__rectangle'></div>
    </section>
}

export default Join;