import './style.scss';
import automation from '../../../assets/images/business/automation.png';

const descriptionList = [
    'Гибкая настройка бизнес - процессов',
    'Системы электронного документооборота (СЭД)',
    'Автоматическое формирование и поручение плановых работ',
    'Интеграция с системами электронного документооборота',
    'Индивидуальные настройки каждого Исполнителя',
    'Веб - интерфейс для контроля за ходом работ',
    'Формирование отчетности о работах',
];

const SolutionService = () => {
    return <section className='solutions-automation__section'>
        <div className='solutions-automation__container container'>
            <div className='solutions-automation__content'>
                <h2 className='solutions-automation__title'>Решения по автоматизации технического обслуживания</h2>
                <div className='solutions-automation__description'>
                    <ul>
                        {descriptionList.map((el, index) => (<li key={index}>{el}</li>))}
                    </ul>
                </div>
            </div>
            <div className='solutions-automation__img-container'>
                <img className='solutions-automation__img' src={automation} alt='desktop' />
            </div>
        </div>
    </section>
}

export default SolutionService;