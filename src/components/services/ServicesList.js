
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import React from 'react'
import * as servicesActions from '../../actions/servicesAction'
import ServiceItem from './ServiceItem'
import { Row, Column } from 'hedron';


class ServicesList extends React.Component {
  componentWillMount () {
    this.props.servicesActions.fetchServices()
  }

  render () {
    return (
      <Row>
        {this.props.services.map((service, index) => {
          return (
            <Column key={index} fluid sm={6}>
              <ServiceItem service={service} />
            </Column>
          )
        })}
      </Row>
    )
  }
}

ServicesList.propTypes = {
  servicesActions: PropTypes.object,
  services: PropTypes.array
}

function mapStateToProps (state) {
  return {
    services: state.services
  }
}

function mapDispatchToProps (dispatch) {
  return {
    servicesActions: bindActionCreators(servicesActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicesList)
