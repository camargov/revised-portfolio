import { Link } from 'gatsby';
import React from 'react';

const NavBar = () => {
    return ( 
        <div>
            <img />
            <ul>
                <Link to='/'>Home</Link>
                <Link>Projects</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
     );
}
 
export default NavBar;