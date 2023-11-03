import './style.scss';
import scada from '../../../assets/images/main/scada/scada.png';
import scheme from '../../../assets/images/main/scada/scheme.png';
import hub from '../../../assets/icons/pageMain/scada/hub.svg';
import ai from '../../../assets/icons/pageMain/scada/ai.svg';
import smart from '../../../assets/icons/pageMain/scada/smart.svg';
import report from '../../../assets/icons/pageMain/scada/report.svg';
import settings from '../../../assets/icons/pageMain/scada/settings.svg';
import table from '../../../assets/icons/pageMain/scada/table.svg';
import Borders from '../../../shared';

const listOne = [
    {
        id: 0,
        title: 'Панель мониторинга',
        text: 'Сбор и интерпретация информации с различных устройств и систем',
        icon: hub,
    },
    {
        id: 1,
        title: 'AI прогноз',
        text: 'Предиктивная и статистическая аналитика о состоянии систем',
        icon: ai,
    },
    {
        id: 2,
        title: 'Умное оповещение',
        text: 'Прогноз и оповещение об аварийных ситуациях в различные каналы',
        icon: smart,
    },
    {
        id: 3,
        title: 'Формирование единообразной отчетности',
        text: 'Приведение документов к единому стандарту',
        icon: report,
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
        icon: table,
    },
];

const Services = () => {
    return <section className='scada__section'>
        <div className='scada__container container'>
            <div className='scada__left'>
                <h2 className='scada__title'>
                    <div>Unios</div>
                    <div>Диспетчеризация SCADA/IoT</div>
                </h2>
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
            </div>
            <div className='scada__right'>
                <img src={scheme} alt="scheme" />
            </div>
            {/* <div className='scada__border-left'></div>
            <div className='scada__border-right'></div>
            <div className='scada__border-middle'></div> */}
            <Borders />
        </div>
    </section>
}

export default Services;