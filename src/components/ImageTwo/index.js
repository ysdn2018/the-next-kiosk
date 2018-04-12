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
  justify-content: space-between;
  align-items: center;

  
`

const Text = styled.p`

`

const Image = styled.img`
  width: 90%;
  height: 100%;
  max-height: 80vh;

  object-fit: contain;
  margin: 10% 0;
`

// component
export default function SearchField(props) {
console.log(props);


  return (
    <Container>

      {props.imageOne && (
        <Image src={"../../" + props.imageOne.relativePath} />
      )}

      {props.imageTwo && (
        <Image src={"../../" + props.imageTwo.relativePath} />
      )}


      
    </Container>
  )
}