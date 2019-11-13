import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
/*import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'*/
import { listRequest } from '../actions/actionCreators'

export default function LinksList() {
  const {links, loading, error} = useSelector(state => state.linksList);
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
  console.log('LINKS',links)
  return (
    <Fragment>
      <p>list</p>
    </Fragment>
  )
}