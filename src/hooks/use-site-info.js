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
                file { url }
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: TRACED_SVG
                )
            }  
          }
        }        
    }`
  )
  return data.allContentfulSiteInfo.nodes[0]
}
