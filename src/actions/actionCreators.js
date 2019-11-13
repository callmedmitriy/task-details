import {
  LIST_REQUEST,
  LIST_FAILTURE,
  LIST_SUCCESS,
  SERVICE_REQUEST,
  SERVICE_FAILTURE,
  SERVICE_SUCCESS,
} from './actionTypes'

export const listRequest = () => ({
  type: LIST_REQUEST,
})

export const listFailture = error => ({
  type: LIST_FAILTURE,
  payload: {
    error,
  }
})

export const listSuccess = list => ({
  type: LIST_SUCCESS,
  payload: {
    list,
  }
})


export const serviceRequest = id => ({
  type: SERVICE_REQUEST,
  payload: {
    id,
  }
})

export const serviceFailture = error => ({
  type: SERVICE_FAILTURE,
  payload: {
    error,
  }
})

export const serviceSuccess = service => ({
  type: SERVICE_SUCCESS,
  payload: {
    service,
  }
})