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
      <Container>
        <Navigation />
        <Container className="mt-2">
          <section className="videos">
            <div className="row">
              <Layout location={this.props.location}>
                <Row>&nbsp;</Row>
                <Container className="videos mt-2">
                  <Row>
                  {channels.map((channel) => {
                    return <Col sm={12} md={6} className="mb-4">
                        <div className="ratio ratio-16x9">
                          <GatsbyImage alt={channel.title} image={getImage(channel.listImageFull)}/>
                        </div>
                        <p className="mt-3"><b>{ channel.title }</b> {channel.description && channel.description.childMarkdownRemark &&
                          <div className="display-inline" dangerouslySetInnerHTML={{ __html: channel.description.childMarkdownRemark.html }}/>}
                          <a href={channel.slug} className="link-dark"><b>View Videos</b></a></p>
                      </Col>
                })}
                  </Row>
                </Container>

              </Layout>
            </div>
          </section>
        </Container>
      </Container>
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
