import styled from 'styled-components'

const Aside = styled.aside`
  padding: 1.5em;
  font-size: 14px;
  color: white;
  background-color: red;
`

export default ({ message }) => <Aside>{message}</Aside>
