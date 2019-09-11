import * as React from "react";
import { SmallHeader, ParagraphText } from "components/Text";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 47px 0 47px;
  flex: 1;
`;

const Help = () => {
  return (
    <Wrapper>
      <SmallHeader>needing a hand ? it&apos;s easy</SmallHeader>
      <ul>
        <li>
          <ParagraphText>Fill in your details.</ParagraphText>
        </li>
        <li>
          <ParagraphText>Press the add image button.</ParagraphText>
        </li>
        <li>
          <ParagraphText>Select the image or take a picture.</ParagraphText>
        </li>
        <li>
          <ParagraphText>
            Resize the image(optional) and press de check button when finished.
          </ParagraphText>
        </li>
        <li>
          <ParagraphText>Press the send button.</ParagraphText>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Help;
