import styled from "styled-components";
import {Link} from "react-router-dom";

const BoxCard = styled('div')`
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

const LinkCard = styled(Link)`
  background-color: white;
  cursor: pointer;
  border-radius: 0.25em;
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;

  .title {
    font-size: 1em;
    font-weight: 500;
  }
`

export default {
    BoxCard, LinkCard
};