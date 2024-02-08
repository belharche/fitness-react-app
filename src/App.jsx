import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Classes from './components/Classes';
import Contact from './components/contact/index.tsx';
import Footer from './components/Footer/index.tsx';
import Login from './components/Login';
import { SelectedPageEnum } from "./shared/SelectedPageEnum.ts";


function App() {

  const [selectedPage, setSelectedPage] = useState(SelectedPageEnum.Home);

  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPageEnum.Home);
      } else {
        setIsTopPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
  },[])

  return (
    <BrowserRouter>
      <div className="app bg-gray-20">
        <Navbar
          isTopPage={isTopPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}/>
        <Switch>
          <Route exact path="/">
            <Home
              setSelectedPage={setSelectedPage}
            />
            <Benefits
              setSelectedPage={setSelectedPage}
            />
            <Classes
              setIsTopPage={setSelectedPage}
            />
            <Contact
              setSelectedPage={setSelectedPage}
            />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;