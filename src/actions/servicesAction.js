import * as types from './actionTypes'


export const receiveServices = (json) => {
  return {
    type: types.RECEIVE_SERVICES,
    services: json.ecs.services
  }
}

export const fetchServices = () => {
  return dispatch => {
    return fetch('data/data.json', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveServices(json)))
  }
}
