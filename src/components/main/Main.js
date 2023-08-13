import Promo from './promo/Promo';
import AboutMe from './aboutMe/AboutMe';
import AboutProject from './aboutProject/AboutProject';
import Techs from './techs/Techs';
import NavTab from './navTab/NavTab';
import Portfolio from './portfolio/Portfolio';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './Main.css';

function Main() {

  return (
    <>
      <Header />
      <main className='main-page'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;