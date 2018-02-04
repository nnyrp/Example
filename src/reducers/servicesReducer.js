import initialState from './initialState'
import { FETCH_SERVICES, RECEIVE_SERVICES } from '../actions/actionTypes'

export default function services (state = initialState.services, action) {
  let newState
  switch (action.type) {
    case FETCH_SERVICES:
      console.log('FETCH_SERVICES Action')
      return action
    case RECEIVE_SERVICES:
      newState = action.services
      console.log('RECEIVE_SERVICES Action')
      return newState
    default:
      return state
  }
}
