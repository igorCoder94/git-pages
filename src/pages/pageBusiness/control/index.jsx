import './style.scss';
import control from '../../../assets/images/business/control.png';

const descriptionList = [
    'Мобильные рабочие места - основные рабочие места исполнителя',
    'Оперативная постановка работ Исполнителям онлайн с предоставлением документации и навигации до устройств',
    'Онлайн - контроль выполнения работ Исполнителем с фото и видеофиксацией действий',
    'Интерфейс оперативной проверки выполнения работ менеджерами Подрядчика и Заказчика',
    'Электронная отчетность о выполнении работ, интегрированная с системой документооборота',
]

const Control = () => {
    return <section className='control__section'>
        <div className='control__container container'>
            <div className='control__img-container'>
                <img className='control__img' src={control} alt="control" />
            </div>
            <div className='control__content'>
                <h2 className='control__title'>Контроль исполнения</h2>
                <div className='control__description'>
                    <ul>
                        {descriptionList.map((el, index) => (<li key={index}>{el}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
}

export default Control;