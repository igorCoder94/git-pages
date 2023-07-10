import Advantages from './advantages';
import Hero from './hero';
import Services from './services';
import News from './news';
import Registration from './registration';
import HeroMobile from './hero-mobile';
import { useMediaQuery } from '@react-hook/media-query';

const PageMain = () => {
    const isMobile = useMediaQuery('(max-width: 800px)');



    return (
        <>
            {isMobile ? <HeroMobile /> : <Hero />}
            <Services />
            <Advantages />
            <News />
            <Registration />
        </>
    )
}

export default PageMain;