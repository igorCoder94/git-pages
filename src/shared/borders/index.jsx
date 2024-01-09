import './style.scss';
import { useMediaQuery } from '@react-hook/media-query';

const Borders = () => {
    const isMobile = useMediaQuery('(max-width: 800px)');

    return (<>
        <div className='border border__left'></div>
        
        { !isMobile ? 
        <>
            <div className='border border__left-middle'></div>
            <div className='border border__middle'></div>
            <div className='border border__right-middle'></div>
        </>
        : null }

        <div className='border border__right'></div>
    </>)
}

export default Borders;