import React, { Component } from 'react'
import Styled from 'styled-components'

class Status extends Component {
  render () {
    const Container = Styled.div`
      margin-bottom: 30px;
      background-color: #F29100;
      padding: 30px 10px;
      border-radius: 3px;
    `

    const Message = Styled.h2`
      margin: 0;
      color: #FFF;
      font-weight: 300;
      text-transform: uppercase;
      font-size: 20px;
    `

    const LastUpdated = Styled.span`
      float: right;
      color: #FFF;
      text-transform: uppercase;
      font-weight: 300;
    `

    return (
      <Container>
        <Message>Some services are outdated</Message>
        <LastUpdated>Last updated: 38 seconds ago</LastUpdated>
      </Container>
    )
  }
}

export default Status
