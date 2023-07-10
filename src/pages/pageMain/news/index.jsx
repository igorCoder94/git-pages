import './style.scss';
import newsUnios from '../../../assets/images/main/news-unios.png';
import newsVersion from '../../../assets/images/main/version.png';
import newsCase from '../../../assets/images/main/case.png';

const News = () => {
    return <section id='news' className='news__section'>
        <div className='news__container container'>
            <div className='news__header'>
                <h2 className='news__title'>Новости</h2>
                <div className='news__description'>Последние новости о компании и продуктах</div>
            </div>
            <div className='news__blocks'>
                <div className='news__block'>
                    <img className='news__img' src={newsUnios} alt="" />
                    <div className='news__content'>
                        <div className='news__text'>23 Декабря 2022 года</div>
                        <div className='news__subtitle'>До конца 2023 года переходим на версию 3.0</div>
                        <div className='news__text'>Команда FTXCom выпускает новую улучшенную версию платформы. </div>
                        <div className='news__text'>Выпуск планируется в середине четвертого квартала 2023 год</div>
                    </div>
                </div>
                <div className='news__block'>
                    <img className='news__img' src={newsVersion} alt="" />
                    <div className='news__content'>
                        <div className='news__text'>19 Декабря 2022 года</div>
                        <div className='news__subtitle'>Обновление ПО до версии Beta 2.2.0</div>
                        <div className='news__text'>Платформа Unios обновилась до версии Beta 2.2.0<br />Были внесены следующие изменения:</div>
                        <div className='news__text'>
                            <ul className='news__ul'>
                                <li>Заявки и работа сервиса</li>
                                <li>Повышена стабильность работы платформы</li>
                                <li>Система адаптирована для сбора данных с контроллеров Siemens SIMATIC</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='news__block'>
                    <img className='news__img' src={newsCase} alt="" />
                    <div className='news__content'>
                        <div className='news__text'>17 Декабря 2021 года</div>
                        <div className='news__subtitle'>Кейс Тех. Обслуживания и Ремонта</div>
                        <div className='news__text'>Для удобства пользования нашей платформой мы выделили отдельный кейс ТОиР, как отдельный инструментарий для работы с сервисным и плановым обслуживанием оборудования:</div>
                        <div className='news__text'>
                            <ul className='news__ul'>
                                <li>Контроль Исполнителей</li>
                                <li>Автоматическая загрузка регламентов ТОиР</li>
                                <li>Календарь ТОиР, и автоматизация контроля выполнения работ</li>
                                <li>Менеджер заявок, задач и отчетности в 1.С и SAP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </section >
}

export default News;