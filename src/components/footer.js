import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import {Container, Row, Col} from 'react-bootstrap'
import { useChannelList} from '../hooks/use-channel-list'

export default function Footer() {
  const channelList = useChannelList()

  var footerStyle = {}
  if (channelList.footerBackgroundImage) {
    footerStyle = {
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundImage: `url("${channelList.footerBackgroundImage.file.url}")`
    }
  }

  return <footer className="p-2" style={footerStyle}>
    <Container>
      <Row>&nbsp;</Row>
      <Row style={{ height: "1em" }}>&nbsp;</Row>
      <Row>
        <Col sm={{span: 12}}>&nbsp;</Col>
      </Row>
    </Container>
    </footer>
}
