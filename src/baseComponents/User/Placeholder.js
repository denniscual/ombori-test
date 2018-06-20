import React from 'react'
import styled from 'styled-components'
import LoaderPrimary from 'baseComponents/Loader/Primary'

const Container = styled.div`
  position: relative;
  height: 110px;
  background-color: #fff;
`

const Placeholder = () => (
  <Container>
    <LoaderPrimary />
  </Container>
)

export default Placeholder
