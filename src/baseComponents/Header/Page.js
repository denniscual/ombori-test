import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header as RootHeader } from 'semantic-ui-react'

/**
 * Styled-component for Header Page
 * @function
 */
const Header = styled(RootHeader)`
  &&& {
    margin-top: 50px;
    padding: 1em 0em 0.5em;
    text-align: center;
    color: #dadada;
    font-size: 3.6rem;
  }
`

/**
 * Header component for the page.
 * Default export Component
 * @function
 */
const Page = ({content}) => (
  <Header as='h2'>
    {content}
  </Header>
)

Page.propTypes = {
  content: PropTypes.string.isRequired
}

export default Page
