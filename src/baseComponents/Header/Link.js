import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Item } from 'semantic-ui-react'

/**
 * Styled-component for Header Link
 * @function
 */
const StyledLink = styled(Item.Header)`
  &:hover {
    color: #0ebeff !important;
  }
`

/**
 * Header component for the link.
 * Default export Component
 * @function
 */
const Link = ({content}) => (
  <StyledLink as='a'>{content}</StyledLink>
)

Link.propTypes = {
  content: PropTypes.string.isRequired,
}


export default Link
