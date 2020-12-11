import React from "react";
import styled from "styled-components";
const DIVCONTAINER = styled.div`
  display: flex;
`;
const List = ({ children }) => {
  return <DIVCONTAINER>{children}</DIVCONTAINER>;
};

export default List;
