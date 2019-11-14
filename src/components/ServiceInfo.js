import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { serviceRequest } from '../actions/actionCreators'


export default function ServiceInfo({match}) {
  const {service, loading, error } = useSelector(state => state.serviceInfo)
  const dispatch = useDispatch()

  const id = Number(match.params.id)

  useEffect(() => {
    dispatch(serviceRequest(id))
  }, [dispatch])

  if (loading) {
    return (
      <div>loading...</div>
    )
  }

  if (error) {
    return (
      <div>
        <p>Some error</p>
        <button onClick={() => dispatch(serviceRequest(id))}>Reload</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Service Info</h1>
      <p>{service.id}</p>
      <p>{service.name}</p>
      <p>{service.price}</p>
      <p>{service.content}</p>
    </div>
  )
}