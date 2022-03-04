import React from 'react'

const Navigation = ({channel}) => {
  var mainStyle = {
    background: "white"
  }
  var maskStyle = {}
  var navBody = <span>TOUR <span className={"mob_hidden"}>GOLF</span> WEEKLY
    <span className="desc">Exclusive content from inside the LPGA and PGA Tours</span></span>

  if (false && channel !== undefined) {
    navBody = ""
    var header = channel.header
    if (header.backgroundColor1 && header.backgroundColor2) {
      mainStyle = {
        background: `linear-gradient(90deg, ${header.backgroundColor1} 0%, ${header.backgroundColor2} 29%, ${header.backgroundColor2} 79%, ${header.backgroundColor1} 100%)`
      }
      if (header.backgroundImage && header.backgroundImage.file.url) {
        maskStyle = {
          maxWidth: "728px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url('${header.backgroundImage.file.url}')`
        }
      }
    }
    else if (header.backgroundImage && header.backgroundImage.file.url) {
      mainStyle = {
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundImage: `url("${header.backgroundImage.file.url}")`
      }
    }
    if (header.image) {
      navBody = <img alt="channel logo" className="img-fluid mx-auto d-block nav-logo p-2" src={header.image.file.url} />
    }
  }
  return <nav className="navbar p-0" style={mainStyle}>
    <div className="container-fluid nav-mask" style={maskStyle}>
      <a className="navbar-brand w-100 me-1 p-0" href="#">
        {navBody}
      </a>
    </div>
  </nav>
}
export default Navigation
