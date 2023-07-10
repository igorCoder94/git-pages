import './App.scss';
import { Route, Routes } from "react-router-dom";
import PageBusiness from "./pages/pageBusiness";
import PageDispatching from "./pages/pageDispatching"
import PageMain from "./pages/pageMain";
import Header from './core/header';
import Footer from './core/footer';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from './core/header/menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  function chooseBackgroundClass() {
    switch (location.pathname) {
      case '/':
        return 'background-main';
      default:
        return 'background-dark';
    }
  }

  function toggleMenu(close) {
    if (close) {
      setIsMenuOpen(false);

      return;
    }
    setIsMenuOpen(prevState => !prevState);
  }

  useEffect(() => {
    document.getElementById('App__container').scrollTo({
      top: 0,
      behavior: 'instant',
    });

    setTimeout(() => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1)).scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 200);
  }, [location.pathname]);

  useEffect(() => {
    const app = document.getElementById('App__container');

    app.addEventListener('scroll', (e) => {
      console.log(e);
    })

    return () => app.removeEventListener('scroll', (e) => { });
  }, []);

  return (
    <div className="App">
      <div id='App__container' className={`App__container ${chooseBackgroundClass()}`}>
        <Menu open={isMenuOpen} toggleMenu={toggleMenu} />
        <Header toggleMenu={toggleMenu} />
        <main>
          <Routes>
            <Route path="/" element={<PageMain />} ></Route>
            <Route path="/business" element={<PageBusiness />} ></Route>
            <Route path="/dispatching" element={<PageDispatching />} ></Route>
          </Routes>
        </main>
        <Footer />
      </div>
      {isMenuOpen ? <div className='overlay-dark'></div> : null}
    </div>
  );
}

export default App;
