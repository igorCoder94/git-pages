import './style.scss';
import Form from './form';
import Join from '../../shared/join';
import { HelmetProvider } from 'react-helmet-async';

const PageRequest = ({ togglePopup }) => {
    return (
        <>
            <HelmetProvider>
                <title>Модуль технического обслуживания и ремонта</title>
                <meta name="description" content="Инструмент для планирования,
создания и контроля выполнения работ по техническому обслуживанию и ремонту. Настройка бизнес–процессов, веб-интерфейс, кобильные рабочие места" />
            </HelmetProvider>
            <Form />
            <Join className='reques_join' togglePopup={togglePopup} />
            {/* <div className='request__background'></div> */}
        </>
    )
}

export default PageRequest;