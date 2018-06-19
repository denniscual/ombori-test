import React, { Component } from 'react'
// User List
import UserList from 'baseComponents/User/List'
import UserListItem from 'baseComponents/User/ListItem'
// Other Components
import ContainerPage from 'baseComponents/Container/Page'
import ContainerList from 'baseComponents/Container/List'
import HeaderPage from 'baseComponents/Header/Page'
import LoaderUser from 'baseComponents/Loader/User'

class App extends Component {
  render () {
    return (
      <ContainerPage>
        <LoaderUser />
        <HeaderPage content='User List' />
        <ContainerList>
          <UserList>
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
            <UserListItem />
          </UserList>
        </ContainerList>
      </ContainerPage>
    )
  }
}

export default App
