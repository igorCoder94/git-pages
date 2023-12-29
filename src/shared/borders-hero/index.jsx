import './style.scss';
import { useMediaQuery } from '@react-hook/media-query';

const BordersHero = () => {
    const isMobile = useMediaQuery('(max-width: 800px)');

    return (<>
        <div className='border-hero border-hero__left'></div>
        
        { !isMobile ? 
        <>
            <div className='border-hero border-hero__left-middle'></div>
            <div className='border-hero border-hero__middle'></div>
            <div className='border-hero border-hero__right-middle'></div>
        </>
        : null }

        <div className='border-hero border-hero__right'></div>
    </>)
}

export default BordersHero;