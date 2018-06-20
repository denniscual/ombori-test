import React from 'react'
import { shallow } from 'enzyme'
import Placeholder from './Placeholder'
import LoaderPrimary from 'baseComponents/Loader/Primary'

describe('Placeholder', () => {
  it('should render LoaderPrimary', () => {
    const wrapper = shallow(<Placeholder />)
    const received = wrapper.find(LoaderPrimary).exists()
    expect(received).toBeTruthy()
  })
})
