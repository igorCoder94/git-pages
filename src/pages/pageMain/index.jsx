import Hero from './hero';
import Scada from './scada';
import NewsCards from './news-cards';
import Toir from './toir';
import Control from './control';
import News from './news';
import Join from './join';
import HeroMobile from './hero-mobile';
import { useMediaQuery } from '@react-hook/media-query';
import { Helmet } from 'react-helmet';
import Integration from './integration';
import { useEffect } from 'react';


const PageMain = ({ togglePopup }) => {
    const isMobile = useMediaQuery('(max-width: 1100px)');

    useEffect(() => {
        console.log(2, togglePopup);
    }, []);

    return (
        <>
            <Helmet>
                <title>Unios - Сервис для автоматизации эксплуатации объектов</title>
                <meta name="description" content="Unios - сервис автоматизации эксплуатации и технического обслуживания оборудования. Мониторинг, Диспетчеризация, Техническое обслуживание и Ремонт оборудования" />
                <meta name="keywords" content="автоматизация, IoT, ТОиР, диспетчеризация, мониторинг, сервис, эксплуатация, обслуживание, оборудование, Эф-Ти-Икс-Ком, FTXCom, Unios, Юниос, ЭФ ТИ ИКС КОМ, SCADA, API, CCTV, видеонаблюдение, аварийные ситуации, устройство, объект" />
            </Helmet>
            {/* {isMobile ? <HeroMobile /> : <Hero />} */}
            <Hero />
            <Scada />
            <Toir />
            <Control />
            <Integration />
            <News />
            <NewsCards />
            <Join togglePopup={togglePopup} />
        </>
    )
}

export default PageMain;