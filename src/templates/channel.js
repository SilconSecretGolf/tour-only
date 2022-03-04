import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Navigation from '../components/navigation'

import { Row, Col, Container } from 'react-bootstrap'

class ChannelTemplate extends React.Component {
  render() {
    const channel = get(this.props, 'data.contentfulChannel')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={channel.title}
          description={channel.description.childMarkdownRemark.excerpt}
          image={``}
        />
        <Navigation channel={channel}/>
        <Container className="mt-2">
          <Row>
            <Col md={{span: 12}} className="mb-2">
              <a href="/"><span className="fs-3 link-dark oi oi-arrow-thick-left">&nbsp;</span></a>
            </Col>
          </Row>
          <Row>
          {channel.videos.map(video => {
            return <Col sm={{span: 12}} md={{span: 6}} className="mb-4">
                <div className="ratio ratio-16x9">
                  <video-js data-account="6057949417001" data-player="oSZ08U60i"
                            data-embed="default" controls="" data-video-id={video.videoId} data-playlist-id=""
                            data-application-id="" className="vjs-fluid"/>
                </div>
                <p className="mt-3"><b>{video.title}</b>
                  <div className="display-inline" dangerouslySetInnerHTML={{ __html: video.description.childMarkdownRemark.html }}/>
                </p>
            </Col>
          })}
          </Row>
          <Row>
            <Col md={{span: 12}} className="mb-2">
              <a href="/"><span className="fs-3 link-dark oi oi-arrow-thick-left">&nbsp;</span></a>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default ChannelTemplate

export const channelFragment = graphql `
  fragment ChannelFragment on ContentfulChannel {
      title
      slug
      description {
          childMarkdownRemark {
              html
          }
      }
      featured
      listImageFull {
          contentful_id
          gatsbyImageData(
              layout: CONSTRAINED
          )
      }
      videos {
        title
        videoId
        description {
            childMarkdownRemark {
                html
            }
        }
      }
      header {
          title
          backgroundColor1
          backgroundColor2
          image {
              title
              file {
                  url
              }
          }
          backgroundImage {
              title
              file {
                  url
              }
          }
      }
  }
`
export const pageQuery = graphql`
  query ChannelPageBySlug(
    $slug: String!
  ) {
    contentfulChannel(slug: { eq: $slug }) {
        ...ChannelFragment
    }
  }
`
