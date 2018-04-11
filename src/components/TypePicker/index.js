import React from 'react'
import styled from 'styled-components'

import ImageContent from '../ImageContent'
import InvisionContent from '../InvisionContent'
import WebsiteContent from '../WebsiteContent'
import VideoContent from '../VideoContent'

// styled components
const Container = styled.div`
  width: 100%;
  height: 100%;
`

// component
function TypePicker(props) {
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

export default function TypePickerOuter(props) {
  return (
    <Container>
      <TypePicker {...props} />
    </Container>
  )
}