import './style.scss';
import Hero from './hero';
import Integration from './integration';
import SolutionsDim from './solutions-dim';
import SolutionService from './solutions-service';
import Scheme from './scheme';
import { HelmetProvider } from 'react-helmet-async';

const PageDispatching = () => {
    return (
        <>
            <HelmetProvider>
                <title>Модуль диспетчеризации и мониторинга</title>
                <meta name="description" content="Сбор и анализ информации о состоянии оборудования, представление её в удобном виде. Промышленная видео аналитика, определение аварийных ситуаций. Интеграция с системами электронного документооборота" />
            </HelmetProvider>
            <Hero />
            <SolutionsDim />
            <SolutionService />
            <Integration />
            <Scheme />
        </>
    )
}

export default PageDispatching;