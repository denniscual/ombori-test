import React from 'react'
import App from 'scenes/App/App'
import { getUsers } from 'api/users/getUsers'

const Root = () => (
  /* Injecting the dependency will help us add unit tests with ease*/
  <App getUsers={getUsers}/>
)

export default Root
