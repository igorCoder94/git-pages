import './style.scss';
import scheme from '../../../assets/images/business/scheme.png';
import schemeVertical from '../../../assets/images/business/scheme-vertical.png';
import { useMediaQuery } from '@react-hook/media-query';

const Scheme = () => {

    const isDesktop = useMediaQuery('(max-width: 1100px)');

    return <section className='scheme__section'>
        <div className='scheme__container container'>
            <div className='scheme-img__container'>
                {isDesktop ? <img className='scheme__img' src={schemeVertical} alt="scheme" />
                    :
                    <img className='scheme__img' src={scheme} alt="scheme" />
                }
            </div>

        </div>
    </section>
}

export default Scheme;