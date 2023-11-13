import React from 'react';
import './style.scss';
import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';

const Form = () => {
    const [initialForm, setInitialForm] = useState({})
    const [formData, setFormData] = useState({
        имя: "",
        организация: "",
        отрасль: "",
        комментарий: "",
        email: "",
        телефон: "",

        лицензия_базовая: false,
        лицензия_безлимитная: false,
        настройка_лицензии_базовая: false,
        настройка_лизцензии_безлимитная: false,
        базовая_техподдержка: false,
        безлимитная_техподдержка: false,

        модуль_1: false,
        блок_дим: false,
        блок_аналитики: false,
        блок_оповещения: false,
        блок_аппаратного_шлюза: false,
        блок_шлюза: false,
        блок_data_bridge: false,
        
        модуль_2: false,
        блок_отчёты: false,
        блок_документооборот: false,
        блок_статический_анализ_бп_toir: false,
        интерфейс_для_работы_с_гибкими_бп: false,

        модуль_3: false,
        получение_пространственной_модели: false,
        блок_интеграции_с_bim_моделями: false,
        блок_интеграции_sdo_vrm: false,
        web_ai_ntr: false,

        модуль_4: false,
        блок_мобильные_места: false,
        блок_интерактивная_карта: false,
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState('');
    const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validate(formData));
        setSubmitting(true);
        console.log(444);
    }

    function validate(inputValues) {
        let errors = {};

        if (!inputValues.имя.length) {
          errors.имя = "error"
          errors.required = "Поля, отмеченные звёздочкой, обязательны для заполнения"
        }

        if (!inputValues.отрасль.length) {
            errors.отрасль = "error"
            errors.required = "Поля, отмеченные звёздочкой, обязательны для заполнения"
          }

        if (!inputValues.организация.length) {
          errors.организация = "error"
          errors.required = "Поля, отмеченные звёздочкой, обязательны для заполнения"
        }

        if (!inputValues.email.length) {
            errors.email = "error"
            errors.required = "Поля, отмеченные звёздочкой, обязательны для заполнения"
        }

        if (!emailPattern.test(inputValues.email)) {
            errors.email = "Введите валидный email";
          }

        if (!inputValues.телефон.length) {
            errors.телефон = "Поле Телефон не должно быть пустым";
            errors.required = "Поля, отмеченные звёздочкой, обязательны для заполнения"
        }

        return errors;
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        console.log(type, name, value);
        type === "checkbox" ? setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }))
         : setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    };

    const finishSubmit = () => {
        setLoading(true);

        axios.post('https://sheet.best/api/sheets/192cc416-de51-4fa0-942d-56a3dae4bfb0', formData)
        .then(response => {
            console.log(response);
            setNotification('Предложение успешно отправлено!');
            setLoading(false);    
            setTimeout(() => {
                setNotification('');
                setFormData({ ...initialForm});
            }, 3000);
        })
        .catch(() => {
            setLoading(false);
            setErrors({fail: 'Что-то пошло не так. Повторите попытку позже.'})});
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);

    useEffect(() => {
        setInitialForm({...formData});
    }, [])

    return <section className='request-form__section'>
        <div className='request-form__container container'>
            <div className='request-form__content'>
            <h1 className='request-form__title'>Формирование предложения</h1>
                <form className='request-from__form'>
                    <div className='request-form__main'>
                        <div className='request-form__block'>
                            <div className='request-form__block-title'>Основные данные</div>
                            <div className='request-form__inputs'>
                                <div className='request-form__input-container'>
                                    <label htmlFor="name"></label>
                                    <input className={`request-form__input ${ errors.имя ? 'connect-us__error' : ''}`} type="text" id="имя" name="имя" value={formData.имя} onChange={handleChange} placeholder="ФИО*"/>
                                </div>
                                <div className='request-form__input-container'>
                                    <label htmlFor="organization"></label>
                                    <input className={`request-form__input ${ errors.организация ? 'connect-us__error' : ''}`} type="text" id="организация" name="организация" value={formData.организация} onChange={handleChange} placeholder="Организация*"/>
                                </div>
                            </div>
                            <div>
                                <label clashtmlFor="branch"></label>
                                <input className={`request-form__input ${ errors.отрасль ? 'connect-us__error' : ''}`} type="text" id="отрасль" name="отрасль" value={formData.отрасль} onChange={handleChange} placeholder="Отрасль*"/>
                            </div>
                            </div>
                        
                            <div className='request-form__block'>

                        <div className='request-form__block-title'>Базовый состав</div>
                        <div className='grid__container'>
                            <div className='grid__row'>
                                <div className='grid__item'>Софтовая продажа</div>
                                <div className='grid__item'>
                                    <div className='grid__item-inner-container'>
                                        <label className='grid__item-inner'>БАЗОВАЯ Лицензия для "Коробочной версии ПО UNIOS, установка on-premises в локальном защищенном контуре Клиента, с годовой техподдержкой</label>
                                        <div className='grid__item-inner'>
                                            <input type="checkbox" id="лицензия_базовая" name="лицензия_базовая" checked={formData.licenseBasic} value={formData.licenseBasic} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='grid__item-inner-container'>
                                        <label htmlFor="licenseUnlimited" className='grid__item-inner'>Безлимитная БАЗОВАЯ Лицензия для "Коробочной версии ПО UNIOS, установка on-premises в локальном защищенном контуре Клиента, с годовой техподдержкой</label>
                                        <div className='grid__item-inner'>
                                            <input type="checkbox" id="лицензия_безлимитная" name="лицензия_безлимитная" checked={formData.licenseUnlimited} value={formData.licenseUnlimited} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className='grid__row'>
                                    <div className='grid__item'>Объектовая продажа</div>
                                    <div className='grid__item'>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Настройка БАЗОВОЙ лицензии ПО на объекте</div>
                                        <div className='grid__item-inner'>
                                            <input type="checkbox" id="настройка_лицензии_базовая" name="настройка_лицензии_базовая" checked={formData.настройка_лицензии_базовая} value={formData.настройка_лицензии_базовая} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Безлимитная Настройка базовой лицензии ПО на объекте</div>
                                        <div className='grid__item-inner'>
                                            <input type="checkbox" id="настройка_лизцензии_безлимитная" name="настройка_лизцензии_безлимитная" checked={formData.настройка_лизцензии_безлимитная} value={formData.настройка_лизцензии_безлимитная} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Базовая Техподдержка годовая</div>
                                        <div className='grid__item-inner'>
                                            <input type="checkbox" id="базовая_техподдержка" name="базовая_техподдержка" checked={formData.базовая_техподдержка} value={formData.базовая_техподдержка} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Безлимитная Техподдержка</div>
                                        <div className='grid__item-inner'>
                                            <input type="checkbox" id="безлимитная_техподдержка" name="безлимитная_техподдержка" checked={formData.безлимитная_техподдержка} value={formData.безлимитная_техподдержка} onChange={handleChange} />
                                        </div>
                                    </div>     
                                </div>    
                            </div>
                            </div>
                        </div>

                        <div className='request-form__block'>
                        <div className='request-form__block-title'>Настройка модулей</div>
                            <div className='grid__row'>
                                <div className='grid__item'>БАЗОВЫЙ МОДУЛЬ 1. UNIOS Диспетчеризация SCADA/IoT.</div>
                                <div className='grid__item'>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Оперативное получение данных датчиков автономных устройств, промышленных систем и автоматизированных промышленных систем с использованием программных и программно-аппаратных шлюзов (gateways) и мостов (data-bridge), а также данных видеоаналитики.<br/><br/>Ведение хранилища big data исходных данных для последующей аналитики. Оперативная обработка полученных данных, генерация событий о изменении состояний устройств. Генерация сигналов о возникновении аварийных и пред-аварийных состояний устройств, отправка сигналов в блок Оповещений.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="модуль_1" name="модуль_1" checked={formData.модуль_1} value={formData.модуль_1} onChange={handleChange} />
                                            </div>
                                    </div>    
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок статического анализа данных устройств ДиМ.<br/><br/>Статистический анализ поведения промышленных устройств в целях обнаружения признаков некорректной работы оборудования и его поддержания в исправном состоянии.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_дим" name="блок_дим" checked={formData.блок_дим} value={formData.блок_дим} onChange={handleChange} />
                                            </div>
                                    </div>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок предиктивной аналитики (с использованием AI, предсказание отказов устройств).<br/><br/>Предиктивный анализ данных устройств и автоматизированных систем с использованием обучаемых моделей (на основе нейронных сетей). Определение потенциальных аварий на основе предиктивного анализа. Оперативная обработка полученных данных, генерация событий об изменении состояний устройств. Генерация сигналов о потенциальных аварийных ситуациях. Предоставление результатов предиктивной аналитики для построения аналитических отчетов. Алгоритмический и статистический анализ данных устройств и авт.систем (суточные, недельные и месячные сводки, наработка устройств и т.д.).</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_аналитики" name="блок_аналитики" checked={formData.блок_аналитики} value={formData.блок_аналитики} onChange={handleChange} />
                                            </div>
                                    </div>  
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Unios Оповещения<br/><br/>Получение сигналов от других блоков Unios и генерация соответствующих оповещений. Доставка оповещений пользователям системы с использованием e-mail, sms, мессенджеров, мобильных клиентов. Подтверждение получения оповещений пользователями.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_оповещения" name="блок_оповещения" checked={formData.блок_оповещения} value={formData.блок_оповещения} onChange={handleChange} />
                                            </div>
                                    </div>  
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Аппаратного шлюза Unios.<br/><br/>Получение данных от "умных" промышленных устройств с использованием распространенных промышленных протоколов</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_аппаратного_шлюза" name="блок_аппаратного_шлюза" checked={formData.блок_аппаратного_шлюза} value={formData.блок_аппаратного_шлюза} onChange={handleChange} />
                                            </div>
                                    </div>  
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Шлюз UNIOS.<br/><br/>Получение данных от промышленных контроллеров и множества устройств, подключенных к ним</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_шлюза" name="блок_шлюза" checked={formData.блок_шлюза} value={formData.блок_шлюза} onChange={handleChange} />
                                            </div>
                                    </div>  
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Data Bridge UNIOS-SCADA.<br/><br/>Получение данных от SCADA-систем (АСУ ТП) и множества контроллеров и устройств, подключенных к ним</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_data_bridge" name="блок_data_bridge" checked={formData.блок_data_bridge} value={formData.блок_data_bridge} onChange={handleChange} />
                                            </div>
                                    </div>      
                                </div>    
                            </div>

                            <div className='grid__row'>
                                <div className='grid__item'>БАЗОВЫЙ МОДУЛЬ 2. UNIOS Диспетчеризация SCADA/IoT.</div>
                                <div className='grid__item'>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Проведение последовательности этапов заданных бизнес-процессов.<br/><br/>Информирование акторов бизнес-процессов о текущих этапах, получение от них обратной связи/ввода данных ( в том числе с использованием блока Unios Мобильные Рабочие Места (МРМ)). Хранение и предоставление связанной с бизнес-процессами справочной и нормативной документацией. Обмен данными с блоком документооборота для обеспечения сопутствующего документооборота.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="модуль_2" name="модуль_2" checked={formData.модуль_2} value={formData.модуль_2} onChange={handleChange} />
                                            </div>
                                    </div>    

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Unios Отчеты.<br/><br/>

