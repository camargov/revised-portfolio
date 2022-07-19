import React from 'react';
import { useContactBannerData } from '../hooks/use-contact-banner-data';

const ContactBanner = () => {
    const { data } = useContactBannerData();

    return ( 
        <div className='contact-banner-container'>
            <div className='contact-banner-title-container'>
                <h2>{data.contact_banner_title}</h2>
            </div>
            <div className='contact-banner-list-container'>
                {data.contact_list.map(contact => {
                    return (
                        <div>
                            <img src={contact.contact_type_image.url}/>
                            <a href={contact.contact_type_link.url}>{contact.contact_type}</a>
                        </div>
                    );
                })}
            </div>
        </div>
     );
}
 
export default ContactBanner;