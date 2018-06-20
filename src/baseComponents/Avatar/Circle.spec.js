import React from 'react'
import { shallow } from 'enzyme'
import Circle from './Circle'

const props = {
  url: 'localhost:3000',
  style: {
    color: 'red'
  }
}

describe('Circle', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<Circle url={props.url} style={props.style}/>)
  })

  it('should pass an equivalent src props value', () => {
    const received = this.shallowWrapper.prop('src')
    const expected = props.url
    expect(received).toEqual(expected)
  })

  it('should pass an equivalent style props value', () => {
    const received = this.shallowWrapper.prop('style')
    const expected = props.style
    expect(received).toEqual(expected)
  })
})
