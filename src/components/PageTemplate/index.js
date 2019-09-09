import React from "react";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
`;

const PageTemplate = ({ children, overflow, ...props }) => {
  return (
    <Wrapper>
      <Holder>
        <Content overflow={overflow}>{children}</Content>
      </Holder>
    </Wrapper>
  );
};

export default PageTemplate;
