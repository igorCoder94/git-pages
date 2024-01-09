import './style.scss';
import integration from '../../../assets/images/main/integration/integration.png';
import {ReactComponent as IconScheme } from '../../../assets/images/main/integration/scheme.svg';
import {ReactComponent as IconSchemeMobile } from '../../../assets/images/main/integration/scheme-mobile.svg';
import modules from '../../../assets/icons/pageMain/integration/modules.svg';
import build from '../../../assets/icons/pageMain/integration/build.svg';
import table from '../../../assets/icons/pageMain/integration/table.svg';
import settings from '../../../assets/icons/pageMain/integration/settings.svg';
import analytics from '../../../assets/icons/pageMain/integration/analytics.svg';
import video from '../../../assets/icons/pageMain/integration/video.svg';
import { useMediaQuery } from '@react-hook/media-query';


import Borders from '../../../shared/borders';

const listOne = [
    {
        id: 0,
        title: 'Подключаемые внешние модули ',
        text: 'Расширение функционала дополнительными модулями и сервисами внешних систем',
        icon: modules,
    },
];

const listTwo = [
    {
        id: 0,
        title: 'Модуль интеграции 3D BIM моделей',
        icon: build,
    },
    {
        id: 1,
        title: 'Построение гибких Бизнес Процессов BPM',
        icon: settings,
    },
    {
        id: 2,
        title: 'Модуль статистической аналитики. Прогнозирование событий',
        icon: analytics,
    },
    {
        id: 3,
        title: 'Промышленная видеоаналитика CCTV',
        icon: video,
    },
    {
        id: 4,
        title: 'Системы электронного документооборота СЭД',
        icon: table,
    },
    {
        id: 5,
        title: 'Интеграция с системами электронного документооборота 1:С',
        icon: table,
    },
];

const Integration = () => {
    const isMobile = useMediaQuery('(max-width: 1100px)');

    return <section id='integration' className='integration__section'>
        <div className='integration__container container'>
            { isMobile ? <h2 className='integration__title-mobile'>
                    <div>Unios</div>
                    <div>Интеграция</div>
                </h2> : null }
            <div className='integration__left'>
                { !isMobile ? <h2 className='integration__title'>
                    <div>Unios</div>
                    <div>Интеграция</div>
                </h2> : null }
                <img className='integration__img' src={integration} alt="integration" />
                <div className='integration__block'>
                    { listOne.map((item) => (<div key={item.id}>
                        <div className='integration__el'>
                            <img className='integration__el-icon' src={item.icon} alt={item.title} />
                            <div className='integration__el-text'>
                                <div className='integration__el-title'>{item.title}</div>
                                <div className='integration__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </div>) ) }
                </div>
                { !isMobile ? <>
                    <h3 className='integration__title'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='integration__block'>
                        { listTwo.map((item) => (<div key={item.id}>
                            <div className='integration__el'>
                                <img className='integration__el-icon' src={item.icon} alt={item.title} />
                                <div className='integration__el-text'>
                                    <div className='integration__el-title'>{item.title}</div>
                                    <div className='integration__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </div>) ) }
                    </div>
                </> : null }
            </div>
            { isMobile ? <>
                    <h3 className='integration__title-mobile'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='integration__block-mobile integration__block'>
                        { listTwo.map((item) => (<div key={item.id}>
                            <div className='integration__el' key={item.id}>
                                <img className='integration__el-icon' src={item.icon} alt={item.title} />
                                <div className='integration__el-text'>
                                    <div className='integration__el-title'>{item.title}</div>
                                    <div className='integration__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </div>) ) }
                    </div>
                </> : null }
            <div className='integration__right'>
                <IconSchemeMobile className='integration__scheme' />
                <IconSchemeMobile className='integration__scheme-mobile'/>
            </div>
            <Borders />
        </div>
    </section>
}

export default Integration;