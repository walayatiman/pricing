import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 3rem;
`;

const FullWidthContainer = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default FullWidthContainer;
