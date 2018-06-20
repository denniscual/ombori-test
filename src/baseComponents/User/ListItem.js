import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import AvatarCircle from 'baseComponents/Avatar/Circle'
import HeaderLink from 'baseComponents/Header/Link'
import LazyLoad from 'react-lazyload'
import Placeholder from './Placeholder'

/**
 * Display the information of the individual user
 * Default export Component
 * @function
 */
const ListItem = ({avatarURL, name}) => (
  <LazyLoad height={110} offset={[-200, 0]} placeholder={<Placeholder />}>
    <Item>
      <AvatarCircle
        style={{marginLeft: '1em'}}
        url={avatarURL}
      />
      <Item.Content verticalAlign='middle'>
        <HeaderLink content={name} />
      </Item.Content>
    </Item>
  </LazyLoad>
)

ListItem.defaultProps = {
  avatarURL: 'https://webdgallery.com/wp-content/uploads/2014/03/Gravatar.jpg',
  name: 'John Doe'
}

ListItem.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ListItem
