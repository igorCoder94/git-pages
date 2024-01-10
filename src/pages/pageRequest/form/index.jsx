import React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import PhoneInput from "react-phone-input-2";
import Borders from "../../../shared/borders";
import axios from "axios";

const MODULES = [
  {
    name: "МОДУЛЬ 1. UNIOS Диспетчеризация SCADA/IoT",
    basic: [
      {
        optionName: "модуль_1",
        options: [
          "Универсальный интегратор SCADA систем (MB RTU, TCP, S7, Profinet и др.)",
          "Интерактивные карты. 2D планы расположения устройств на объекте",
          "Аналитика данных. Графическая интерпретация событий",
          "Панель мониторинга и оповещений. Представление данных в едином виде",
        ],
        cost: "150 000р. / год",
      },
    ],
  },
  {
    name: "МОДУЛЬ 2: UNIOS построение бизнес-процессов ТОиР",
    basic: [
      {
        optionName: "модуль_2",
        options: [
          "Менеджер бизнес-процессов. Индивидуальная настройка Объектов / Устройств / Пользователей",
          "Менеджер работ. Календарь событий, автоматическое формирование и ведение плановых работ",
          "Интерактивные карты. 2D планы расположения устройств на объекте",
          "Формирование электронной отчетности. Приведение документов к единому стандарту",
        ],
        cost: "150 000р. / год",
      },
    ],
  },
  {
    name: "МОДУЛЬ 3. UNIOS Контроль исполнения",
    basic: [
      {
        optionName: "модуль_3",
        options: [
          "Автоматизированные мобильные рабочие места исполнителей",
          "Модуль навигации на объекте",
          "Автоматизированный контроль выполнения работ",
        ],
        cost: "Рассчитывается индивидуально",
      },
    ],
  },
  {
    name: "МОДУЛЬ 4. UNIOS Интеграция",
    basic: [
      {
        optionName: "модуль_4_расширение_функционала",
        options: [
          "Расширение функционала дополнительными модулями и сервисами",
        ],
        cost: "Рассчитывается индивидуально",
      },
    ],
    additional: [
      {
        optionName: "модуль_4_модуль_интеграции_3D",
        options: [
          "Модуль интеграции 3D BIM моделей. Построение 3-х мерных интерактивных карт",
        ],
        cost: "Рассчитывается индивидуально",
      },
      {
        optionName: "модуль_4_построение_гибких_бизнес_процессов",
        options: ["Построение гибких Бизнес Процессов BPM"],
        cost: "Рассчитывается индивидуально",
      },
      {
        optionName: "модуль_4_системы_электронного_документооборота",
        options: ["Системы электронного документооборота СЭД"],
        cost: "Рассчитывается индивидуально",
      },
      {
        optionName: "модуль_4_модуль_статистической_аналитики",
        options: ["Модуль статистической аналитики. Прогнозирование событий"],
        cost: "Рассчитывается индивидуально",
      },
      {
        optionName: "модуль_4_модуль_интеграции_1C",
        options: [
          "Модуль интеграции с системами электронного документооборота 1:С",
        ],
        cost: "Рассчитывается индивидуально",
      },
      {
        optionName: "модуль_4_CCTV",
        options: [
          "CCTV Промышленная видеоаналитика, определение аварийных ситуаций",
        ],
        cost: "Рассчитывается индивидуально",
      },
    ],
  },
];

