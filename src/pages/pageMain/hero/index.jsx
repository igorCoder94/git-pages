import './style.scss';
import eagleColored from '../../../assets/icons/pageMain/hero/eagle-colored.svg';
import gazprom from '../../../assets/icons/pageMain/hero/gazprom.svg';
import gazpromOil from '../../../assets/icons/pageMain/hero/gazprom-oil.svg'
import oneC from '../../../assets/icons/pageMain/hero/1c.svg'
import gov from '../../../assets/icons/pageMain/hero/gov.svg'
import { ReactComponent as IconGov } from '../../../assets/icons/pageMain/hero/gov.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import buildings from '../../../assets/images/main/hero/buildings.png';
import monitoring from '../../../assets/images/main/hero/monitoring.png';
import control from '../../../assets/images/main/hero/control.png';
import predict from '../../../assets/images/main/hero/predict.png';
import dimIcon from '../../../assets/icons/pageMain/scada/hub.svg';
import settingsIcon from '../../../assets/icons/pageMain/scada/settings.svg';
import toirIcon from '../../../assets/icons/pageMain/toir/ai.svg';
import mapIcon from '../../../assets/icons/pageMain/hero/map.svg';
import modulesIcon from '../../../assets/icons/pageMain/integration/modules.svg';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';


import Borders from '../../../shared/borders';

const Hero = () => {
    return <section className='hero__section'>
        <div className='hero__container container'>
                <Swiper
                    fadeEffect={{ crossFade: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    navigation
                    pagination={{
                        clickable: true,
                      }}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                      }}
                    effect='fade'  
                    speed='500'
                    scrollbar={{ draggable: true }}
                    modules={[EffectFade, Pagination, Autoplay]}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                        <SwiperSlide>
                            <div className='hero__top'>
                                <div className='hero__left'>
                                    <h1 className='hero__title'>Платформа для комплексного мониторинга SCADA-систем</h1>
                                    <div className='hero__description'>Быстрое принятие решений и упрощенный контроль исполнения за счет комплексного мониторинга<br/>и диспетчеризации производственных систем управления</div>
                                    <div className='hero__buttons'>
                                        <a className='hero__button hero__button-blue' href="/">Пробная версия {'>'}</a>
                                        <a className='hero__button' href="/Unios. Презентация 26.09.23.pdf" download>Презентация ></a>
                                    </div>
                                </div>            
                                <div className='hero__right'>
                                    <img className='hero__slide' src={control} alt='scada'/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='hero__top'>
                                <div className='hero__left'>
                                    <h1 className='hero__title'>Служба эксплуатации небоскреба</h1>
                                    <div className='hero__icons'>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={dimIcon} alt="ДиМ" /><span>ДиМ</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={toirIcon} alt="ТОиР" /><span>ТОиР</span>
                                        </div>
                                    </div>
                                    <div className='hero__description'>Диспетчеризация и мониторинг работы устройств.Контроль плановых и внештатных работ сотрудников службы эксплуатации и обслуживания фасада небоскреба. Единый электронный документооборот</div>
                                </div>            
                                <div className='hero__right'>
                                    <img className='hero__slide' src={buildings} alt='scada'/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='hero__top'>
                                <div className='hero__left'>
                                    <h1 className='hero__title'>Служба мониторинга ЧС Города</h1>
                                    <div className='hero__icons'>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={dimIcon} alt="ДиМ" /><span>ДиМ</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={toirIcon} alt="ТОиР" /><span>ТОиР</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={modulesIcon} alt="Интеграция" /><span>Интеграция</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={mapIcon} alt="BIM" /><span className='hero__bim'>BIM модели</span>
                                        </div>
                                    </div>
                                    <div className='hero__description'>Диспетчеризация и мониторинг работы устройств внутреннего периметра административных зданий. Интерактивные карты административных зданий с отображением камер и датчиков.Контроль плановых и внештатных работ.Подключенный модуль интеграции BIM моделей зданий.</div>
                                </div>            
                                <div className='hero__right'>
                                    <img className='hero__slide' src={monitoring} alt='scada'/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='hero__top'>
                                <div className='hero__left'>
                                    <h1 className='hero__title'>Обслуживание Управляющей компании ЖК</h1>
                                    <div className='hero__icons'>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={dimIcon} alt="ДиМ" /><span>ДиМ</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={toirIcon} alt="ТОиР" /><span>ТОиР</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={settingsIcon} alt="ТОиР" /><span>Построение гибких Бизнес Процессов</span>
                                        </div>
                                    </div>
                                    <div className='hero__description'>Диспетчеризация и мониторинг работы устройств жилых зданий, информирование жильцов, контроль работ обслуживающего персонала.</div>
                                </div>            
                                <div className='hero__right'>
                                    <img className='hero__slide' src={control} alt='scada'/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='hero__top'>
                                <div className='hero__left'>
                                    <h1 className='hero__title'>Предиктивный анализ на производстве</h1>
                                    <div className='hero__icons'>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={dimIcon} alt="ДиМ" /><span>ДиМ</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={toirIcon} alt="ТОиР" /><span>ТОиР</span>
                                        </div>
                                    </div>
                                    <div className='hero__description'>Диспетчеризация и мониторинг работы. Объединение нескольких SCADA-систем предприятия в едином сервисе для более точного анализа работы оборудования и выявления нарушений работы.Контроль плановых и внештатных работ сотрудников внутренней или внешней службы эксплуатации и обслуживания оборудования завода.</div>
                                </div>            
                                <div className='hero__right'>
                                    <img className='hero__slide' src={predict} alt='scada'/>
                                </div>
                            </div>
                        </SwiperSlide>
                </Swiper>

            {/* <div className='hero__top'>
                <div className='hero__left'>
                    <h1 className='hero__title'>Платформа для комплексного мониторинга SCADA-систем</h1>
                    <div className='hero__description'>Быстрое принятие решений и упрощенный контроль исполнения за счет комплексного мониторинга<br/>и диспетчеризации производственных систем управления</div>
                    <div className='hero__buttons'>
                        <div className='hero__button hero__button-blue'>Пробная версия {'>'}</div>
                        <div className='hero__button'>Презентация ></div>
                    </div>
                </div>            
                <div className='hero__right'>slider</div>
            </div> */}

            {/* <div className='hero__switcher'>
                <img src={dots} alt="" />
            </div> */}
            

            <div className='hero__partners'>
                <img src={gazprom} alt="" />
                <img src={gazpromOil} alt="" />
                <img src={oneC} alt="" />
                <IconGov />
            </div>
            <div className='hero__info'>
                <h3 className='hero__info-title'>Отечественная Wonderware System Platform</h3>
                <div className='hero__info-description'>Сервис UNIOS является отечественным решением диспетчеризации и мониторинга оборудования на промышленных объектах в России.</div>
                <div className='hero__info-description-bottom'>На данный момент UNIOS проходит регистрацию ЕРПОР для сертификации 
и занесения в Единый реестр Программного Обеспечения России.</div>
                <img className='hero__info-img' src={eagleColored} alt="" />
            </div> 
            {/* <Borders /> */}
        </div>
        <div className='background'></div>
        <div className='borders'>
            <Borders />
        </div>
    </section>
}

export default Hero;