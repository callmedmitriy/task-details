import {
  LIST_REQUEST,
  LIST_FAILTURE,
  LIST_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  links: [],
  loading: false,
  error: null,
}

export default function linksListReducer(state = initialState, action) {
  switch(action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case LIST_FAILTURE:
      const { error } = action.payload
      return {
        ...state,
        loading: false,
        error: error,
      }
    case LIST_SUCCESS:
      console.log('success list',action.payload)
      const { list } = action.payload
      return {
        ...state,
        list,
        loading: false,
        error: null,
      }
    default:
      return state;
  }
}