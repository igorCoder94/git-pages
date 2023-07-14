import './style.scss';
import desktop from '../../../assets/images/dispatching/desktop.png';

const descriptionList = [
    'Интеграция с различными SCADA и устройствами, протоколы OPC UA, KNX, BACNet, ModBus, МЭК',
    'AI Видеоаналитика. Комплексное определение технологических событий по телеметрии и видеонаблюдению',
    'AI прогноз. Предиктивная и статистическая аналитика о состоянии систем',
    'Умное оповещение. Прогноз и оповещение об аварийных и предаварийных ситуациях в различные каналы',
    'Панель мониторинга. Представление данных в едином, удобном диспетчерам виде',
    'Формирование единообразной отчетности',
];

const SolutionService = () => {
    return <section className='solutions-service__section'>
        <div className='solutions-service__container container'>
            <div className='solutions-service__content'>
                <h2 className='solutions-service__title'>Решения диспетчеризации для сервиса клиента</h2>
                <div className='solutions-service__description'>
                    <ul>
                        {descriptionList.map((el, index) => (<li key={index}>{el}</li>))}
                    </ul>
                </div>
            </div>
            <div className='solutions-service__img-container'>
                <img className='solutions-service__img' src={desktop} alt='desktop' />
            </div>
        </div>
    </section>
}

export default SolutionService;