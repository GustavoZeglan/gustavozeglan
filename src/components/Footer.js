import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn ,faGithub } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
        <h3>Gustavo Zeglan <span>Portfolio</span></h3>
 
        <div className="contacts">
            <a href=""><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href=""><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        
        <p>© 2023 Gustavo Zeglan</p>
        
    </footer>
  )
}

export default Footer