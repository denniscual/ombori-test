import React from 'react'
import { Item, Header } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload'
import Placeholder from './Placeholder'

const NoMoreUsers = () => (
  <LazyLoad height={110} offset={[-200, 0]} placeholder={<Placeholder />}>
    <Item>
      <Header size='medium' textAlign='center' style={{margin: '0 auto'}}>
        No more users!
      </Header>
    </Item>
  </LazyLoad>
)

export default NoMoreUsers
