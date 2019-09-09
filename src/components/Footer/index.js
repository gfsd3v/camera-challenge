import React from "react";
import styled from "styled-components";
import Emoji from "components/Emoji";
import { defaultTheme } from "themes";
import { ParagraphText } from "components/Text";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 1vh;
  padding: 1em;
  color: white;
  background-size: cover;
`;

const Footer = () => {
  return (
    <Wrapper>
      <ParagraphText color={defaultTheme.color.black} margin="0 0 0 0">
        made with {"  "} <Emoji symbol="💚" /> by @gfs
      </ParagraphText>
    </Wrapper>
  );
};

export default Footer;
