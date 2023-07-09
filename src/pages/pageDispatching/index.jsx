import './style.scss';
import Hero from './hero';
import Integration from './integration';
import SolutionsDim from './solutions-dim';
import SolutionService from './solutions-service';
import Scheme from './scheme';

const PageDispatching = () => {
    return (
        <>
            <Hero />
            <SolutionsDim />
            <SolutionService />
            <Integration />
            <Scheme />
        </>
    )
}

export default PageDispatching;