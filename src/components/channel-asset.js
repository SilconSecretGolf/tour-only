import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Col } from 'react-bootstrap'

export const GetChannelAsset = (channelAsset) => {
  var item
  var itemBody = <p className="mt-3"><b>{channelAsset.title}</b>
    {channelAsset.description && <div dangerouslySetInnerHTML={{ __html: channelAsset.description.childMarkdownRemark.html }}/>}
  </p>
  switch (channelAsset.__typename) {
    case 'ContentfulImage':
      item = <div>
                <GatsbyImage image={getImage(channelAsset.image)} alt={channelAsset.title}/>
      </div>
      break
    case 'ContentfulPodcast':
      item = <div>
        <iframe title={`Spotify - ${channelAsset.title}`} src={channelAsset.spotifyId} width="100%" height="232"
                frameBorder="0" allowTransparency="true" allow="encrypted-media" />
      </div>
      break
    case 'ContentfulVideo':
      item = <div className="ratio ratio-16x9">
        <video-js data-account="6057949417001" data-player="oSZ08U60i"
                  data-embed="default" controls="" data-video-id={channelAsset.videoId} data-playlist-id=""
                  data-application-id="" class="vjs-fluid"/>
      </div>
      break
    case 'ContentfulChannel':
      item = <a href={"/" + channelAsset.slug}><div>
        <GatsbyImage image={getImage(channelAsset.listImageFull)} alt={channelAsset.title}/>
        </div></a>
      itemBody = <p className="mt-3"><b><a className="link-dark" href={"/" + channelAsset.slug}>{channelAsset.title}</a></b>
        {channelAsset.description && <div dangerouslySetInnerHTML={{ __html: channelAsset.description.childMarkdownRemark.html }}/>}
      </p>
      break

    case 'ContentfulDownload':
      var fileUrl = "#"
      if (channelAsset.file) {
        fileUrl = channelAsset.file.file.url
      }
      item = <a href={fileUrl}><div>
        <GatsbyImage image={getImage(channelAsset.image)} alt={channelAsset.title}/>
      </div></a>
      itemBody = <p className="mt-3"><b><a className="link-dark" href={fileUrl}>{channelAsset.title}</a></b>
        {channelAsset.description && <div dangerouslySetInnerHTML={{ __html: channelAsset.description.childMarkdownRemark.html }}/>}
      </p>
      break

    default:
      item = <div>Unknown type: {channelAsset.__typename}</div>
  }
  return <Col sm={{span: 12}} md={{span: 6}} className="mb-4">
    {item}
    {itemBody}
  </Col>


}
