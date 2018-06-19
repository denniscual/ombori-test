import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'

/**
 * Avatar which is a Circle type.
 * Default export Component
 * @function
 */
const Circle = ({url, style}) => (
  <Item.Image style={style} circular size='tiny' src={url} />
)

Circle.propTypes = {
  url: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Circle
