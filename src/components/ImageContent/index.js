import React from 'react'
import styled from 'styled-components'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`

const Text = styled.p`

`

const Image = styled.img`
  width: 90%;
  height: 100%;
  max-height: 80vh;

  object-fit: contain;
  margin: 10% 0;
  border: 1px solid black;
`

// component
export default function SearchField(props) {
  return (
    <Container>
      {props.projectLink && (
          <Image src={"../" + props.projectLink} />
      )}


      {props.imageOne && (
        <Image src={"../../" + props.imageOne.relativePath} />
      )}

      {props.imageTwo && (
        <Image src={"../../" + props.imageTwo.relativePath} />
      )}

      {props.imageThree && (
        <Image src={"../../" + props.imageThree.relativePath} />
      )}

      
    </Container>
  )
}