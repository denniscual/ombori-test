import React from 'react'
// User List
import UserList from 'baseComponents/User/List'
import UserListItem from 'baseComponents/User/ListItem'
// Other Components
import ContainerPage from 'baseComponents/Container/Page'
import ContainerList from 'baseComponents/Container/List'
import HeaderPage from 'baseComponents/Header/Page'

const Home = () => (
  <ContainerPage>
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

export default Home
