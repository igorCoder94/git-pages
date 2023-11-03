import './style.scss';
import toir from '../../../assets/images/main/toir/toir.png';
import scheme from '../../../assets/images/main/toir/scheme.png';
import form from '../../../assets/icons/pageMain/toir/form.svg';
import ai from '../../../assets/icons/pageMain/toir/ai.svg';
import map from '../../../assets/icons/pageMain/toir/map.svg';
import table from '../../../assets/icons/pageMain/toir/table.svg';
import settings from '../../../assets/icons/pageMain/toir/settings.svg';
import folder from '../../../assets/icons/pageMain/toir/folder.svg';
import Borders from '../../../shared';

const listOne = [
    {
        id: 0,
        title: 'Формирование подконтрольной среды',
        text: 'Индивидуальная настройка Объектов / Устройств / Пользователей',
        icon: form,
    },
    {
        id: 1,
        title: 'AI прогноз',
        text: 'Автоматическое формирование и ведение плановых работ',
        icon: ai,
    },
    {
        id: 2,
        title: 'Интерактивные карты',
        text: '2D/3D планы расположения устройств на объекте',
        icon: map,
    },
    {
        id: 3,
        title: 'Формирование единообразной отчетности',
        text: 'Приведение документов к единому стандарту',
        icon: folder,
    },
];

const listTwo = [
    {
        id: 0,
        title: 'Построение гибких Бизнес Процессов',
        icon: settings,
    },
    {
        id: 1,
        title: 'Интеграция с системами электронного документооборота',
        icon: table,
    },
];

const Toir = () => {
    return <section className='toir__section'>
        <div className='toir__container container'>
            <div className='toir__left'>
                <h2 className='toir__title'>
                    <div>Unios</div>
                    <div>Тех. Обслуживание и Ремонт</div>
                </h2>
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
            </div>
            <div className='toir__right'>
                <img src={scheme} alt="scheme" />
            </div>
            <Borders />
        </div>
    </section>
}

export default Toir;