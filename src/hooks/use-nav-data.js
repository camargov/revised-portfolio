import { useStaticQuery, graphql } from 'gatsby'

export const useNavData = () => {
    const { prismicNavbar } = useStaticQuery(
        graphql`
            query NavQuery {
                prismicNavbar {
                    data {
                        nav_links {
                            page
                            page_link {
                                url
                            }
                        }
                        project_links {
                            project_page
                            project_page_link {
                                url
                            }
                        }
                        personal_logo {
                            url
                        }
                    }
                }
            }
        `
    )
    
    return prismicNavbar;
}