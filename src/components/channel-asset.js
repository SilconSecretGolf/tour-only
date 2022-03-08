import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Col } from 'react-bootstrap'

export const GetChannelAsset = (channelAsset) => {
  var item
  switch (channelAsset.__typename) {
    case 'ContentfulImage':
      item = <div className="ratio">
                <GatsbyImage image={getImage(channelAsset.image)} alt={channelAsset.title}/>
      </div>
      break;
    case 'ContentfulPodcast':
      item = <div className="ratio">
        <iframe title={`Spotify - ${channelAsset.title}`} src={`https://open.spotify.com/embed-podcast/show/${channelAsset.spotifyId}`} width="100%" height="232"
                frameBorder="0" allowTransparency="true" allow="encrypted-media" />
      </div>
      break;
    case 'ContentfulVideo':
      item = <div className="ratio ratio-16x9">
        <video-js data-account="6057949417001" data-player="oSZ08U60i"
                  data-embed="default" controls="" data-video-id={channelAsset.videoId} data-playlist-id=""
                  data-application-id="" class="vjs-fluid"/>
      </div>
      break;

    default:
      item = <div>Unknown type: {channelAsset.__typename}</div>
  }
  return <Col sm={{span: 12}} md={{span: 6}} className="mb-4">
    {item}
    <p className="mt-3"><b>{channelAsset.title}</b>
      <div dangerouslySetInnerHTML={{ __html: channelAsset.description.childMarkdownRemark.html }}/>
    </p>
  </Col>


}
