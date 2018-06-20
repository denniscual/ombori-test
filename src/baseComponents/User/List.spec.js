import React from 'react'
import { shallow } from 'enzyme'
import { merge } from 'ramda'
import List from './List'
import ListItem from './ListItem'
import ErrorMessage from 'baseComponents/Error/Message'

// test props
const props = {
  users: [
    {
      id: 1,
      first_name: 'Jane',
      last_name: 'Joe'
    },
    {
      id: 1,
      first_name: 'Jane',
      last_name: 'Joe'
    }
  ],
  process: {
    success: true,
    error: null
  }
}

describe.skip('List', function () {
  it('should render 2 ListItems when the request is successful', () => {
    const wrapper = shallow(<List {...props}/>)
    const received = wrapper.find(ListItem)
    expect(received).toHaveLength(2)
  })

  it('should render ErrorMessage when the request is not successful', () => {
    // updating the process
    const newProps = merge(props, {
      ...props,
      process: {
        success: false,
        error: new Error('Error request!')
      }
    })
    const wrapper = shallow(<List {...newProps}/>)
    const received = wrapper.find(ErrorMessage).exists()
    expect(received).toBeTruthy()
  })
})
