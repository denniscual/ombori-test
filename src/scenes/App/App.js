import React, { Fragment } from 'react'
import withState from './withState'
import Home from 'scenes/Home/Home'

const App = () => (
  <Fragment>
    <Home />
  </Fragment>
)

export default withState(App)
