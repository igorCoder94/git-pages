import React from 'react';
import './style.scss';
import crossIcon from '../../../assets/icons/cross.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ConnectUs = ({ togglePopup }) => {
    const [formData, setFormData] = useState({
        имя: '',
        организация: '',
        отрасль: '',
        email: '',
        телефон: '',
        комментарий: '',
        agreement: false,
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState('');
    const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;


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

    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validate(formData));
        setSubmitting(true);

        console.log(errors);
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        console.log(type, name, value);
        type === "checkbox" ? setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }))
         : setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    };

    const finishSubmit = () => {
        setLoading(true);

        axios.post('https://sheet.best/api/sheets/9b281df5-abc3-4732-917b-d4a7ea6442d0', formData)
        .then(response => {
            console.log(response);
            setNotification('Запрос успешно отправлен!');
            setLoading(false);    
            setTimeout(() => {
                setNotification('');
                closePopup();
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

    const closePopup = () => {
        togglePopup();
    }
    
    return (<>
        <div className='connect-us' onClick={e => (e.currentTarget === e.target) && togglePopup()}>
            <div className='connect-us__container'>
                <div className='connect-us__title'>Отправить запрос</div>
                <form>
                    <div className='connect-us__inputs'>
                        <input className={`connect-us__input ${ errors.имя ? 'connect-us__error' : ''}`} name="имя" value={formData.имя} onChange={handleChange} placeholder="ФИО*"/>
                        <input className={`connect-us__input ${ errors.организация ? 'connect-us__error' : ''}`} name="организация" value={formData.организация} onChange={handleChange} placeholder="Организация*"/>
                    </div>
                    <input className={`connect-us__input ${ errors.отрасль ? 'connect-us__error' : ''}`} name="отрасль" value={formData.отрасль} onChange={handleChange} placeholder="Отрасль*"/>
                    <div className='connect-us__inputs'>
                        <input className={`connect-us__input ${ errors.email ? 'connect-us__error' : ''}`} name="email" value={formData.email} onChange={handleChange} placeholder="Email*"/>
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
                    <div className='connect-us__inputs'>
                        <input className='connect-us__input connect-us__comment' name="комментарий" value={formData.комментарий} onChange={handleChange} placeholder="Комментарий"/>
                    </div>
                    <div className='connect-us__agreement'>
                        <input className="check" type="checkbox" name="agreement" onChange={handleChange} value={formData.agreement} />
                        <span>Я даю свое согласие на обработку данных</span>
                    </div>
                    {errors.required ? <div className='connect-us__error-text'>{errors.required}</div> : null}
                    {errors.email ? <div className='connect-us__error-text'>{errors.email}</div> : null}
                    {errors.fail ? <div className='connect-us__error-text'>{errors.fail}</div> : null}
                    <div className="connect-us__button">
                        { notification ? <div className='connect-us__success'>{notification}</div> : 
                        <>
                            <button type="submit" className={`connect-us__submit ${formData.agreement === false || loading || notification ? 'blocked' : ''}`} onClick={handleSubmit}>Отправить</button>
                            { loading ? <ClipLoader className='connect-us__spinner' size="20px" color='black'/> : null}    
                        </>}
                    </div>
                    <div className="connect-us__description">
                        Нажимая кнопку «Отправить», вы соглашаетесь с нашей
                        Политикой конфиденциальности.
                        Мы не делимся информацией с третьими лицами.
                    </div>
                </form>
                <img onClick={closePopup} src={crossIcon} className='connect-us__cross' alt="cross" />
            </div>
        </div>
    </>);
}

export default ConnectUs;