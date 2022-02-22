import styled from "styled-components";

const ListContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
`
const ListWrapperAvatar = styled('div')`
  display: flex;
  align-items: center;
  gap: 2em;
`

export default {
    ListContainer,
    ListWrapperAvatar,
}