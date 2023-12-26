import './style.scss';
import Form from './form';
import Join from '../../shared/join';
import { Helmet } from 'react-helmet';

const PageRequest = () => {
    return (
        <>
            <Helmet>
                <title>Модуль технического обслуживания и ремонта</title>
                <meta name="description" content="Инструмент для планирования,
создания и контроля выполнения работ по техническому обслуживанию и ремонту. Настройка бизнес–процессов, веб-интерфейс, кобильные рабочие места" />
            </Helmet>
            <Form />
            <Join />
        </>
    )
}

export default PageRequest;