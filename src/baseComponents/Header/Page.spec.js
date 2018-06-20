import React from 'react'
import { shallow } from 'enzyme'
import Page from './Page'

const props = {
  content: 'Page content'
}

describe('Page', function () {
  beforeEach(() => {
    this.shallowWrapper = shallow(<Page content={props.content} />)
  })

  it('should pass an equal content props value', () => {
    const received = this.shallowWrapper.prop('children')
    const expected = props.content
    expect(received).toBe(expected)
  })
})
