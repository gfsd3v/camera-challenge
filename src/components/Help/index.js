import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 47px 0 47px;
  flex: 1;
`;

const Help = () => {
  return (
    <Wrapper>
      <div>help component</div>
    </Wrapper>
  );
};

export default Help;
