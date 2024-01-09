import './style.scss';
import newsUnios from '../../../assets/images/main/news-unios.png';
import newsVersion from '../../../assets/images/main/version.png';
import newsCase from '../../../assets/images/main/case.png';
import Borders from '../../../shared/borders/index';

const newsData = [
    {
        date: '23 Декабря 2022 года',
        title: 'До конца 2023 года переходим на версию 3.0',
        content: [
            {
                text: ['Команда FTXCom выпускает новую улучшенную версию платформы.'],
                isList: false,
            },
            {
                text: ['Выпуск планируется в середине четвертого квартала 2023 год'],
                isList: false,
            }
        ],
    },
    {
        date: '19 Декабря 2022 года',
        title: 'Обновление ПО до версии Beta 2.2.0',
        content: [{
            text: ['Команда FTXCom выпускает новую улучшенную версию платформы.'],
            isList: false,
        },
        {
            text: ['Выпуск планируется в середине четвертого квартала 2023 год'],
            isList: false,
        }
    ],
    },
    {
        date: '23 Декабря 2022 года',
        title: 'До конца 2023 года переходим на версию 3.0',
        content: [{
            text: ['Команда FTXCom выпускает новую улучшенную версию платформы.'],
            isList: false,
        },
        {
            text: ['Выпуск планируется в середине четвертого квартала 2023 год'],
            isList: false,
        }
    ],
    },
];

const NewsCard = () => {
    return (
    <div className='news-cards__block'>
        <img className='news-cards__img' src={newsUnios} alt="" />
        <div className='news-cards__content'>
            <div className='news-cards__text'>23 Декабря 2022 года</div>
            <div className='news-cards__subtitle'>До конца 2023 года переходим на версию 3.0</div>
            <div className='news-cards__text'>Команда FTXCom выпускает новую улучшенную версию платформы. </div>
            <div className='news-cards__text'>Выпуск планируется в середине четвертого квартала 2023 год</div>
            {/* <div className='news-cards__link'>Подробнее ></div> */}
        </div>
        <div className='news-cards__bottom-white'></div>
</div>)
}

const NewsCards = () => {
    return <section className='news-cards__section'>
        <div className='news-cards__container container'>
            <div className='news-cards__blocks'>
                <div className='news-cards__block'>
                    <img className='news-cards__img' src={newsUnios} alt="" />
                    <div className='news-cards__content'>
                        <div className='news-cards__text'>23 Декабря 2022 года</div>
                        <div className='news-cards__subtitle'>До конца 2023 года переходим на версию 3.0</div>
                        <div className='news-cards__text'>Команда FTXCom выпускает новую улучшенную версию платформы.</div>
                        <div className='news-cards__text'>Выпуск планируется в середине четвертого квартала 2023 год</div>
                        {/* <div className='news-cards__link'>Подробнее ></div> */}
                    </div>
                    <div className='news-cards__bottom-white'></div>
                </div>
                <div className='news-cards__block'>
                    <img className='news-cards__img' src={newsVersion} alt="" />
                    <div className='news-cards__content'>
                        <div className='news-cards__text'>19 Декабря 2022 года</div>
                        <div className='news-cards__subtitle'>Обновление ПО до версии Beta 2.2.0</div>
                        <div className='news-cards__text'>Платформа Unios обновилась до версии Beta 2.2.0<br />Были внесены следующие изменения:</div>
                        <div className='news-cards__text'>
                            <ul className='news-cards__ul'>
                                <li>Заявки и работа сервиса</li>
                                <li>Повышена стабильность работы платформы</li>
                                <li>Система адаптирована для сбора данных с контроллеров Siemens SIMATIC</li>
                            </ul>
                        </div>
                        {/* <div className='news-cards__link'>Подробнее ></div> */}
                        <div className='news-cards__bottom-white'></div>
                    </div>
                </div>
                <div className='news-cards__block'>
                    <img className='news-cards__img' src={newsCase} alt="" />
                    <div className='news-cards__content'>
                        <div className='news-cards__text'>17 Декабря 2021 года</div>
                        <div className='news-cards__subtitle'>Кейс Тех. Обслуживания и Ремонта</div>
                        <div className='news-cards__text'>Для удобства пользования нашей платформой мы выделили отдельный кейс ТОиР, как отдельный инструментарий для работы с сервисным и плановым обслуживанием оборудования:</div>
                        <div className='news-cards__text'>
                            <ul className='news-cards__ul'>
                                <li>Контроль Исполнителей</li>
                                <li>Автоматическая загрузка регламентов ТОиР</li>
                                <li>Календарь ТОиР, и автоматизация контроля выполнения работ</li>
                                <li>Менеджер заявок, задач и отчетности в 1.С и SAP</li>
                            </ul>
                        </div>
                        {/* <div className='news-cards__link'>Подробнее ></div> */}
                        <div className='news-cards__bottom-white'></div>
                    </div>
                </div>
            </div>
            {/* <div className='news-cards__button'>Загрузить ещё</div> */}
            <Borders />
        </div>
    </section >
}

export default NewsCards;