import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"

export const GetOptions = () => {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <span style={{ whiteSpace: "pre-line" }}>{children}</span>
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1><br />{children}</h1>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2><br />{children}</h2>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3><br />{children}</h3>
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return <h4><br />{children}</h4>
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        return <h5><br />{children}</h5>
      }
    }
  }
}
