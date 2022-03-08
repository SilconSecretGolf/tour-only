import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import {Container, Row, Col} from 'react-bootstrap'
import { useChannelList} from '../hooks/use-channel-list'

export default function Footer() {
  const channelList = useChannelList()

  var footerStyle = {}
  var footerBody = ''
  if (channelList.footerForegroundImage) {
    footerBody = <img alt="channel logo" className="img-fluid mx-auto d-block" src={channelList.footerForegroundImage.file.url} />
  }
  if (channelList.footerBackgroundImage) {
    footerStyle = {
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundImage: `url("${channelList.footerBackgroundImage.file.url}")`
    }
  }

  return <footer className="p-2" style={footerStyle}>
    <Container>
      <Row>
        <Col sm={{span: 12}}>{footerBody}</Col>
      </Row>
    </Container>
    </footer>
}
