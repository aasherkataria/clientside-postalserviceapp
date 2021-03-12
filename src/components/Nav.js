import '../App.css';
import {Link} from 'react-router-dom';
import '../App.js';

function Nav() {
    const navStyle = {
        color: 'white'
    }
  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={navStyle} to='/packages'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
