import "./NavTab.css"
import { Link } from 'react-scroll';

function NavTab() {
  return (
    <section className="nav-tab">      
      <nav>
        <ul className="nav-tab__links">
          <li><Link to="aboutProject" className="nav-tab__link" smooth={true} duration={800}>О&nbsp;проекте</Link></li>
          <li><Link to="techs" className="nav-tab__link" smooth={true} duration={800}>Технологии</Link></li>
          <li><Link to="aboutMe" className="nav-tab__link" smooth={true} duration={800}>Студент</Link></li>
        </ul>
      </nav>      
    </section>
  )
}

export default NavTab;