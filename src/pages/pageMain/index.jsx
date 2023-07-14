import Advantages from './advantages';
import Hero from './hero';
import Services from './services';
import News from './news';
import Registration from './registration';
import HeroMobile from './hero-mobile';
import { useMediaQuery } from '@react-hook/media-query';
import { Helmet } from 'react-helmet';

const PageMain = () => {
    const isMobile = useMediaQuery('(max-width: 800px)');



    return (
        <>
            <Helmet>
                <title>Unios - Сервис для автоматизации эксплуатации объектов</title>
                <meta name="description" content="Unios - сервис автоматизации эксплуатации и технического обслуживания оборудования. Мониторинг, Диспетчеризация, Техническое обслуживание и Ремонт оборудования" />
                <meta name="keywords" content="автоматизация, IoT, ТОиР, диспетчеризация, мониторинг, сервис, эксплуатация, обслуживание, оборудование, Эф-Ти-Икс-Ком, FTXCom, Unios, Юниос, ЭФ ТИ ИКС КОМ, SCADA, API, CCTV, видеонаблюдение, аварийные ситуации, устройство, объект" />
            </Helmet>
            {isMobile ? <HeroMobile /> : <Hero />}
            <Services />
            <Advantages />
            <News />
            <Registration />
        </>
    )
}

export default PageMain;