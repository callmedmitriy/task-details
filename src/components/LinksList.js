import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { listRequest } from '../actions/actionCreators'

export default function LinksList() {
  const {list, loading, error} = useSelector(state => state.linksList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(listRequest())
  }, [dispatch])

  if (loading) {
    return (
      <p>loading...</p>
    )
  }

  if (error) {
    return (
      <p>Some error</p>
    )
  }

  return (
    <Fragment>
      <ul>
        {list.map(o => (
          <li key={o.id}>
            <NavLink to={`/${o.id}/details`}>{o.name}</NavLink>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}