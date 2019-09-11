import * as React from "react";
import { Header, ParagraphText } from "components/Text";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const Success = ({ setStepTitle, ...props }) => {
  React.useEffect(() => {
    setStepTitle("all done");
  }, []);

  return (
    <Wrapper>
      <Header margin="10vh 0 0 0">success!</Header>
      <ParagraphText margin="25px 0 25px 0" textAlign="center">
        your image was successfully sent
        <br />
        we&apos;ll be in touch soon.
      </ParagraphText>
    </Wrapper>
  );
};

export default Success;
