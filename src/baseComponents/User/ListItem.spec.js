import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './ListItem'
import { Item } from 'semantic-ui-react'
import AvatarCircle from 'baseComponents/Avatar/Circle'

describe('ListItem', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<ListItem />)
  })

  it('should render an Item component', () => {
    const received = this.shallowWrapper.find(Item).exists()
    expect(received).toBeTruthy()
  })

  it('should render an AvatarCircle', () => {
    const received = this.shallowWrapper.find(AvatarCircle).exists()
    expect(received).toBeTruthy()
  })

  it('should render a Item.Content', () => {
    const received = this.shallowWrapper.find(Item.Content).exists()
    expect(received).toBeTruthy()
  })
})
