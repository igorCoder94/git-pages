import './style.scss';
import control from '../../../assets/images/main/control/control.png';
import { ReactComponent as IconScheme} from '../../../assets/images/main/control/scheme.svg';
import map from '../../../assets/icons/pageMain/control/map.svg';
import pc from '../../../assets/icons/pageMain/control/pc.svg';
import form from '../../../assets/icons/pageMain/control/form.svg';
import Borders from '../../../shared/borders';

const listOne = [
    {
        id: 0,
        title: 'Панель мониторинга',
        text: 'Сбор и интерпретация информации с различных устройств и систем',
        icon: pc,
    },
    {
        id: 1,
        title: 'AI прогноз',
        text: 'Предиктивная и статистическая аналитика о состоянии систем',
        icon: map,
    },
    {
        id: 2,
        title: 'Умное оповещение',
        text: 'Прогноз и оповещение об аварийных ситуациях в различные каналы',
        icon: form,
    },
];

const Control = () => {
    return <section id='control' className='control__section'>
        <div className='control__container container'>
            <div className='control__left'>
                <h2 className='control__title'>
                    <div>Unios</div>
                    <div>Контроль исполнения</div>
                </h2>
                <img className='control__img' src={control} alt="control" />
                <div className='control__block'>
                    { listOne.map((item) => (<>
                        <div className='control__el'>
                            <img className='control__el-icon' src={item.icon} alt={item.title} />
                            <div className='control__el-text'>
                                <div className='control__el-title'>{item.title}</div>
                                <div className='control__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </>) ) }
                </div>
            </div>
            <div className='control__right'>
                <IconScheme className='scada__scheme' />
            </div>
            <Borders />
        </div>
    </section>
}

export default Control;