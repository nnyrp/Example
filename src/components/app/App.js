import React, { Component, Fragment } from 'react'
import { injectGlobal } from 'styled-components'
import { Page } from 'hedron';

import ServicesList from '../services/ServicesList'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Welcome from '../welcome/Welcome'
import Status from '../status/Status'

injectGlobal`
  body{
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Page>
          <Status />
          <Welcome />
          <ServicesList />
        </Page>
        <Footer />
      </Fragment>
    )
  }
}

export default App
