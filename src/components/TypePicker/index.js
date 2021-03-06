import React from 'react'
import styled from 'styled-components'

import TwoImage from '../ImageTwo'
import ImageContent from '../ImageContent'
import InvisionContent from '../InvisionContent'
import WebsiteContent from '../WebsiteContent'
import VideoContent from '../VideoContent'

// styled components
const Container = styled.div`
  width: 77%;
  height:  100%;
  margin-left: 23%;
`

// component
function TypePicker(props) {
  console.log(props);
  
  switch(props.type.toLowerCase()) {
    case 'invision':
      return <InvisionContent {...props} />
    case 'website':
      return <WebsiteContent {...props} />
    case 'image':
      return <ImageContent {...props} />
    case 'imagetwo':
      return <TwoImage {...props} />
    case 'video':
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