import React from 'react'
import { Item } from 'semantic-ui-react'
import AvatarCircle from 'baseComponents/Avatar/Circle'
import HeaderLink from 'baseComponents/Header/Link'

/**
 * Display the information of the individual user
 * Default export Component
 * @function
 */
const ListItem = () => (
  <Item>
    <AvatarCircle
      style={{marginLeft: '1em'}}
      url='https://webdgallery.com/wp-content/uploads/2014/03/Gravatar.jpg'
    />
    <Item.Content verticalAlign='middle'>
      <HeaderLink content='Content 1' />
      <Item.Description>
        A description which may flow for several lines and give context to the content.
      </Item.Description>
    </Item.Content>
  </Item>
)

export default ListItem
