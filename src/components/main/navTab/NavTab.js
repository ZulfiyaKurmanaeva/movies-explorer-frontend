import { Link } from 'react-scroll';

import "./NavTab.css"

function NavTab() {
  return (
    <section className="nav-tab">      
      <nav>
        <ul className="nav-tab__links">
          <li><Link to="project" className="nav-tab__link" smooth={true} duration={800}>О&nbsp;проекте</Link></li>
          <li><Link to="techs" className="nav-tab__link" smooth={true} duration={800}>Технологии</Link></li>
          <li><Link to="about-me" className="nav-tab__link" smooth={true} duration={800}>Студент</Link></li>
        </ul>
      </nav>      
    </section>
  )
}

export default NavTab;