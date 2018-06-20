import React from 'react'
import { createContext } from 'react'
import getDisplayName from 'utils/getDisplayName'

// create user content
// TODO: Add default value
const { Provider, Consumer } = createContext()

/**
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
