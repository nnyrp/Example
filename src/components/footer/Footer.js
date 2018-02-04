import React, { Component } from 'react'
import Styled from 'styled-components'

class Footer extends Component {
  render () {
    const Container = Styled.footer`
      margin-top: 30px;
      background-color: #444;
      text-align: center;
      verticle-align: middle;
    `

    const Copyright = Styled.p`
      color: #FFF;
      padding: 30px 0;
      margin: 0;
      text-transform: uppercase;
      font-weight: 300;
    `

    return (
      <Container>
        <Copyright>Divido 2018 &copy;</Copyright>
      </Container>
    )
  }
}

export default Footer
