import React from 'react'
import { mount } from 'enzyme'
import withState from './withState'
import { stub } from 'sinon'
import App from 'scenes/App/App'

const fakeResponse = {
  data: {
    data: ['irish', 'jane', 'dennis']
  }
}

describe.skip('withState', function () {
  beforeEach(() => {
    // create getUsers stub
    this.getUsersStub = stub().resolves(fakeResponse)
    const WithState = withState(App)
    this.componentDidMountStub = stub(WithState.prototype, 'componentDidMount')
    this.mountWrapper = mount(<WithState getUsers={this.getUsersStub} />)
  })

  afterEach(() => {
    // reset the behavior
    this.getUsersStub.reset()
    // unmount the WithState so that when using in next test, it will have new WithState
    this.mountWrapper.unmount()
  })

  it('should call componentDidMount once', () => {
    const received = this.componentDidMountStub.called
    expect(received).toBeTruthy()
  })

  it('should render App', () => {
    const received = this.mountWrapper.find(App).exists()
    expect(received).toBeTruthy()
  })
})
