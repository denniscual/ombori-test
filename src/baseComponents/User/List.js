import React from 'react'
import PropTypes from 'prop-types'
import { isNil, not, map, compose, append } from 'ramda'
import {
  Item
} from 'semantic-ui-react'
import { connect } from 'context/Users'
import ListItem from './ListItem'
import CardContainer from 'baseComponents/Card/Container'
import ErrorMessage from 'baseComponents/Error/Message'
import Placeholder from './Placeholder'
import NoMoreUsers from './NoMoreUsers'

/**
 * Display the list of users
 * Default export Component
 * @function
 */
const List = ({users, process: {success, error}}) => {
  // A function which transform the object into React elements
  const mapTransformer = (user) => {
    // create fullName
    const fullName = `${user.first_name} ${user.last_name}`
    return <ListItem key={user.id} avatarURL={user.avatar} name={fullName}/>
  }
  // create ListItem array. And append item to listItemArray. The item component for displaying message 'No more users'
  const listItemArray = compose(append(<NoMoreUsers key={123} />), map(mapTransformer))

  /* Display list if the request is resolved.*/
  if (success) {
    return (
      <CardContainer>
        <Item.Group divided unstackable>
          { listItemArray(users) }
        </Item.Group>
      </CardContainer>
    )
  }

  // Display error message if the request is rejected.
  if (not(isNil(error))) {
    return (
      <CardContainer>
        <ErrorMessage>{error.message}</ErrorMessage>
      </CardContainer>
    )
  }

  // Display the loading message
  return (
    <CardContainer>
      <Placeholder />
    </CardContainer>
  )
}

List.propTypes = {
  state: PropTypes.shape({
    users: PropTypes.object,
    process: PropTypes.shape({
      isLoading: PropTypes.bool,
      success: PropTypes.bool,
      error: PropTypes.any
    })
  })
}

export default connect(List)
