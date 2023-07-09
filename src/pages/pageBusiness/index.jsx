import './style.scss';
import Hero from './hero';
import SolutionToir from './solution-toir';
import SolutionAutomation from './solution-automation';
import Control from './control';
import Scheme from './scheme';

const PageBusiness = () => {
    return (
        <>
            <Hero />
            <SolutionToir />
            <SolutionAutomation />
            <Control />
            <Scheme />
        </>
    )
}

export default PageBusiness;