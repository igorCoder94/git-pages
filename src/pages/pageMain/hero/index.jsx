import './style.scss';
import eagleColored from '../../../assets/icons/pageMain/hero/eagle-colored.svg';
import gazprom from '../../../assets/icons/pageMain/hero/gazprom.svg';
import gov from '../../../assets/icons/pageMain/hero/gov.png';
import oneC from '../../../assets/icons/pageMain/hero/1c.png';
import { ReactComponent as OneC } from '../../../assets/icons/pageMain/hero/oneC.svg';
import { ReactComponent as Gazprom } from '../../../assets/icons/pageMain/hero/gazprom.svg';
import { ReactComponent as GazpromOil } from '../../../assets/icons/pageMain/hero/gazprom-oil.svg';
import { ReactComponent as IconGov } from '../../../assets/icons/pageMain/hero/gov.svg';
import { ReactComponent as IconEagleMobile } from '../../../assets/icons/pageMain/hero/eagle-mobile.svg';
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
import { useMediaQuery } from '@react-hook/media-query';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';
import BordersHero from '../../../shared/borders-hero';

const Hero = () => {
    const isTablet = useMediaQuery('(max-width: 1100px)');
    const isMobile = useMediaQuery('(max-width: 800px)');

    return <section className='hero__section'>
        <div className='hero__container container'>
                <Swiper
                    fadeEffect={{ crossFade: true }}
                    spaceBetween={50}
                    slidesPerView={1}
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
                >
                        <SwiperSlide>
                            <div className='hero__top'>
                                <div className='hero__left'>
                                    <h1 className='hero__title'><span className='hero__know'>Знайте<br/>свои<br/></span><span className='hero__scada'>SCADA</span></h1>
                                    <div className='hero__description'>Быстрое принятие решений и упрощенный контроль исполнения за счет комплексного мониторинга и диспетчеризации производственных систем управления.</div>
                                    <div className='hero__buttons'>
                                        <a className='hero__button hero__button-blue' href="/">Пробная версия {'>'}</a>
                                        <a className='hero__button' href="/Unios. Презентация 26.09.23.pdf" download>Презентация ></a>
                                    </div>
                                </div>            
                                <div className='hero__right'>
                                    { !isMobile ? <img className='hero__slide' src={control} alt='scada'/> : null }
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
                                    <div className='hero__description'>Диспетчеризация и мониторинг работы устройств. Контроль плановых и внештатных работ сотрудников службы эксплуатации и обслуживания фасада. Единый электронный документооборот.</div>
                                    <div className='hero__buttons'>
                                        <a className='hero__button hero__button-blue' href="/">Пробная версия {'>'}</a>
                                        <a className='hero__button' href="/Unios. Презентация 26.09.23.pdf" download>Презентация ></a>
                                    </div>
                                </div>            
                                <div className='hero__right'>
                                    { !isMobile ? <img className='hero__slide' src={buildings} alt='scada'/> : null }
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
                                    <div className='hero__description'>Диспетчеризация работы устройств административных зданий. Интерактивные карты с отображением камер и датчиков. Подключенный модуль интеграции BIM моделей зданий.</div>
                                    <div className='hero__buttons'>
                                        <a className='hero__button hero__button-blue' href="/">Пробная версия {'>'}</a>
                                        <a className='hero__button' href="/Unios. Презентация 26.09.23.pdf" download>Презентация ></a>
                                    </div>
                                </div>            
                                <div className='hero__right'>
                                    { !isMobile ? <img className='hero__slide' src={monitoring} alt='scada'/> : null }
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='hero__top'>
                                <div className='hero__left'>
                                    <h1 className='hero__title'>Сервис Управляющей компании ЖК</h1>
                                    <div className='hero__icons'>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={dimIcon} alt="ДиМ" /><span>ДиМ</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={toirIcon} alt="ТОиР" /><span>ТОиР</span>
                                        </div>
                                        <div className='hero__icons-inner'>
                                            <img className='hero__icon' src={settingsIcon} alt="ТОиР" /><span>Гибкие Бизнес Процессы</span>
                                        </div>
                                    </div>
                                    <div className='hero__description'>Диспетчеризация и мониторинг работы устройств жилых зданий, информирование жильцов, контроль работ обслуживающего персонала.</div>
                                    <div className='hero__buttons'>
                                        <a className='hero__button hero__button-blue' href="/">Пробная версия {'>'}</a>
                                        <a className='hero__button' href="/Unios. Презентация 26.09.23.pdf" download>Презентация ></a>
                                    </div>
                                </div>            
                                <div className='hero__right'>
                                    { !isMobile ? <img className='hero__slide' src={control} alt='scada'/> : null }
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
                                    <div className='hero__description'>Объединение нескольких SCADA-систем предприятия в едином сервисе для более точного анализа работы оборудования. Контроль работ внутреннего или внешнего сервиса.</div>
                                    <div className='hero__buttons'>
                                        <a className='hero__button hero__button-blue' href="/">Пробная версия {'>'}</a>
                                        <a className='hero__button' href="/Unios. Презентация 26.09.23.pdf" download>Презентация ></a>
                                    </div>
                                </div>            
                                <div className='hero__right'>
                                    { !isMobile ? <img className='hero__slide' src={predict} alt='scada'/> : null }
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
            

            { !isMobile ? 
            <div className='hero__partners'>
                 <div className='hero__partners-img'>
                    <Gazprom />
                 </div>
                 <div className='hero__partners-img'>
                    <GazpromOil />                
                 </div>
                 <div className='hero__partners-img'>
                    <img style={{ height: '100%' }} src={oneC} alt='' />
                 </div>   
                 <div className='hero__partners-img'>
                    <img src={gov} alt='' />
                 </div> 
            </div> : 
            <div className='hero__partners-mobile'>
                <div className='hero__partners-line'>
                    <Gazprom className='hero__partners-img' />
                    <GazpromOil className='hero__partners-img' />
                </div>
                <div className='hero__partners-line'>
                    <div className='hero__partners-img'>
                        <img style={{ width: '100%' }} src={oneC} alt='' />
                    </div>
                    <div className='hero__partners-img'>
                        <img style={{ width: '100%' }} src={gov} alt='' />
                    </div>
                </div>
            </div>
            }

            { !isTablet ? 
            <div className='hero__info'>
                <h3 className='hero__info-title'>Отечественная Wonderware System Platform</h3>
                <div className='hero__info-description'>Сервис UNIOS является отечественным решением диспетчеризации и мониторинга оборудования на промышленных объектах в России.</div>
                <div className='hero__info-description-bottom'>На данный момент UNIOS проходит регистрацию ЕРПОР для сертификации 
и занесения в Единый реестр Программного Обеспечения России.</div>
                <img className='hero__info-img' src={eagleColored} alt="" />
            </div> : 
            <div className='hero__info-mobile'>
                <IconEagleMobile className='hero__eagle-mobile'/>
                <h3 className='hero__info-title-mobile'>Отечественная<br/>Wonderware System Platform</h3>
                <div className='hero__info-descripton-mobile'>
                    Сервис UNIOS является отечественным решением диспетчеризации и мониторинга оборудования на промышленных объектах в России.
                </div>
            </div>  
            }
        </div>
        <div className='borders-container'>
            <BordersHero /> 
        </div>  
        <div className='final-triangle'>

        </div>
        <div className='background-white'> 
        </div>
        <div className='background-triangles'>
            <div className='background-inner'></div>
            { !isMobile ? <><div className='tr-one'></div>
            <div className='tr-two'></div></> : null }
        </div>
        {/* <div className='tr-one'></div>
        <div className='tr-two'></div> */}
    </section>
}

export default Hero;