import React, { Component } from 'react'
import { setUsersAndProcess, setProcess } from 'updater/users'
import { Provider } from 'context/Users'
import getDisplayName from 'utils/getDisplayName'

/**
 * TODO: Add unit tests
 * withState :: Component => Component
 *
 * withState is an HOC which abstracts the business logic of getting users and hydate to 
 * WrappedComponent.
 * @param {Component} WrappedComponent
 * @return {Component} New Component
 */
const withState = (WrappedComponent) => {
  class WithState extends Component {
    state = {
      users: [],
      process: {
        isLoading: false,
        success: false,
        error: null
      }
    }

    componentDidMount () {
      const { getUsers } = this.props
      // update the isLoading property from process state.
      this.setState(setProcess({isLoading: true}))
      getUsers()
        .then((response) => {
          // update the state users and process.
          this.setState(setUsersAndProcess({
            users: response.data.data,
            process: {
              isLoading: false,
              success: true
            }
          }))
        })
        .catch((error) => {
          // update the error prop from process state.
          this.setState(setProcess({error}))
        })
    }

    render () {
      return (
        <Provider value={this.state}>
          <WrappedComponent />
        </Provider>
      )
    }
  }

  // change the display name of this class to name of WrappedCompnent for easy debugging.
  WithState.displayName = `WithState(${getDisplayName(WrappedComponent)})`

  return WithState
}

export default withState
