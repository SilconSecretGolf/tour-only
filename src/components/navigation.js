import React from 'react'
import {useChannelList} from '../hooks/use-channel-list'

const Navigation = ({channel}) => {
  var mainStyle = {
    background: "white"
  }
  var maskStyle = {}
  var navBody = <span>TOUR <span className={"mob_hidden"}>GOLF</span> WEEKLY
    <span className="desc">Exclusive content from inside the LPGA and PGA Tours</span></span>
  var channelList = useChannelList()

  if (channel) {
    navBody = ""
    if (channel.headerBackgroundImage) {
      mainStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("${channel.headerBackgroundImage.file.url}")`
      }
    }
    if (channel.headerImage) {
      navBody = <img alt="channel logo" className="img-fluid mx-auto d-block nav-logo p-0" src={channel.headerImage.file.url} />
    }
  }
  else {
    if (channelList.headerForegroundImage) {
      navBody = <img alt="channel logo" className="img-fluid mx-auto d-block nav-logo p-3" src={channelList.headerForegroundImage.file.url} />
    }
    if (channelList.headerBackgroundImage) {
      mainStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("${channelList.headerBackgroundImage.file.url}")`
      }

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
