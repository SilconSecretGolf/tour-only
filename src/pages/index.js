import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import ChannelTemplate from '../templates/channel'
import {Container, Row, Col} from 'react-bootstrap'

import Layout from '../components/layout'
import Navigation from '../components/navigation'

class RootIndex extends React.Component {
  render() {
    const channelLists = get(this, 'props.data.allContentfulChannelList.nodes')
    const channels = channelLists[0].channels

    return (
      <div>
        <Navigation />
        <Layout location={this.props.location}>
        <Container className="mt-2 videos">
                <Row>&nbsp;</Row>
                <Container className="videos mt-2">
                  <Row>
                  {channels.map((channel) => {
                    return <Col sm={12} md={6} className="mb-4">
                      <a href={channel.slug}><div className="ratio ratio-16x9">
                          <GatsbyImage alt={channel.title} image={getImage(channel.listImageFull)}/>
                      </div></a>
                      <a href={channel.slug} className="link-dark"><p className="mt-3"><b>{ channel.title }</b></p></a>
                      </Col>
                })}
                  </Row>
                </Container>
        </Container>
        </Layout>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
      allContentfulChannelList {
          nodes {
              channels {
                  ... ChannelFragment
              }
          }
      }
  }
`
