import React from 'react'

import Seo from './seo'
import Footer from './footer'

class Template extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = "//players.brightcove.net/6057949417001/oSZ08U60i_default/index.min.js"
    document.body.appendChild(script)
  }

  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
