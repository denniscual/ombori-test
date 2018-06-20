import React from 'react'
import { shallow } from 'enzyme'
import App from './index'
import Home from 'scenes/Home'

// FIXME: We need to fix the test for the App component.
describe.skip('App', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<App />)
  })

  it('should render Home Scene', () => {
    const received = this.shallowWrapper.find(Home).exists()
    expect(received).toBeTruthy()
  })
})
