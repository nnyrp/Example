import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

class ServiceItem extends React.Component {
  render () {
    const { service } = this.props
    const status = service.upToDate ? 'success' : 'warning'

    const colours = {
      success: '#27ae60',
      warning: '#d9534f'
    }

    const Container = Styled.div`
      margin: 10px;
      background-color: ${colours[ status ]};
      padding: 30px 10px;
      border-radius: 3px;
      `

    const Name = Styled.span`
      color: #FFF;
      font-weight: 900;
    `

    const Status = Styled.span`
      color: #FFF;
      float: right;
      text-transform: uppercase;
      font-weight: 300;
    `

    return (
      <Container>
        <Name>{service.name.toUpperCase()}</Name>
        <Status>{service.upToDate ? 'Up to date' : 'Outdated'}</Status>
      </Container>
    )
  }
}

ServiceItem.propTypes = {
  service: PropTypes.object
}

export default ServiceItem
