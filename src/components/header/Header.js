import React, { Component } from 'react'
import logo from './logo.svg'
import background from './background.svg'
import Styled from 'styled-components'

class Header extends Component {
  render () {
    const Container = Styled.header`
      background-color: #222;
      height: 170px;
      padding: 50px;
      color: white;
      text-align: center;
      background: #fff url(${background}) no-repeat 0 100%;
      margin-bottom: 30px;
    `

    const Logo = Styled.img`
      width: 300px;
    `

    const Heading = Styled.h1`
      font-size: 1.5em;
    `

    return (
      <Container>
        <Logo src={logo} alt="logo" />
        <Heading>Service Status</Heading>
      </Container>
    )
  }
}

export default Header
