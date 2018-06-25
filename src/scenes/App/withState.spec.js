import React from 'react'
import { shallow, mount } from 'enzyme'
import withState from './withState'
import { stub, spy } from 'sinon'
import App from 'scenes/App/App'

const response = {
  data: {
    data: ['irish', 'jane', 'dennis']
  }
}

// FIXME: When using mount, it throws an error.
describe('withState', function () {
  // creating WithState Component
  const WithState = withState(App)

  beforeEach(() => {
    // create getUsers stub
    this.getUsersStub = stub().resolves(response)
    // stub the prototype componentDidMount
    this.componentDidMountStub = spy(WithState.prototype, 'componentDidMount')
    // create a react shallow wrapper
    this.shallowWrapper = shallow(<WithState getUsers={this.getUsersStub} />)
  })

  afterEach(() => {
    // reset the behavior
    this.getUsersStub.reset()
    this.componentDidMountStub.restore()
    // do cleanup to shallowWrapper because it uses by several tests.
    this.shallowWrapper.unmount()
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
    const received = this.shallowWrapper.state()
    const expected = {
      users: response.data.data,
      process: {
        isLoading: false,
        success: true,
        error: null
      }
    }
    expect(received).toEqual(expected)
  })

  it('ensures that the state is correctly set when the request is rejected', () => {
    const error = new Error('Error response')
    this.getUsersStub.rejects(error)
    // Refer to this link - https://github.com/airbnb/enzyme/issues/346
    // create again a Wrapper so that we can pass the new this.getUsersStub - new return value.
    const Wrapper = shallow(<WithState getUsers={this.getUsersStub} />)
    // awaiting to the function which is the replacement of the original function.
    return this.getUsersStub()
    .catch(() => {
      // componentDidMount has now been called
      // gonna force to re-render the component so that we can access the new state.
      Wrapper.update()
    })
    .then(() => {
      // here the new state can be accessed.
      const received = Wrapper.state().process.error.message
      expect(received).toBe(error.message)
     })
  })

})

