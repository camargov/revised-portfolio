import { Link } from 'gatsby';
import React from 'react';


const LinkButton = ({ text, textLink }) => {
    return ( 
        <Link to={textLink}>{text}</Link>
     );
}
 
export default LinkButton;