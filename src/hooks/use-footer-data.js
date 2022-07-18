import { useStaticQuery, graphql } from "gatsby";

export const useFooterData = () => {
    const { prismicFooter } = useStaticQuery(
        graphql`
            query FooterQuery {
                prismicFooter {
                    data {
                        footer_description
                        footer_title
                    }
                }
            }
        `
    )

    return prismicFooter.data;
}