import React from 'react'
import styled, { keyframes } from 'styled-components'

// Markup for Loader User
const User = ({className}) => (
  <span className={className} />
)

// Animation for Loader
const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(14, 190, 255, 0.4);
    box-shadow: 0 0 0 0 rgba(14, 190, 255, 0.4);
  }

  70% {
      -moz-box-shadow: 0 0 0 10px rgba(14, 190, 255, 0);
      box-shadow: 0 0 0 50px rgba(14, 190, 255, 0);
  }

  100% {
      -moz-box-shadow: 0 0 0 0px rgba(14, 190, 255, 0);
      box-shadow: 0 0 0 0px rgba(14, 190, 255, 0);
  }
`

/**
 * Styles for Loader User
 * Default export Component
 * @function
 */
const StyledUser = styled(User)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #0ebeff;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(14, 190, 255, 0.4);
  animation: ${pulse} 1.2s infinite;
`


export default StyledUser
