import {Logo} from '../mockData/Logo';

const Header = () => {
    return (
        <div className="header-container page-width">
            <div className="logo">
              <img src={Logo} alt="Logo" /> 
            </div>
            <div className="nav">
                <ul className="nav-container">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;