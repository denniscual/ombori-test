import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider, connect } from './Users'

// Test component
const TestComponent = () => (
  <div>Test Component</div>
)

describe('Provider', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<Provider />)
  })
})

describe('connect', function () {
  beforeEach(() => {
    // connect the TestComponent to the context
    const ConnectedTestComponent = connect(TestComponent)
    this.mountWrapper = mount(<ConnectedTestComponent test='test'/>)
  })

  afterEach(() => {
    this.mountWrapper.unmount()
  })

  it('should render a TestComponent', () => {
    const received = this.mountWrapper.find(TestComponent).exists()
    expect(received).toBeTruthy()
  })

  it('should render TestComponent with a passed props', () => {
    const received = this.mountWrapper.find(TestComponent).props().test
    const expected = 'test'
    expect(received).toBe(expected)
  })

  it('should render TestComponent with a passed props from Consumer', () => {
    // Assign the props which are passed on TestComponent. users prop is passed by Context Consumer
    // element
    const received = this.mountWrapper.find(TestComponent).props().users
    const expected = []
    expect(received).toEqual(expected)
  })
})
