import styled from 'styled-components'
import {
  Container,
} from 'semantic-ui-react'

/**
 * The container component for the list
 * Default export Component
 * @function
 */
export default styled(Container)`
  margin-bottom: 6em;

  @media only screen and (min-width: 1200px) {
    &&& {
      width: 50% !important;
    }
  }
`
