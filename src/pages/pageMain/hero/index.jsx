import './style.scss';
import unios from '../../../assets/images/main/UNIOS.svg';
import uniosTransparent from '../../../assets/images/main/UNIOS-transparent.svg';


const Hero = () => {
    return <section className='hero__section'>
        <div className='hero__container container'>
            <div className='hero__border-left'></div>
            <div className='hero__border-left-center'></div>
            <div className='hero__border-right-center'></div>
            <div className='hero__border-right'></div>
            <div className='hero__logo'>
                <img className='hero__img-transparent' src={uniosTransparent} alt="unios" />
                <img className='hero__img' src={unios} alt="unios" />
            </div>
            <div className='hero__subtitle'>Сервис автоматизации эксплуатации оборудования</div>
        </div>
        <div className='triangle'></div>
        <div className='triangle-dark'></div>
        <div className='background'>
        </div>
        <div className='triangle-shadow'></div>
    </section>
}

export default Hero;