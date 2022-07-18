import { graphql } from 'gatsby';
import React from 'react';
import ContactBanner from '../components/ContactBanner';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

/*
TODO: 
- add alt to image
- add contact button in prismic
*/

const About = ({ data }) => {
    const document = data.prismicAboutMe.data;

    return ( 
        <div>
            <Layout>
                <Hero 
                    title={document.about_me_header.text} 
                    subtitle={document.about_me_sentence.text} 
                    containsButton={true} 
                    buttonText=''
                    buttonLink=''
                    backgroundImage={document.background.url}
                />
                <div className='overview-container'>
                    <img src={document.headshot.url} alt='Photo of Viviana Camargo'/>
                    <div className='overview-text-container'>
                        <h2>{document.overview_header.text}</h2>
                        <p>{document.overview_description}</p>
                    </div>
                </div>
                <div className='more-info-container'>
                    {document.more_info_group.map(group => {
                        return (
                            <div>
                                <img src={group.more_info_photo.url}/>
                                <div>
                                    <h2>{group.more_info_header.text}</h2>
                                    <p>{group.more_info_description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='photo-row'>
                    {document.photo_group.map(photo => {
                        return <img src={photo.personal_photo.url}/>
                    })}
                </div>
                <div className='more-facts-about-me-container'>
                    <h1>{document.facts_header.text}</h1>
                    <div>
                        {document.facts_list.map(listItem => {
                            return <h2>{'Fun Fact: ' + listItem.fact}</h2>
                        })}
                    </div>
                </div>
                <ContactBanner />
            </Layout>
        </div>
     );
}
 
export const query = graphql`
    query AboutQuery {
        prismicAboutMe {
            data {
                about_me_header {
                    text
                }
                about_me_sentence {
                    text
                }
                background {
                    url
                }
                overview_description
                overview_header {
                    text
                }
                photo_group {
                    personal_photo {
                        url
                    }
                }
                facts_header {
                    text
                }
                facts_list {
                    fact
                }
                headshot {
                    url
                }
                more_info_group {
                    more_info_description
                    more_info_header {
                        text
                    }
                    more_info_photo {
                        url
                    }
                }
            }
        }
    }
`;

export default About;