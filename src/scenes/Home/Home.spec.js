import React from 'react'
import { shallow } from 'enzyme'
import Home from './index'
import ContainerPage from 'baseComponents/Container/Page'
import ContainerList from 'baseComponents/Container/List'
import HeaderPage from 'baseComponents/Header/Page'

describe('Home', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<Home />)
  })

  it('should render ContainerPage', () => {
    const received = this.shallowWrapper.find(ContainerPage).exists()
    expect(received).toBeTruthy()
  })

  it('should render HeaderPage', () => {
    const received = this.shallowWrapper.find(HeaderPage).exists()
    expect(received).toBeTruthy()
  })

  it('should render ContainerList', () => {
    const received = this.shallowWrapper.find(ContainerList).exists()
    expect(received).toBeTruthy()
  })
})
