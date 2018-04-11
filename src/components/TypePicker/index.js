import React from 'react'
import styled from 'styled-components'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`

`

const Text = styled.p`

`

// component
export default function SearchField(props) {
  
  switch(props.type) {
    case 'Invision':
      return <div />
    case 'Website':
      return <div />
    case 'Image':
      return <div />
    case 'Video':
      return <div />
    default:
      return null;

  }

}

'Website'
'Video'
'Invision'
'Image'