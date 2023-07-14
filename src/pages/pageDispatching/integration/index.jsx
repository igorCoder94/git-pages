import './style.scss';
import integration from '../../../assets/images/dispatching/integration.png';

const descriptionList = [
    'Адаптивный модуль интеграции с различными системами предприятия(СЭД, BPM, BIP, CCTV)',
    'Business Process Management - Актуальное состояние оборудования предприятия',
    'Building Information Model 2D/3D планы расположения устройств на объекте',
    'CCTV Промышленная видео аналитика, определение аварийных ситуаций',
    'Микросервис API - расширение функционала дополнительными модулями и сервисами',
]

const Integration = () => {
    return <section className='integration__section'>
        <div className='integration__container container'>
            <div className='integration__img-container'>
                <img className='integration__img' src={integration} alt="integration" />
            </div>
            <div className='integration__content'>
                <h2 className='integration__title'>Адаптивная интеграция с системами предприятия</h2>
                <div className='integration__description'>
                    <ul>
                        {descriptionList.map((el, index) => (<li key={index}>{el}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
}

export default Integration;