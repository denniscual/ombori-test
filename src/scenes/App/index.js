import React, { Component, Fragment } from 'react'
import Home from 'scenes/Home'
import { getUsers } from 'api/users/getUsers'
import { setUsersAndProcess, setProcess } from 'updater/users'

class App extends Component {
  state = {
    users: [],
    process: {}
  }

  componentDidMount () {
    // update the isLoading
    this.setState(setProcess({isLoading: true}))
    getUsers()
      .then((response) => {
        // update the state users
        this.setState(setUsersAndProcess({
          users: response.data.data,
          process: {
            isLoading: false,
            success: true
          }
        }))
      })
      .catch(console.error)
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
