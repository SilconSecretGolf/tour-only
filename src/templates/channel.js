import "../styles/style.scss"
import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import { GetChannelAsset } from '../components/channel-asset'
import BackButton from '../components/back-button'

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
              <BackButton/>
            </Col>
          </Row>
          <Row>
          {channel.videos && channel.videos.map(asset => {
            return GetChannelAsset(asset)
          })}
          </Row>
          <Row>
            <Col md={{span: 12}} className="mb-2">
              <BackButton/>
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
          ... on ContentfulDownload {
              title
              description {
                  childMarkdownRemark {
                      html
                  }
              }
              image {
                  contentful_id
                  gatsbyImageData(
                      layout: CONSTRAINED
                  )
              }
              file {
                  file { url }
                  
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
