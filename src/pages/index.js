import "../styles/style.scss"
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
        <Container className="mt-2">
                <Row>&nbsp;</Row>
                <Container class="mt-2">
                  <Row>
                  {channels.map((channel) => {
                    return <Col sm={12} md={6} className="mb-4">
                      <a href={channel.slug}>
                          <GatsbyImage alt={channel.title} image={getImage(channel.listImageFull)}/>
                      </a>
                      <p className="mt-3"><b><a className="link-dark" href={"/" + channel.slug}>{channel.title}</a></b>
                        {channel.description && <div dangerouslySetInnerHTML={{ __html: channel.description.childMarkdownRemark.html }}/>}
                      </p>
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
