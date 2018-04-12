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
  flex-direction: column;

  ${props => props.videoTwo && "height: auto;"}
`


const Video = styled.video`
  width: 90%;
  border: 1px solid black;

  object-fit: contain;
  margin: 10% 0;
`

const VideoTwo = Video.extend`
height: 50vh;
`

// component
export default function SearchField(props) {
  return (
    <Container {...props}>
      {props.projectLink && (
          <Video src={"../" + props.projectLink} controls autoPlay/>
      )}

      {props.videoOne && (
          <VideoTwo src={"../" + props.videoOne} controls  autoPlay/>
      )}

      {props.videoTwo && (
          <VideoTwo src={"../" + props.videoTwo} controls />
      )}

      
    </Container>
  )
}