import './style.scss';
import hub from '../../../assets/images/main/hub.png';
import ai from '../../../assets/images/main/ai.png';
import model from '../../../assets/images/main/model.png';
import api from '../../../assets/images/main/api.png';
import video from '../../../assets/images/main/video.png';
import business from '../../../assets/images/main/business.png';
import smart from '../../../assets/images/main/smart.png';
import monitoring from '../../../assets/images/main/monitoring.png';
import system from '../../../assets/images/main/system.png';
import report from '../../../assets/images/main/report.png';

const data = [
    {
        title: 'Единый концентратор данных',
        text: 'Сбор и анализ информации с различных устройств и систем',
        icon: hub,
    },
    {
        title: 'Системы электронного документооборота (СЭД)',
        text: 'Обмен документами о выполнении и обеспечении работ',
        icon: system,
    },
    {
        title: 'Микросервис API',
        text: 'Расширение функционала дополнительными модулями и сервисами',
        icon: api,
    },
    {
        title: 'AI прогноз',
        text: 'Предиктивная и статистическая аналитика о состоянии систем',
        icon: ai,
    },
    {
        title: 'CCTV (видеонаблюдение)',
        text: 'Промышленная видеоаналитика, определение аварийных ситуаций',
        icon: video,
    },
    {
        title: 'Формирование единообразной отчетности',
        text: '',
        icon: report,
    },
    {
        title: 'Умное оповещение',
        text: 'Прогноз и оповещение об аварийных ситуациях в различные каналы',
        icon: smart,
    },
    {
        title: 'Business Process Management',
        text: 'Актуальное состояние оборудования предприятия',
        icon: business,
    },
    {
        title: 'Панель мониторинга',
        text: 'Представление данных в едином, удобном диспетчерам виде',
        icon: monitoring,
    },
    {
        title: 'Building Information Model',
        text: '2D / 3D планы расположения устройств на объекте',
        icon: model,
    },
];


const demoList = [
    'Единообразное отображение и анализ данных SCADA систем предприятия',
    'Гибкий автоматизированный бизнес - процесс техобслуживания и ремонта',
    'Оперативная постановка задач и контроль выполнения работ Исполнителями в реальном времени',
    'Непрерывный обмен документами и информацией с основными системами предприятия',
]

const Block = ({ icon, title, text }) => {
    return <div className='advantages-block__container'>
        <div className='advantages-block__icon'>
            <img src={icon} alt={title} />
        </div>
        <div className='advantages-block__text'>
            <div className='advantages-block__title'>{title}</div>
            <div className='advantages-block__description'>{text}</div>
        </div>
    </div>
}

const Advantages = () => {
    return <section className='advantages__section'>
        <div className='advantages__container container'>
            <div className='advantages__header'>
                <h2 className='advantages__title'>Преимущества</h2>
                <div className='advantages__description'>Особенности платформы Unios</div>
            </div>
            <div className='advantages__demo'>
                <div className='advantages__content'>
                    <h2 className='advantages__title'>Демонстрация </h2>
                    <div className='advantages__description'>
                        <div className='advantages__text'>
                            Интеграционная платформа UNIOS предназначена для комплексного мониторинга и обслуживания различных автоматизированных систем и устройств предприятия.Платформа решает следующие задачи:
                        </div>
                        <ul>
                            {demoList.map((el, index) => (<li key={index}>{el}</li>))}
                        </ul>
                    </div>
                </div>
                <div className='advantages__video'>
                    <iframe width="100%" height="452" src="https://www.youtube.com/embed/LqDzd_6OAqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='advantages__blocks'>
                {data.map((item, index) => <Block key={index} icon={item.icon} title={item.title} text={item.text} />)}
            </div>
        </div>
    </section >
}

export default Advantages;