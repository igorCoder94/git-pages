import './App.scss';
import { Route, Routes } from "react-router-dom";
import PageRequest from "./pages/pageRequest";
import PageDispatching from "./pages/pageDispatching"
import PageMain from "./pages/pageMain";
import Header from './core/header';
import Footer from './core/footer';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from './core/header/menu';
import ConnectUs from './shared/popups/connect-us';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  function togglePopup(close) {
    if (close) {
      setIsPopupOpen(false);

      return;
    }
    setIsPopupOpen(prevState => !prevState);
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

  return (
    <div className="App">
      <div id='App__container' className={`App__container ${chooseBackgroundClass()}`}>
        <Menu open={isMenuOpen} toggleMenu={toggleMenu} togglePopup={togglePopup}/>
        <Header toggleMenu={toggleMenu} togglePopup={togglePopup} />
        <main>
          <Routes>
            <Route path="/" element={<PageMain />} ></Route>
            <Route path="/request" element={<PageRequest />} ></Route>
            <Route path="/dispatching" element={<PageDispatching />} ></Route>
          </Routes>
        </main>
        <Footer togglePopup={togglePopup} />
      </div>
      {isMenuOpen ? <div className='overlay-dark'></div> : null}
      {isPopupOpen ? <ConnectUs togglePopup={togglePopup} /> : null}
    </div>
  );
}

export default App;
