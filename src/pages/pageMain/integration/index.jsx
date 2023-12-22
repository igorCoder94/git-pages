import './style.scss';
import integration from '../../../assets/images/main/integration/integration.png';
import {ReactComponent as IconScheme } from '../../../assets/images/main/integration/scheme.svg';
import modules from '../../../assets/icons/pageMain/integration/modules.svg';
import build from '../../../assets/icons/pageMain/integration/build.svg';
import table from '../../../assets/icons/pageMain/integration/table.svg';
import graphic from '../../../assets/icons/pageMain/integration/graphic.svg';
import video from '../../../assets/icons/pageMain/integration/video.svg';
import { useMediaQuery } from '@react-hook/media-query';


import Borders from '../../../shared/borders';

const listOne = [
    {
        id: 0,
        title: 'Внешние модули',
        text: 'Расширение функционала дополнительными внешними модулями и сервисами внешних систем',
        icon: modules,
    },
];

const listTwo = [
    {
        id: 0,
        title: 'Построение гибких Бизнес Процессов',
        icon: build,
    },
    {
        id: 1,
        title: 'Системы электронного документооборота (СЭД)',
        icon: table,
    },
    {
        id: 2,
        title: 'Business Process Management',
        icon: graphic,
    },
    {
        id: 3,
        title: 'CCTV Промышленная видеоаналитика, определение аварийных ситуаций',
        icon: video,
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
                    { listOne.map((item) => (<>
                        <div className='integration__el'>
                            <img className='integration__el-icon' src={item.icon} alt={item.title} />
                            <div className='integration__el-text'>
                                <div className='integration__el-title'>{item.title}</div>
                                <div className='integration__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </>) ) }
                </div>
                { !isMobile ? <>
                    <h3 className='integration__title'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='integration__block'>
                        { listTwo.map((item) => (<>
                            <div className='integration__el'>
                                <img className='integration__el-icon' src={item.icon} alt={item.title} />
                                <div className='integration__el-text'>
                                    <div className='integration__el-title'>{item.title}</div>
                                    <div className='integration__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </>) ) }
                    </div>
                </> : null }
            </div>
            { isMobile ? <>
                    <h3 className='integration__title-mobile'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='integration__block-mobile integration__block'>
                        { listTwo.map((item) => (<>
                            <div className='integration__el'>
                                <img className='integration__el-icon' src={item.icon} alt={item.title} />
                                <div className='integration__el-text'>
                                    <div className='integration__el-title'>{item.title}</div>
                                    <div className='integration__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </>) ) }
                    </div>
                </> : null }
            <div className='integration__right'>
                <IconScheme className='scada__scheme' />
            </div>
            <Borders />
        </div>
    </section>
}

export default Integration;