import React from 'react'
import styled from 'styled-components'

import ImageContent from '../ImageContent'
import InvisionContent from '../InvisionContent'
import WebsiteContent from '../WebsiteContent'
import VideoContent from '../VideoContent'

// styled components
const Container = styled.div`

`

const Text = styled.p`

`

// component
export default function SearchField(props) {
  
  switch(props.type) {
    case 'Invision':
      return <ImageContent {...props} />
    case 'Website':
      return <InvisionContent {...props} />
    case 'Image':
      return <WebsiteContent {...props} />
    case 'Video':
      return <VideoContent {...props} />
    default:
      return null;
  }

}