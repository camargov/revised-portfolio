import { useStaticQuery, graphql } from "gatsby";

export const useContactBannerData = () => {
    const { prismicContactBanner } = useStaticQuery(
        graphql`
            query ContactBannerQuery {
                prismicContactBanner {
                    data {
                        contact_banner_title
                        contact_list {
                            contact_type
                            contact_type_link {
                                url
                            }
                            contact_type_image {
                                url
                            }
                        }
                    }
                }
            }
        `
    )

    return prismicContactBanner;
}