Формирование электронных отчётов на основании предоставленных другими блоками системы данных. 
Предоставление электронных отчётов пользователям системы. 
Генерация печатных отчетов заданных форм.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_отчёты" name="блок_отчёты" checked={formData.блок_отчёты} value={formData.блок_отчёты} onChange={handleChange} />
                                            </div>
                                    </div>  

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Unios Документооборот.<br/><br/>

Формирование электронных документов заданных форм, связанных с различными этапами бизнес-процессов. 
Формирование печатных документов заданных форм. 
Предоставление электронных документов акторам бизнес-процесса с возможностью их печати. 
Обеспечение интеграции с системами управления бизнес-процессами и системами документооборота предприятия.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_документооборот" name="блок_документооборот" checked={formData.блок_документооборот} value={formData.блок_документооборот} onChange={handleChange} />
                                            </div>
                                    </div>    

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок статического анализа бизнес-процессов ТОиР. <br/><br/>

Алгоритмический и статистический анализ данных бизнес-процессов (эффективность подрядчиков, частота повторных отказов, статистика затрат). 
Предоставление результатов алгоритмической и статистической аналитики блоку Отчетов.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_статический_анализ_бп_toir" name="блок_статический_анализ_бп_toir" checked={formData.блок_статический_анализ_бп_toir} value={formData.блок_статический_анализ_бп_toir} onChange={handleChange} />
                                            </div>
                                    </div>  

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Интерфейс для работы с гибкими Бизнес-процессами в блоке Unios Бизнес-процессы. <br/><br/>

