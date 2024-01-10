import './style.scss';
import { useMediaQuery } from '@react-hook/media-query';
import ModuleBlock from '../../../shared/moduleBlock';
import data from './data';



const Toir = () => {
    return <section id='toir' className='toir__section'>
        <ModuleBlock data={data} />
    </section>
}

export default Toir;