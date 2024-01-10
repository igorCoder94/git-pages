import './style.scss';

import { useMediaQuery } from '@react-hook/media-query';
import Borders from '../borders';

const ModuleBlock = ({ data }) => {
    const isMobile = useMediaQuery('(max-width: 1100px)');
    const { title, Scheme, image, listOne, listTwo } = data;

    return (<>
        <div className='module-block__container container'>
            {isMobile ? <h2 className='module-block__title-mobile'>
                    Unios<br/>
                    { title }
                </h2> : null }
            <div className='module-block__left'>
                { !isMobile ?
                <h2 className='module-block__title'>
                    Unios<br/>
                    { title }
                </h2> : null }
                <img className='module-block__img' src={image} alt="scada" />
                <div className='module-block__block'>
                    { listOne?.map((item) => (<div key={item.id}>
                        <div className='module-block__el'>
                            <img className='module-block__el-icon' src={item.icon} alt={item.title} />
                            <div className='module-block__el-text'>
                                <div className='module-block__el-title'>{item.title}</div>
                                <div className='module-block__el-description'>{item.text}</div>
                            </div>
                        </div>
                    </div>) ) }
                </div>
                { !isMobile && listTwo?.length > 0 ? <>
                    <h3 className='module-block__title'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='module-block__block'>
                        { listTwo?.map((item) => (<div key={item.id}>
                            <div className='module-block__el'>
                                <img className='module-block__el-icon' src={item.icon} alt={item.title} />
                                <div className='module-block__el-text'>
                                    <div className='module-block__el-title'>{item.title}</div>
                                    <div className='module-block__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </div>) ) }
                    </div>
                </> : null }
            </div>
            { isMobile && listTwo.length > 0 ? <>
                    <h3 className='module-block__title-mobile'>
                        Опционально подключаемые модули
                    </h3>
                    <div className='module-block__block module-block__block-mobile'>
                        { listTwo.map((item) => (<div key={item.id}>
                            <div className='module-block__el'>
                                <img className='module-block__el-icon' src={item.icon} alt={item.title} />
                                <div className='module-block__el-text'>
                                    <div className='module-block__el-title'>{item.title}</div>
                                    <div className='module-block__el-description'>{item.text}</div>
                                </div>
                            </div>
                        </div>) ) }
                    </div>
                </> : null }
                <div className='module-block__right'>
                    <Scheme className='module-block__scheme'/>
                    <Scheme className='module-block__scheme-mobile'/>
                </div>
            <Borders />
        </div>
    </>)
}

export default ModuleBlock;