import React from 'react'
import { shallow } from 'enzyme'
import Link from './Link'

const props = {
  content: 'Content 1'
}

describe('Link', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<Link content={props.content} />)
  })

  it('should pass an equal content props value', () => {
    const received = this.shallowWrapper.prop('children')
    const expected = props.content
    expect(received).toBe(expected)
  })
})
