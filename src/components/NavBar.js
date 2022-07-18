import { Link } from 'gatsby';
import { useNavData } from '../hooks/use-nav-data'
import React from 'react';

const NavBar = () => {
    const { data } = useNavData();

    return ( 
        <div>
            <img src={data.personal_logo.url} alt='Personal Logo' />
            <ul>
                {data.nav_links.map(link => {
                    return (
                        <Link to={link.page_link.url}>{link.page}</Link>
                    );
                })}
            </ul>
        </div>
     );
}
 
export default NavBar;