import './style.scss';
import toir from '../../../assets/images/main/toir/toir.png';
import { ReactComponent as IconScheme } from '../../../assets/images/main/toir/scheme.svg';
import { ReactComponent as IconSchemeMobile } from '../../../assets/images/main/toir/scheme-mobile.svg';
import form from '../../../assets/icons/pageMain/toir/form.svg';
import ai from '../../../assets/icons/pageMain/toir/ai.svg';
import map from '../../../assets/icons/pageMain/toir/map.svg';
import folder from '../../../assets/icons/pageMain/toir/folder.svg';
import Borders from '../../../shared/borders';
import { useMediaQuery } from '@react-hook/media-query';

const listOne = [
    {
        id: 0,
        title: 'Менеджер бизнес-процессов',
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
                    { listOne.map((item) => (<div key={item.id}>
                        <div className='toir__el'>
                            <img className='toir__el-icon' src={item.icon} alt={item.title} />
                            <div className='toir__el-text'>
                                <div className='toir__el-title'>{item.title}</div>
                                <div className='toir__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </div>) ) }
                </div>
                { !isMobile && listTwo.length > 0 ? <>
                    <h3 className='toir__title'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='toir__block'>
                        { listTwo.map((item) => (<div key={item.id}>
                            <div className='toir__el'>
                                <img className='toir__el-icon' src={item.icon} alt={item.title} />
                                <div className='toir__el-text'>
                                    <div className='toir__el-title'>{item.title}</div>
                                    <div className='toir__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </div>) ) }
                    </div>
                </> : null }
            </div>
            { isMobile && listTwo.length > 0 ? <>
                    <h3 className='toir__title-mobile'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='toir__block toir__block-mobile'>
                        { listTwo.map((item) => (<div key={item.id}>
                            <div className='toir__el'>
                                <img className='toir__el-icon' src={item.icon} alt={item.title} />
                                <div className='toir__el-text'>
                                    <div className='toir__el-title'>{item.title}</div>
                                    <div className='toir__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </div>) ) }
                    </div>
                </> : null }
            <div className='toir__right'>
                <IconScheme className='toir__scheme' />
                <IconSchemeMobile className='toir__scheme-mobile' />
            </div>
            <Borders />
        </div>
    </section>
}

export default Toir;