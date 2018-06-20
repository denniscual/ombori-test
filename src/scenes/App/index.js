import React, { Component, Fragment } from 'react'
import Home from 'scenes/Home'
import { getUsers } from 'api/users/getUsers'
import { setUsersAndProcess, setProcess } from 'updater/users'

class App extends Component {
  state = {
    users: [],
    process: {
      isLoading: false,
      success: false,
      error: null
    }
  }

  componentDidMount () {
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
      <Fragment>
        <Home />
      </Fragment>
    )
  }
}

export default App
