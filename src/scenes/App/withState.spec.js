import React from 'react'
import { mount, shallow } from 'enzyme'
import withState from './withState'
import { stub, spy } from 'sinon'
import App from 'scenes/App/App'

const response = {
  data: {
    data: ['irish', 'jane', 'dennis']
  }
}

describe('withState', function () {
  // create getUsers stub
  this.getUsersStub = stub().resolves(response)
  // creating WithState Component
  const WithState = withState(App)
  // stub the prototype componentDidMount
  this.componentDidMountStub = spy(WithState.prototype, 'componentDidMount')
  // create a react shallow wrapper
  this.shallowWrapper = shallow(<WithState getUsers={this.getUsersStub} />)

  afterEach(() => {
    // reset the behavior
    this.getUsersStub.resetBehavior()
  })

  it('should call componentDidMount once', () => {
    const received = this.componentDidMountStub.called
    expect(received).toBeTruthy()
  })

  it('should render App', () => {
    const received = this.shallowWrapper.find(App).exists()
    expect(received).toBeTruthy()
  })

  it('should update the Components state after getting users', () => {
    const fakeState = {
      users: response.data.data,
      process: {
        isLoading: false,
        success: true,
        error: null
      }
    }
    const received = this.shallowWrapper.state()
    const expected = fakeState
    expect(received).toEqual(expected)
  })

  // FIXME: Cannot override the stub value.
  it.skip('should return error when getUsers is rejected', () => {
    const error = new Error('Error response')
    this.getUsersStub.rejects(error)
    const received = this.shallowWrapper.state('process').error.message
    const expected = error.message
    expect(received).toBe(expected)
  })
})
