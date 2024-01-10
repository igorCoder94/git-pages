import './style.scss';
import { useState } from 'react';

import Borders from '../../../shared/borders/index';
import newsData from './data';

const NewsCard = ({ cardData }) => {
    return (
            <div className='news-cards__block'>
                <img className='news-cards__img' src={cardData.image} alt="" />
                <div className='news-cards__content'>
                    <div className='news-cards__text'>{ cardData.date }</div>
                    <div className='news-cards__subtitle'>{ cardData.title }</div>
                    
                    { cardData.content.map((content) => {
                        return (
                        <>
                            { content.text ? <div className='news-cards__text'>{ content.text }</div> : null }

                            {content.list.length ? <div className='news-cards__text'>
                                <ul className='news-cards__ul'>
                                    { content.list.map((li) => (
                                        <>
                                            <li>{ li }</li>
                                        </>   
                                    )) }
                                </ul>
                            </div> : null }
                        </>
                        
                        )
                    })}                   
                    
                    {/* <div className='news-cards__link'>Подробнее ></div> */}
                </div>
                <div className='news-cards__bottom-white'></div>
            </div>
    )
}

const NewsCards = () => {
    const [cardsCount, setCardsCount] = useState(3);

    function onLoadMore(count) {
        setCardsCount(count + 3);
    }

    return <section className='news-cards__section'>
        <div className='news-cards__container container'>
            <div className='news-cards__blocks'>
                { newsData.map((cardData, index) => {
                    if(cardsCount > index) {
                        return (
                        <NewsCard cardData={cardData} />
                    ) } else {
                        return null
                    }
                })}
            </div>
            { cardsCount < newsData.length ? <div className='news-cards__button' onClick={() => onLoadMore(cardsCount)}>Показать ещё</div>
             : null }

            <Borders />
        </div>
    </section >
}

export default NewsCards;