import './style.scss';
import Hero from './hero';
import SolutionToir from './solution-toir';
import SolutionAutomation from './solution-automation';
import Control from './control';
import Scheme from './scheme';
import { Helmet } from 'react-helmet';

const PageBusiness = () => {
    return (
        <>
            <Helmet>
                <title>Модуль технического обслуживания и ремонта</title>
                <meta name="description" content="Инструмент для планирования,
создания и контроля выполнения работ по техническому обслуживанию и ремонту. Настройка бизнес–процессов, веб-интерфейс, кобильные рабочие места" />
            </Helmet>
            <Hero />
            <SolutionToir />
            <SolutionAutomation />
            <Control />
            <Scheme />
        </>
    )
}

export default PageBusiness;