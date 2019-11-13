import {
  SERVICE_REQUEST,
  SERVICE_FAILTURE,
  SERVICE_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  service: {
    id: '',
    name: '',
    price: '',
    content: ''
  },
  loading: false,
  error: null,
}

export default function serviceInfoReducer(state = initialState, action) {
  switch(action.type) {
    case SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SERVICE_FAILTURE:
      const { error } = action.payload
      return {
        ...state,
        loading: false,
        error: error,
      }
    case SERVICE_SUCCESS:
      const { service } = action.payload
      return {
        ...state,
        service,
        loading: false,
        error: null,
      }
    default: 
      return state;
  }
}