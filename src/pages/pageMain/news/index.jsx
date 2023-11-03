import Borders from '../../../shared';
import './style.scss';

const demoList = [
    'Единообразное отображение и анализ данных SCADA систем предприятия',
    'Гибкий автоматизированный бизнес - процесс техобслуживания и ремонта',
    'Оперативная постановка задач и контроль выполнения работ Исполнителями в реальном времени',
    'Непрерывный обмен документами и информацией с основными системами предприятия',
]

const News = () => {
    return <section className='news__section'>
        <div className='news__container container'>
        <h2 className='news__title'>Новости</h2>
            <div className='news__demo'>
                <div className='news__content'>
                    <h3 className='news__subtitle'>Внедрение в систему ГМЦ</h3>
                    <div className='news__description'>
                        <div className='news__text'>
                            Интеграционная платформа UNIOS предназначена для комплексного мониторинга и обслуживания различных автоматизированных систем и устройств предприятия. Платформа решает следующие задачи:
                        </div>
                        <ul>
                            {demoList.map((el, index) => (<li key={index}>{el}</li>))}
                        </ul>
                    </div>
                </div>
                <div className='news__video'>
                    <iframe width="100%" height="452" src="https://www.youtube.com/embed/LqDzd_6OAqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <Borders />
        </div>
    </section>
}

export default News;