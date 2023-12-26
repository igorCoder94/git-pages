import './style.scss';
import control from '../../../assets/images/main/control/control.png';
import { ReactComponent as IconScheme} from '../../../assets/images/main/control/scheme.svg';
import map from '../../../assets/icons/pageMain/control/map.svg';
import pc from '../../../assets/icons/pageMain/control/pc.svg';
import form from '../../../assets/icons/pageMain/control/form.svg';
import Borders from '../../../shared/borders';
import { useMediaQuery } from '@react-hook/media-query';

const listOne = [
    {
        id: 0,
        title: 'Автоматизированные мобильные рабочие места исполнителей',
        icon: pc,
    },
    {
        id: 1,
        title: 'Модуль навигации на объекте',
        icon: map,
    },
    {
        id: 2,
        title: 'Автоматизированный контроль выполнения работ',
        icon: form,
    },
];

const Control = () => {
    const isMobile = useMediaQuery('(max-width: 1100px)');

    return <section id='control' className='control__section'>
        <div className='control__container container'>
            { isMobile ? <h2 className='control__title-mobile'>
                    <div>Unios</div>
                    <div>Контроль исполнения</div>
                </h2> : null }
            <div className='control__left'>
                { !isMobile ? <h2 className='control__title'>
                    <div>Unios</div>
                    <div>Контроль исполнения</div>
                </h2> : null }
                <img className='control__img' src={control} alt="control" />
                <div className='control__block'>
                    { listOne.map((item) => (<div key={item.id}>
                        <div className='control__el'>
                            <img className='control__el-icon' src={item.icon} alt={item.title} />
                            <div className='control__el-text'>
                                <div className='control__el-title'>{item.title}</div>
                                <div className='control__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </div>) ) }
                </div>
            </div>
            <div className='control__right'>
                <IconScheme className='control__scheme' />
            </div>
            <Borders />
        </div>
    </section>
}

export default Control;