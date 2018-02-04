import React, { Component } from 'react'
import Styled from 'styled-components'

class Status extends Component {
  render () {
    const Container = Styled.div`
      margin-bottom: 30px;
    `

    const Name = Styled.h1`
      font-size: 80px;
      font-weight: 300;
      margin: 0;
      display: table-cell;
      vertical-align: middle;
      padding-right: 15px;
      border-right: 1px solid #e0e0e0;
    `

    const Content = Styled.p`
      padding: 10px;
      display: table-cell;
      vertical-align: middle;
    `

    return (
      <Container>
        <Name>STATUS</Name>
        <Content>Welcome to the Divido service status page. Here you will find real-time information about status of our services.</Content>
      </Container>
    )
  }
}

export default Status
