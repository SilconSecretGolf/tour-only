const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const channelTemplate = path.resolve('./src/templates/channel.js')

  const result = await graphql(`query {
        allContentfulChannel {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Channels`,
      result.errors
    )
    return
  }

  const channels = result.data.allContentfulChannel.nodes

  // Create channel pages
  if (channels.length > 0) {
    channels.forEach((channel, index) => {
      createPage({
        path: `/${channel.slug}`,
        component: channelTemplate,
        context: {
          slug: channel.slug
        },
      })
    })
  }
}
