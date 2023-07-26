import "./NavTab.css"
import { Link } from 'react-scroll';

function NavTab() {
  return (
    <section className="navTab">      
      <nav>
        <ul className="navTab__links">
          <li><Link to="aboutProject" className="navTab__link" smooth={true} duration={800}>О&nbsp;проекте</Link></li>
          <li><Link to="techs" className="navTab__link" smooth={true} duration={800}>Технологии</Link></li>
          <li><Link to="aboutMe" className="navTab__link" smooth={true} duration={800}>Студент</Link></li>
        </ul>
      </nav>      
    </section>
  )
}

export default NavTab;