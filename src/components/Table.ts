import styled from "styled-components";

const TableDetail = styled('table')`
  border-collapse: collapse;
  width: 100%;

  tr:hover {
    background-color: #ddd;
  }

  td {
    &.title {
      text-transform: capitalize;
      font-weight: 500;
    }

    &.description {
      text-transform: capitalize;
    }

    border: 1px solid #ddd;
    padding: 8px;
  }
`

export default {
    TableDetail
}