const Form = () => {
  const [initialForm, setInitialForm] = useState({});
  const [formData, setFormData] = useState({
    имя: "",
    организация: "",
    отрасль: "",
    комментарий: "",
    email: "",
    телефон: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(formData));
    setSubmitting(true);
  }

  function validate(inputValues) {
    let errors = {};

    if (!inputValues.имя.length) {
      errors.имя = "error";
      errors.required =
        "Поля, отмеченные звёздочкой, обязательны для заполнения";
    }

    if (!inputValues.отрасль.length) {
      errors.отрасль = "error";
      errors.required =
        "Поля, отмеченные звёздочкой, обязательны для заполнения";
    }

    if (!inputValues.организация.length) {
      errors.организация = "error";
      errors.required =
        "Поля, отмеченные звёздочкой, обязательны для заполнения";
    }

    if (!inputValues.email.length) {
      errors.email = "error";
      errors.required =
        "Поля, отмеченные звёздочкой, обязательны для заполнения";
    }

    if (!emailPattern.test(inputValues.email)) {
      errors.email = "Введите валидный email";
    }

    if (!inputValues.телефон.length) {
      errors.телефон = "Поле Телефон не должно быть пустым";
      errors.required =
        "Поля, отмеченные звёздочкой, обязательны для заполнения";
    }

    return errors;
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }))
      : setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const finishSubmit = () => {
    setLoading(true);

    axios
      .post(
        "https://sheet.best/api/sheets/95e8a488-fb89-4bf7-874d-7f6225269c7d",
        formData,
      )
      .then((response) => {
        setNotification("Предложение успешно отправлено!");
        setLoading(false);
        setTimeout(() => {
          setNotification("");
          setFormData({ ...initialForm });
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        setErrors({ fail: "Что-то пошло не так. Повторите попытку позже." });
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  useEffect(() => {
    let optionNames = [];
    const initialOptionNames = {};

    MODULES.forEach((item) => {
      if (item.basic?.length) {
        item.basic.forEach((item) => optionNames.push(item.optionName));
      }

      if (item.additional?.length) {
        item.additional.forEach((item) => optionNames.push(item.optionName));
      }
    });

    optionNames.forEach((option) => {
      initialOptionNames[option] = false;
    });

    setFormData({ ...formData, ...initialOptionNames });
    setInitialForm({ ...formData, ...initialOptionNames });
  }, []);

  return (
    <section className="request-form__section">
      <div className="request-form__container container">
        <div className="request-form__content">
          <h1 className="request-form__title">Формирование предложения</h1>
          <form className="request-form__form">
            <div className="request-form__main">
              <div className="request-form__block">
                <div className="request-form__block-title">Основные данные</div>
                <div className="request-form__inputs">
                  <div className="request-form__input-container">
                    <label htmlFor="name"></label>
                    <input
                      className={`request-form__input ${
                        errors.имя ? "connect-us__error" : ""
                      }`}
                      type="text"
                      id="имя"
                      name="имя"
                      value={formData.имя}
                      onChange={handleChange}
                      placeholder="ФИО*"
                    />
                  </div>
                  <div className="request-form__input-container">
                    <label htmlFor="organization"></label>
                    <input
                      className={`request-form__input ${
                        errors.организация ? "connect-us__error" : ""
                      }`}
                      type="text"
                      id="организация"
                      name="организация"
                      value={formData.организация}
                      onChange={handleChange}
                      placeholder="Организация*"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="branch"></label>
                  <input
                    className={`request-form__input ${
                      errors.отрасль ? "connect-us__error" : ""
                    }`}
                    type="text"
                    id="отрасль"
                    name="отрасль"
                    value={formData.отрасль}
                    onChange={handleChange}
                    placeholder="Отрасль*"
                  />
                </div>
              </div>

              <div className="request-form__block">
                <div className="request-form__block-title">
                  Настройка модулей
                </div>
                <div className="grid__container">
                  {MODULES.map((module) => (
                    <div className="grid__row" key={module.name}>
                      <div className="grid__item grid__item-name">
                        {module.name}
                      </div>
                      <div className="grid__item">
                        {module.additional && module.additional?.length > 0 ? (
                          <div className="grid__item grid__item-header">
                            Базовый состав модуля
                          </div>
                        ) : (
                          <div className="grid__item grid__item-header">
                            Состав модуля
                          </div>
                        )}

                        {module.basic.map((basic) => (
                          <div className="grid__item-inner-container">
                            <div className="grid__item-inner-list">
                              {basic.options.map((item) => (
                                <div className="grid__item-inner grid__item-inner">
                                  {item}
                                </div>
                              ))}
                              <div className="grid__item-inner grid__item-cost">
                                <div className="grid__cost-name">
                                  Стоимость:
                                </div>
                                <div className="grid__cost-value">
                                  {basic.cost}
                                </div>
                              </div>
                            </div>

                            <div className="grid__item-inner">
                              <input
                                type="checkbox"
                                id={basic.optionName}
                                name={basic.optionName}
                                checked={formData[basic.optionName] || false}
                                value={formData[basic.optionName] || false}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        ))}

                        {module.additional && module.additional.length > 0 ? (
                          <div className="grid__item grid__item-header">
                            Дополнительные подмодули
                          </div>
                        ) : null}

                        {module.additional?.map((additional) => (
                          <div className="grid__item-inner-container">
                            <div className="grid__item-inner-list">
                              {additional.options.map((item) => (
                                <div className="grid__item-inner grid__item-inner">
                                  {item}
                                </div>
                              ))}
                              <div className="grid__item-inner grid__item-cost">
                                <div className="grid__cost-name">
                                  Стоимость:
                                </div>
                                <div className="grid__cost-value">
                                  {additional.cost}
                                </div>
                              </div>
                            </div>

                            <div className="grid__item-inner">
                              <input
                                type="checkbox"
                                id={additional.optionName}
                                name={additional.optionName}
                                checked={
                                  formData[additional.optionName] || false
                                }
                                value={formData[additional.optionName] || false}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="request-form__block">
                  <div className="request-form__block-title">
                    Если представленные решения не соответствуют Вашей задаче,
                    опишите ее в поле ниже
                  </div>
                  <div className="request-form__input-container">
                    <label htmlFor=""></label>
                    <input
                      className="request-form__input"
                      type="text"
                      id="комментарий"
                      name="комментарий"
                      value={formData.комментарий}
                      onChange={handleChange}
                      placeholder="Опишите задачу"
                    />
                  </div>
                  <div className="request-form__inputs">
                    <div className="request-form__input-container">
                      <label htmlFor=""></label>
                      <input
                        className={`request-form__input ${
                          errors.email ? "connect-us__error" : ""
                        }`}
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email*"
                      />
                    </div>
                    <div className="request-form__input-container">
                      <label htmlFor=""></label>
                      <PhoneInput
                        onlyCountries={["ru"]}
                        country={"ru"}
                        className={`connect-us__input ${
                          errors.телефон ? "connect-us__error" : ""
                        }`}
                        name="телефон"
                        value={formData.телефон}
                        onChange={(phone) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            телефон: phone,
                          }))
                        }
                        placeholder="Телефон*"
                      />
                    </div>
                  </div>
                  {errors.required ? (
                    <div className="connect-us__error-text">
                      {errors.required}
                    </div>
                  ) : null}
                  {errors.email ? (
                    <div className="connect-us__error-text">{errors.email}</div>
                  ) : null}
                  {errors.fail ? (
                    <div className="connect-us__error-text">{errors.fail}</div>
                  ) : null}
                </div>

                <div className="request-form__bottom">
                  {notification ? (
                    <div className="request-form__success">
                      {notification}
                      <svg
                        id="svg__test-two"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 130.2 130.2"
                      >
                        <circle
                          className="path circle"
                          fill="none"
                          stroke="#73AF55"
                          strokeWidth="6"
                          strokeMiterlimit="10"
                          cx="65.1"
                          cy="65.1"
                          r="62.1"
                        />
                        <polyline
                          className="path check"
                          fill="none"
                          stroke="#73AF55"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          points="100.2,40.2 51.5,88.8 29.8,67.5 "
                        />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <div className="request-form__button">
                        <button
                          className={`request-form__submit ${
                            formData.agreement === false ||
                            loading ||
                            notification
                              ? "blocked"
                              : ""
                          }`}
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Рассчитать
                        </button>
                        {loading ? (
                          <ClipLoader
                            className="request-form__spinner"
                            size="20px"
                            color="black"
                          />
                        ) : null}
                      </div>
                    </>
                  )}
                  <div className="request-form__info">
                    Нажимая кнопку «Отправить», вы соглашаетесь с нашей
                    Политикой конфиденциальности. Мы не делимся информацией с
                    третьими лицами.
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="request-form__borders">
          <Borders />
        </div>
        <div className="request__background"></div>
      </div>
    </section>
  );
};

export default Form;
