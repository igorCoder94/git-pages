import unios from '../../../assets/images/main/UNIOS-mobile.svg';
import './style.scss';

const HeroMobile = () => {
    return <section className='hero-mobile__section'>
        <div className='hero-mobile__container container'>
            <div className='hero-mobile__img'>
                <img src={unios} alt='unios' />
            </div>
            <div className='hero-mobile__subtitle'>
                Сервис автоматизации эксплуатации оборудования
            </div>
        </div>
        <div className='background'></div>
        <div className='triangle-mobile'></div>
        <div className='triangle-dark-mobile'></div>
    </section>
}

export default HeroMobile;