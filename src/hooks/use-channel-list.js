import { useStaticQuery, graphql } from "gatsby"
export const useChannelList = () => {
  const data = useStaticQuery(graphql`
    query ChannelListQuery{
        
        allContentfulChannelList {
            nodes {
                title
                channels {
                    ...ChannelFragment
                }

                headerBackgroundImage {
                    title
                    file { url }
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: TRACED_SVG
                    )
                }
                headerForegroundImage {
                    title
                    file { url }
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: TRACED_SVG
                    )
                }
                footerBackgroundImage {
                    title
                    file { url }
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: TRACED_SVG
                    )
                }
            }
        }        
    }`
  )
  return data.allContentfulChannelList.nodes[0]
}
