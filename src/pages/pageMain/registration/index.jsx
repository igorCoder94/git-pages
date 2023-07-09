import './style.scss';

const Registration = () => {
    return <section className='registration__section'>
        <div className='registration__container container'>
            <div className='registration__title'>Регистрация</div>
            <div className='registration__description'>Зарегистрируйтеся прямо сейчас и опробуйте<br />ограниченную версию платформы.</div>
            <a className='registration__link' href="https://go.unios.io">Регистрация</a>
            <div className='registration__border-left'></div>
            <div className='registration__border-left-center'></div>
            <div className='registration__border-right-center'></div>
            <div className='registration__border-right'></div>
        </div>
    </section>
}

export default Registration;