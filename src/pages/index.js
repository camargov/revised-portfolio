import { graphql, Link } from "gatsby"
import * as React from "react"
import ContactBanner from "../components/ContactBanner"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

/* 
TODO:
- learn how to implement links from Prismic
*/

const IndexPage = ({ data }) => {
  const document = data.prismicHomepage.data;
  
  return (
    <div>
      <Layout>
        <Hero 
          title={document.portfolio_title} 
          subtitle={document.portfolio_subtitle} 
          containsButton={true} 
          buttonText={document.about_me_button_text}
          buttonLink={document.about_me_button_link}
        />
        <div className="project-tree-container">
          <h1>{document.project_tree_header.text}</h1>
          <div className="project-tree">
            {document.project_tree_group.map((project) => {
              return (
                <div key={project.uid}>
                  {/* add image*/}
                  <h2>{project.project_category}</h2>
                </div>
              )
            })}
          </div>
        </div>
        <ContactBanner />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query Homepage {
    prismicHomepage {
      data {
        portfolio_title
        portfolio_subtitle
        portfolio_background_image {
          url
        }
        project_tree_header {
          text
        }
        project_tree_group {
          project_category
          project_image {
            url
          }
          project_page_link {
            url
          }
        }
        about_me_button_text
        about_me_button_link {
          url
        }
      }
    }
  }
`


export default IndexPage
