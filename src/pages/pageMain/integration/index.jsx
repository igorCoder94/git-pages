import './style.scss';
import integration from '../../../assets/images/main/integration/integration.png';
import scheme from '../../../assets/images/main/integration/scheme.png';
import modules from '../../../assets/icons/pageMain/integration/modules.svg';

import build from '../../../assets/icons/pageMain/integration/build.svg';
import table from '../../../assets/icons/pageMain/integration/table.svg';
import graphic from '../../../assets/icons/pageMain/integration/graphic.svg';
import video from '../../../assets/icons/pageMain/integration/video.svg';


import Borders from '../../../shared';

const listOne = [
    {
        id: 0,
        title: 'Панель мониторинга',
        text: 'Сбор и интерпретация информации с различных устройств и систем',
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
        title: 'Интеграция с системами электронного документооборота',
        icon: table,
    },
    {
        id: 2,
        title: 'Построение гибких Бизнес Процессов',
        icon: graphic,
    },
    {
        id: 3,
        title: 'Интеграция с системами электронного документооборота',
        icon: video,
    },
];

const Integration = () => {
    return <section className='integration__section'>
        <div className='integration__container container'>
            <div className='integration__left'>
                <h2 className='integration__title'>
                    <div>Unios</div>
                    <div>Интеграция</div>
                </h2>
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
            </div>
            <div className='integration__right'>
                <img src={scheme} alt="scheme" />
            </div>
            <Borders />
        </div>
    </section>
}

export default Integration;