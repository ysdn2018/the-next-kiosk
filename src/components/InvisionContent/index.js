import React from 'react'
import styled from 'styled-components'
import StatementHeader from '../StatementHeader'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
`

const Text = styled.p`

`

const StatementContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Invision = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 3;
`

// component
export default class InvisionContent extends React.Component{
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container>

        <StatementContainer>
          <p>LOADING THE NEXT PROJECT</p>
        </StatementContainer>

        <Invision width="438" height="930" src={`//invis.io/${this.props.projectLink}`} autoplay frameBorder="0" />
      </Container>
    )
  }
}