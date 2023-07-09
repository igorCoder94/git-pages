import './style.scss';
import scheme from '../../../assets/images/dispatching/scheme.png';
import schemeVertical from '../../../assets/images/dispatching/scheme-vertical.png';
import { useMediaQueries, useMediaQuery } from '@react-hook/media-query';

const Scheme = () => {

    const isDesktop = useMediaQuery('(max-width: 1100px)');

    return <section className='dispatching-scheme__section'>
        <div className='dispatching-scheme__container container'>
            <div className='dispatching-scheme-img__container'>
                {isDesktop ? <img className='dispatching-scheme__img' src={schemeVertical} alt="scheme" />
                    :
                    <img className='dispatching-scheme__img' src={scheme} alt="scheme" />
                }
            </div>

        </div>
    </section>
}

export default Scheme;