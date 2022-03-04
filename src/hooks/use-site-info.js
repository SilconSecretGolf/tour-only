import { useStaticQuery, graphql } from "gatsby"
export const useSiteInfo = () => {
  const data = useStaticQuery(graphql`
    query SiteInfoQuery{
        allContentfulSiteInfo {
          nodes {
            title
            subtitle
            mobileSubtitle
            footerText  
            footerLogo {
                title
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 348
                    placeholder: TRACED_SVG
                )
            }  
          }
        }        
    }`
  )
  return data.allContentfulSiteInfo.nodes[0]
}
