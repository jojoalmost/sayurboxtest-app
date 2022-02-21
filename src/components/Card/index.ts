import styled from "styled-components";

const Card = styled('div')`
  background-color: white;
  cursor: pointer;
  border-radius: 0.25em;
  padding: 8px;
  display: flex;
  flex-direction: column;
  
  .title {
    font-size: 1em;
    font-weight: 500;
  }
`;

export default Card;