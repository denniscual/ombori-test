import React from 'react'
import PropTypes from 'prop-types'
import {
  Item
} from 'semantic-ui-react'
import CardList from 'baseComponents/Card/List'

/**
 * Display the list of users
 * Default export Component
 * @function
 */
const List = ({children}) => (
  <CardList>
    <Item.Group divided unstackable>
      {children}
    </Item.Group>
  </CardList>
)

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default List
