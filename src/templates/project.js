import React from 'react';
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from "gatsby"

const Project = ({ data }) => {
    const document = data.prismicProject.data;

    return ( 
        <Layout>
            <Hero 
                title={document.project_title.text}
                subtitle={document.project_characteristics}
                containsButton={false}
            />
            <div className='article-container'>
                <div className='article-text-container'>
                    <h2>{document.overview_header.text}</h2>
                    <p>{document.overview_description}</p>
                </div>
                <div className='article-image-container'>
                    <img src={document.overview_image.url} alt="temp"/>
                </div>
            </div>
            <div className='sections-container'>
                {document.phase.map(section => {
                    return (
                        <div className='section-container'>
                            <div className='section-text-container'>
                                <h2>{section.section_header.text}</h2>
                                <p>{section.phase_description}</p>
                            </div>
                            <div className='section-image-container'>
                                <img src={section.phase_image.url} alt="temp"/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Layout>
     );
}

export const query = graphql`
    query ProjectQuery($uid: String) {
        prismicProject(uid: {eq: $uid}) {
            data {
                project_title {
                    text
                }
                project_characteristics
                background {
                    url
                }
                overview_header {
                    text
                }
                overview_description
                overview_image {
                    url
                }
                phase {
                    section_header {
                        text
                    }
                    phase_description
                    phase_image {
                        url
                    }
                }
            }
        }
    }
`
 
export default Project;