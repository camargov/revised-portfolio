import React from 'react';
import LinkButton from './LinkButton';

const Hero = ({ title, subtitle, containsButton, buttonText, buttonLink }) => {
    return ( 
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {containsButton && <LinkButton text={buttonText} textLink={buttonLink} />}
        </div>
     );
}
 
export default Hero;