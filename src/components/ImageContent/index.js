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
`

const Text = styled.p`

`

const Image = styled.img`

`

// component
export default function SearchField(props) {
  return (
    <Container>
      {props.projectLink && (
        <div>
          <Image src={"../" + props.projectLink} />
        </div>
      )}

      {props.projectList && props.projectList.map(({ image: text }) => {
        <ImageContainer>
          <Image src={"../" + image.relativePath} />
        </ImageContainer>
      })}
      
      
    </Container>
  )
}