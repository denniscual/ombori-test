import React from 'react'
import { shallow } from 'enzyme'
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
    this.getUsersStub.resetBehavior()
    this.componentDidMountStub.restore()
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

  it('should return error when getUsers is rejected', () => {
    const error = new Error('Error response')
    this.getUsersStub.rejects(error)
    const wrapper = shallow(<WithState getUsers={this.getUsersStub} />)
    // TODO: Check this link for testing Async Component - https://github.com/airbnb/enzyme/issues/346
    return Promise.resolve()
                  .then(() => {
                    // We need to call update() to re-render the component.
                    wrapper.update()
                  })
                  .then(() => {
                    const received = wrapper.state().process.error.message
                    expect(received).toBe(error.message)
                  })
  })
})

