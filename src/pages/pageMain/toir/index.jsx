import './style.scss';
import toir from '../../../assets/images/main/toir/toir.png';
import { ReactComponent as IconScheme } from '../../../assets/images/main/toir/scheme.svg';
import form from '../../../assets/icons/pageMain/toir/form.svg';
import ai from '../../../assets/icons/pageMain/toir/ai.svg';
import map from '../../../assets/icons/pageMain/toir/map.svg';
import table from '../../../assets/icons/pageMain/toir/table.svg';
import d3 from '../../../assets/icons/pageMain/toir/3d.svg';
import settings from '../../../assets/icons/pageMain/toir/settings.svg';
import folder from '../../../assets/icons/pageMain/toir/folder.svg';
import Borders from '../../../shared/borders';
import { useMediaQuery } from '@react-hook/media-query';

const listOne = [
    {
        id: 0,
        title: 'Формирование подконтрольной среды',
        text: 'Индивидуальная настройка Объектов / Устройств / Пользователей',
        icon: form,
    },
    {
        id: 1,
        title: 'Менеджер работ',
        text: 'Автоматическое формирование и ведение плановых работ',
        icon: ai,
    },
    {
        id: 2,
        title: 'Интерактивные карты',
        text: '2D планы расположения устройств на объекте',
        icon: map,
    },
    {
        id: 3,
        title: 'Формирование электронной отчетности',
        text: 'Приведение документов к единому стандарту',
        icon: folder,
    },
];

const listTwo = [
    {
        id: 0,
        title: 'Менеджер бизнес-процессов',
        icon: settings,
    },
    {
        id: 1,
        title: 'Интеграция с системами электронного документооборота (1:С)',
        icon: table,
    },
    {
        id: 2,
        title: 'Интерактивные карты (Building Information Model)',
        text: '3D Планы расположения устройств на объекте',
        icon: d3,
    },
];

const Toir = () => {
    const isMobile = useMediaQuery('(max-width: 1100px)');

    return <section id='toir' className='toir__section'>
        <div className='toir__container container'>
            { isMobile ? <h2 className='toir__title-mobile'>
                    <div>Unios</div>
                    <div>Тех. Обслуживание и Ремонт</div>
                </h2> : null }
            <div className='toir__left'>
                { !isMobile ? <h2 className='toir__title'>
                    <div>Unios</div>
                    <div>Тех. Обслуживание и Ремонт</div>
                </h2> : null }
                <img className='scada__img' src={toir} alt="toir" />
                <div className='toir__block'>
                    { listOne.map((item) => (<>
                        <div className='toir__el'>
                            <img className='toir__el-icon' src={item.icon} alt={item.title} />
                            <div className='toir__el-text'>
                                <div className='toir__el-title'>{item.title}</div>
                                <div className='toir__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </>) ) }
                </div>
                { !isMobile ? <>
                    <h3 className='toir__title'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='toir__block'>
                        { listTwo.map((item) => (<>
                            <div className='toir__el'>
                                <img className='toir__el-icon' src={item.icon} alt={item.title} />
                                <div className='toir__el-text'>
                                    <div className='toir__el-title'>{item.title}</div>
                                    <div className='toir__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </>) ) }
                    </div>
                </> : null }
            </div>
            { isMobile ? <>
                    <h3 className='toir__title-mobile'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='toir__block toir__block-mobile'>
                        { listTwo.map((item) => (<>
                            <div className='toir__el'>
                                <img className='toir__el-icon' src={item.icon} alt={item.title} />
                                <div className='toir__el-text'>
                                    <div className='toir__el-title'>{item.title}</div>
                                    <div className='toir__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </>) ) }
                    </div>
                </> : null }
            <div className='toir__right'>
                <IconScheme className='scada__scheme' />
            </div>
            <Borders />
        </div>
    </section>
}

export default Toir;