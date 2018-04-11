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

// component
export default function SearchField(props) {
  return (
    <Container>
      <Text>invision</Text>
    </Container>
  )
}