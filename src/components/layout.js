import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js"
import "../styles/style.scss"

import Seo from './seo'
import Footer from './footer'
import { Helmet } from 'react-helmet'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <main>{children}</main>
        <Footer />
        <Helmet>
          <script src="https://players.brightcove.net/6057949417001/oSZ08U60i_default/index.min.js"/>
        </Helmet>
      </>
    )
  }
}

export default Template
