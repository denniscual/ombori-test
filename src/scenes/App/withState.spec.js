import React from 'react'
import { mount } from 'enzyme'
import withState from './withState'
import { stub, spy } from 'sinon'
import App from 'scenes/App/App'

const fakeResponse = {
  data: {
    data: ['irish', 'jane', 'dennis']
  }
}

// FIXME: Our WithState component mounted twice.
describe('withState', function () {
  // create getUsers stub
  this.getUsersStub = stub().resolves(fakeResponse)
  // creating WithState Component
  const WithState = withState(App)
  // create a react mount wrapper
  this.mountWrapper = mount(<WithState getUsers={this.getUsersStub} />)
  // stub the prototype componentDidMount
  this.componentDidMountStub = spy(WithState.prototype, 'componentDidMount')

  afterEach(() => {
    // reset the behavior
    this.getUsersStub.reset()
    // unmount the WithState so that when using in next test, it will have new WithState
    this.mountWrapper.unmount()
  })

  /* it('should call componentDidMount once', () => {
   *   const received = this.componentDidMountStub.called
   *   expect(received).toBeTruthy()
   * })*/

  it('should render App', () => {
    const received = this.mountWrapper.find(App).exists()
    expect(received).toBeTruthy()
  })
})
