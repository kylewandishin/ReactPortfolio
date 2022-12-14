import './index.scss';
import { Link, NavLink} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    return <>
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
            <div className='subtitle'>Kyle</div>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/" >
                <FontAwesomeIcon icon = {faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kyle-wandishin-1b45b3250/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/dishman1805">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    </>
}

export default Sidebar;