Формирование периодических и разовых работ на техническое обслуживание и ремонт оборудования. 
Передача заявок и чек-листов исполнителям (подрядчикам). 
Предоставление справочной и технической документации тех.персоналу подрядчика. 
Получение и проверка отчетов о выполненных работах от исполнителей/подрядчиков. 
Формирование отчетности о выполненных работах для заказчика.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="интерфейс_для_работы_с_гибкими_бп" name="интерфейс_для_работы_с_гибкими_бп" checked={formData.интерфейс_для_работы_с_гибкими_бп} value={formData.интерфейс_для_работы_с_гибкими_бп} onChange={handleChange} />
                                            </div>
                                    </div>


                                </div>    
                            </div>

                            <div className='grid__row'>
                                <div className='grid__item'>БАЗОВЫЙ МОДУЛЬ 3. UNIOS Диспетчеризация SCADA/IoT.</div>
                                <div className='grid__item'>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Получение пространственной модели промышленных объектов BIM-систем для составления интерактивной карты.<br/><br/> Организация доступа к системе видеонаблюдения предприятия.Передача видеопотоков системы видеонаблюдения в систему VideoAI.NTR для автоматического распознавания событий в режиме реального времени.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="модуль_3" name="модуль_3" checked={formData.модуль_3} value={formData.модуль_3} onChange={handleChange} />
                                            </div>
                                    </div>    

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Получение пространственной модели промышленных объектов BIM-систем для составления интерактивной карты. Организация доступа к системе видеонаблюдения предприятия. Передача видеопотоков системы видеонаблюдения в систему VideoAI.NTR для автоматического распознавания событий в режиме реального времени.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="получение_пространственной_модели" name="получение_пространственной_модели" checked={formData.получение_пространственной_модели} value={formData.получение_пространственной_модели} onChange={handleChange} />
                                            </div>
                                    </div>  

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок интеграции с BIM-моделями.<br/><br/>Организация доступа к системе видеонаблюдения предприятия.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_интеграции_с_bim_моделями" name="блок_интеграции_с_bim_моделями" checked={formData.блок_интеграции_с_bim_моделями} value={formData.блок_интеграции_с_bim_моделями} onChange={handleChange} />
                                            </div>
                                    </div>  

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Интеграции Unios СДО и BPM* (интеграция с ERP). Основные задачи блока:<br/><br/>Обеспечения обмена электронными документами с системами документооборота и системами Business Process Management предприятия</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_интеграции_sdo_vrm" name="блок_интеграции_sdo_vrm" checked={formData.блок_интеграции_sdo_vrm} value={formData.блок_интеграции_sdo_vrm} onChange={handleChange} />
                                            </div>
                                    </div>  

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>WebAI.NTR.<br/><br/>Обработка видеопотоков системы видеонаблюдения в режиме реального времени. 
Автоматическое распознавание событий с использованием технологий машинного обучения. 
Настройка типов детектируемых событий. 
Передача информации о зафиксированных событиях в модуль Unios Диспетчеризация и Мониторинг.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="web_ai_ntr" name="web_ai_ntr" checked={formData.web_ai_ntr} value={formData.web_ai_ntr} onChange={handleChange} />
                                            </div>
                                    </div>  
                                </div>    
                            </div>

                            <div className='grid__row'>
                                <div className='grid__item'>БАЗОВЫЙ МОДУЛЬ 4. UNIOS Диспетчеризация SCADA/IoT.</div>
                                <div className='grid__item'>
                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Контроль выполнения работ исполнителями. <br/><br/>Наглядное представление территории объекта и расположенных на нем устройств, интерактивное взаимодействие с ними</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="модуль_4" name="модуль_4" checked={formData.модуль_4} value={formData.модуль_4} onChange={handleChange} />
                                            </div>
                                    </div>    

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок UNIOS Мобильные рабочие места. <br/><br/>Оперативное информирование тех.персонала о назначенных работах. Предоставление защищённого доступа к сопутствующей документации, необходимой для выполнения работ. 
Оперативное заполнение документов о выполнении работ ( чек-листов, отчетов) с фото и видеофиксацией. 
Предоставление информации о местоположении устройств, обеспечение навигации тех.персоналу к устройствам.</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_мобильные_места" name="блок_мобильные_места" checked={formData.блок_мобильные_места} value={formData.блок_мобильные_места} onChange={handleChange} />
                                            </div>
                                    </div>  

                                    <div className='grid__item-inner-container'>
                                        <div className='grid__item-inner'>Блок Unios Интерактивная карта. <br/><br/>Просмотр карт и пространственных моделей промышленных объектов (в том числе BIM) и местоположения в ней устройств с фотофиксацией их местоположения. Обеспечение навигации тех.персонала к устройствам промышленного объекта с использованием мобильных рабочих мест. Построение маршрутов, предоставление фотографий местоположения устройств. Актуализация местоположения устройств с фотофиксацией. Обеспечение доступа к видеопотокам системы видеонаблюдения для оперативной реакции на возникновение аварийных и предаварийных состояний устройств и другие события</div>
                                        <div className='grid__item-inner'>
                                                <input type="checkbox" id="блок_интерактивная_карта" name="блок_интерактивная_карта" checked={formData.блок_интерактивная_карта} value={formData.блок_интерактивная_карта} onChange={handleChange} />
                                            </div>
                                    </div>  
                                </div>    
                            </div>
                    </div>

                    <div className='request-form__block'>
                        <div className='request-form__block-title'>Если представленные решения не соответствуют Вашей задаче, опишите ее в поле ниже или прикрепите файл</div>
                        <div className='request-form__input-container'>
                                <label htmlFor=""></label>
                                <input className="request-form__input" type="text" id="комментарий" name="комментарий" value={formData.комментарий} onChange={handleChange} placeholder="Опишите задачу или прикрепите файл"/>
                        </div>
                        <div className='request-form__inputs'>
                            <div className='request-form__input-container'>
                                <label htmlFor=""></label>
                                <input className={`request-form__input ${ errors.email ? 'connect-us__error' : ''}`} type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="email*"/>
                            </div>
                            <div className='request-form__input-container'>
                                <label htmlFor=""></label>
                                <PhoneInput 
                                    onlyCountries={['ru']}
                                    country={'ru'}
                                    className={`connect-us__input ${ errors.телефон ? 'connect-us__error' : ''}`}
                                    name="телефон"
                                    value={formData.телефон}
                                    onChange={(phone) => setFormData((prevFormData) => ({ ...prevFormData, телефон: phone }))}
                                    placeholder="Телефон*"
                                />
                            </div>
                        </div>
                        {errors.required ? <div className='connect-us__error-text'>{errors.required}</div> : null}
                        {errors.email ? <div className='connect-us__error-text'>{errors.email}</div> : null}
                        {errors.fail ? <div className='connect-us__error-text'>{errors.fail}</div> : null}
                        </div>

                        <div className='request-form__bottom'>
                            { notification ? <div className='request-form__success'>{notification}</div> : <>
                                <div className='request-form__button'>
                                    <button className={`request-form__submit ${formData.agreement === false || loading || notification ? 'blocked' : ''}`} type='submit' onClick={handleSubmit}>Рассчитать</button>
                                    { loading ? <ClipLoader className='request-form__spinner' size="20px" color='black'/> : null}
                                </div>
                            </> }                            
                            <div className='request-form__info'>
                                Нажимая кнопку «Отправить», вы соглашаетесь с нашей
                                Политикой конфиденциальности.
                                Мы не делимся информацией с третьими лицами.
                            </div>
                        </div>
                    </div>
            </form>
            </div>
        </div>
    </section>
}

export default Form;