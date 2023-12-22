import './style.scss';
import scada from '../../../assets/images/main/scada/scada.png';
import hub from '../../../assets/icons/pageMain/scada/hub.svg';
import ai from '../../../assets/icons/pageMain/scada/ai.svg';
import smart from '../../../assets/icons/pageMain/scada/smart.svg';
import report from '../../../assets/icons/pageMain/scada/report.svg';
import settings from '../../../assets/icons/pageMain/scada/settings.svg';
import table from '../../../assets/icons/pageMain/scada/table.svg';
import video from '../../../assets/icons/pageMain/scada/video.svg';
import Borders from '../../../shared/borders';
import { ReactComponent as IconScheme } from '../../../assets/images/main/scada/111.svg';
import { useMediaQuery } from '@react-hook/media-query';

const listOne = [
    {
        id: 0,
        title: 'Диспетчеризация SCADA/IoT',
        text: 'Универсальный интегратор SCADA систем',
        icon: hub,
    },
    {
        id: 1,
        title: 'Интерактивные карты',
        text: '2D планы расположения устройств на объекте',
        icon: ai,
    },
    {
        id: 2,
        title: 'Интерпритация',
        text: 'Графический анализ данных',
        icon: report,
    },
    {
        id: 3,
        title: 'Мониторинг',
        text: 'Панель мониторинга и оповещений. Представление данных в едином виде',
        icon: smart,
    },
];

const listTwo = [
    {
        id: 0,
        title: 'AI прогноз',
        text: 'Предиктивная и статистическая аналитика о состоянии систем',
        icon: settings,
    },
    {
        id: 1,
        title: 'AI Видеоаналитика',
        text: 'Комплексное определение технологических событий по телеметрии и видеонаблюдению',
        icon: video,
    },
    {
        id: 3,
        title: 'Интерактивные карты (Building Information Model)',
        text: '3D Планы расположения устройств на объекте',
        icon: table,
    },
];

const Services = () => {
    const isMobile = useMediaQuery('(max-width: 1100px)');

    return <section id='dispatching' className='scada__section'>
        <div className='scada__container container'>
            {isMobile ? <h2 className='scada__title-mobile'>
                    <div>Unios</div>
                    <div>Диспетчеризация SCADA/IoT</div>
                </h2> : null }
            <div className='scada__left'>
                { !isMobile ?
                <h2 className='scada__title'>
                    <div>Unios</div>
                    <div>Диспетчеризация SCADA/IoT</div>
                </h2> : null }
                <img className='scada__img' src={scada} alt="scada" />
                <div className='scada__block'>
                    { listOne.map((item) => (<>
                        <div className='scada__el'>
                            <img className='scada__el-icon' src={item.icon} alt={item.title} />
                            <div className='scada__el-text'>
                                <div className='scada__el-title'>{item.title}</div>
                                <div className='scada__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </>) ) }
                </div>
                { !isMobile ? <>
                    <h3 className='scada__title'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='scada__block'>
                        { listTwo.map((item) => (<>
                            <div className='scada__el'>
                                <img className='scada__el-icon' src={item.icon} alt={item.title} />
                                <div className='scada__el-text'>
                                    <div className='scada__el-title'>{item.title}</div>
                                    <div className='scada__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </>) ) }
                    </div>
                </> : null }
            </div>
            { isMobile ? <>
                    <h3 className='scada__title-mobile'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='scada__block scada__block-mobile'>
                        { listTwo.map((item) => (<>
                            <div className='scada__el'>
                                <img className='scada__el-icon' src={item.icon} alt={item.title} />
                                <div className='scada__el-text'>
                                    <div className='scada__el-title'>{item.title}</div>
                                    <div className='scada__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </>) ) }
                    </div>
                </> : null }
            <div className='scada__right'>
                <IconScheme className='scada__scheme'/>
            </div>
            {/* <div className='scada__border-left'></div>
            <div className='scada__border-right'></div>
            <div className='scada__border-middle'></div> */}
            <Borders />
        </div>
    </section>
}

export default Services;