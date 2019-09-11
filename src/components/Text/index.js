import React from "react";
import TextRoot from "./TextRoot";
import { defaultTheme } from "themes";

export const ParagraphText = ({ children, ...props }) => {
  return (
    <TextRoot
      theme={defaultTheme}
      color={defaultTheme.color.primary}
      textTransform="lowercase"
      fontSize="0.9rem"
      fontWeight="300"
      lineHeight="24px"
      margin="0 0 15px 0"
      {...props}
    >
      {children}
    </TextRoot>
  );
};

export const WhiteText = ({ children, ...props }) => {
  return (
    <TextRoot
      theme={defaultTheme}
      color={defaultTheme.color.white}
      textTransform="lowercase"
      fontSize="13px"
      fontWeight="700"
      lineHeight="24px"
      {...props}
    >
      {children}
    </TextRoot>
  );
};

export const SmallHeader = ({ children, ...props }) => {
  return (
    <TextRoot
      color={defaultTheme.color.tertiary}
      theme={defaultTheme}
      textTransform="lowercase"
      fontSize="0.9rem"
      justifyContent="center"
      fontWeight="700"
      lineHeight="18px"
      width="100%"
      margin="0px 0px 9px 0"
      {...props}
    >
      {children}
    </TextRoot>
  );
};

export const Header = ({ children, ...props }) => {
  return (
    <TextRoot
      color={defaultTheme.color.primary}
      theme={defaultTheme}
      textTransform="lowercase"
      justifyContent="center"
      fontSize="1.6rem"
      fontWeight="bold"
      {...props}
    >
      {children}
    </TextRoot>
  );
};
