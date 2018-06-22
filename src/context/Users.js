import React from 'react'
import { createContext } from 'react'
import getDisplayName from 'utils/getDisplayName'

// This is the default state for the Users context. Consumer will use this value when
// it does not have a matching Provider component. Pretty convenient for testing.
const defaultState = {
  users: [],
  process: {
    isLoading: false,
    success: false,
    error: null
  }
}

// create user content
const { Provider, Consumer } = createContext(defaultState)

/**
 * connect :: Component => Component
 *
 * HOC for connecting the Component into Users context.
 */
const connect = (WrappedComponent) => {
  const ConnectedComponent = (props) => (
    <Consumer>
      {(state) => <WrappedComponent {...props} {...state} />}
    </Consumer>
  )

  // change the display name of this class to name of WrappedCompnent for easy debugging.
  ConnectedComponent.displayName = `Connected(${getDisplayName(WrappedComponent)})`

  return ConnectedComponent
}

export {
  Provider,
  connect
}
