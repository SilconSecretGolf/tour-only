import "../styles/style.scss"
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import { GetChannelAsset } from '../components/channel-asset'

import { Row, Col, Container } from 'react-bootstrap'

class ChannelTemplate extends React.Component {
  render() {
    const channel = get(this.props, 'data.contentfulChannel')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={channel.title}
          description={channel.title}
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
          {channel.videos.map(asset => {
            return GetChannelAsset(asset)
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
      headerImage {
          contentful_id
          file {
              url
          }
          gatsbyImageData(
              layout: CONSTRAINED
          )
      }
      headerBackgroundImage {
          contentful_id
          file {
              url
          }
          gatsbyImageData(
              layout: CONSTRAINED
          )
      }
      videos {
          __typename
          ... on ContentfulVideo {
              videoId
              title
              description {
                  childMarkdownRemark {
                      html
                  }
              }
          }
          ... on ContentfulImage {
              title
              description {
                  childMarkdownRemark {
                      html
                  }
              }
              image {
                  contentful_id
                  gatsbyImageData (layout: CONSTRAINED)
                  file { url }
              }
          }
          
          ... on ContentfulPodcast {
              title
              description {
                  childMarkdownRemark {
                      html
                  }
              }
              spotifyId
          }
          
          ... on ContentfulChannel {
              title
              slug
              description {
                  childMarkdownRemark {
                      html
                  }
              }
              listImageFull {
                  contentful_id
                  gatsbyImageData(
                      layout: CONSTRAINED
                  )
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
