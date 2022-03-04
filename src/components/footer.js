import React from 'react'

import { useSiteInfo } from '../hooks/use-site-info'
import { GatsbyImage } from 'gatsby-plugin-image'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
  const siteInfo = useSiteInfo()
  return <footer className="p-2">
    <Container>
      <Row>&nbsp;</Row>
      <Row style={{ height: "1em" }}></Row>
      <Row>
        <Col sm={{span: 12}}>
          <a href="https://www.secretgolf.com">
            <img className="img-fluid m-auto d-block mt-1 mb-1" alt={siteInfo.title} src={siteInfo.footerLogo.file.url}/>
          </a>
        </Col>
      </Row>
    </Container>
    </footer>
}
