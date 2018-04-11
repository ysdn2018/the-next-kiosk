import React from 'react'
import styled from 'styled-components'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const VideoContainer = styled.div`
  width: 90%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

`;

const Video = styled.video`
  width: 100%;
  border: 1px solid black;
`

// component
export default function SearchField(props) {
  return (
    <Container>
      {props.projectLink && (
        <VideoContainer>
          <Video src={"../" + props.projectLink} controls/>
        </VideoContainer>
      )}

      
    </Container>
  )
}