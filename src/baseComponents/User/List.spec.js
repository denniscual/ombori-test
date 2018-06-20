import React from 'react'
import { shallow } from 'enzyme'
import List from './List'
import ListItem from './ListItem'
import { Item } from 'semantic-ui-react'
import CardList from 'baseComponents/Card/List'

describe('List', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<List>
      <ListItem />
      <ListItem />
    </List>)
  })

  it('should render 2 ListItem', () => {
    const received = this.shallowWrapper.find(ListItem)
    const expected = 2
    expect(received).toHaveLength(expected)
  })

  it('should render a CardList', () => {
    const received = this.shallowWrapper.find(CardList).exists()
    expect(received).toBeTruthy()
  })

  it('should render an Item.Group', () => {
    const received = this.shallowWrapper.find(Item.Group).exists()
    expect(received).toBeTruthy()
  })
})
