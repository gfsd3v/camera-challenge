import React from "react";
import styled from "styled-components";
import { SmallHeader, ParagraphText } from "components/Text";
import { defaultTheme } from "themes";

const Dash = styled.div`
  display: none;
  @media (min-width: 1010px) {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 60vw;
    border-bottom: 2px solid ${defaultTheme.color.secondary};
    margin: 4vh 0 3vh 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 1em;
`;

const Informations = () => {
  return (
    <Wrapper>
      <Dash />
      <SmallHeader>info</SmallHeader>
      <ParagraphText>text</ParagraphText>
      <SmallHeader>more info</SmallHeader>
      <ParagraphText>text</ParagraphText>
    </Wrapper>
  );
};

export default Informations;
