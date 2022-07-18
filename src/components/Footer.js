import { Link } from 'gatsby';
import React from 'react';
import { useFooterData } from '../hooks/use-footer-data';
import { useNavData } from '../hooks/use-nav-data';

const Footer = () => {
    const { footer_description, footer_title } = useFooterData();
    const { data } = useNavData();

    return ( 
        <div>
            <h2>{footer_title}</h2>
            <p>{footer_description}</p>
            <div>
                {data.nav_links.map(link => {
                    return (
                        <Link to={link.page_link.url}>{link.page}</Link>
                    );
                })}

            </div>
        </div>
     );
}
 
export default Footer;