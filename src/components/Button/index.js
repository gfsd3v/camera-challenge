import React from "react";
import ButtonRoot from "./ButtonRoot";
import CheckIcon from "@icons/material/CheckIcon";
import { defaultTheme } from "themes";

export const DefaultButton = ({ children, onPress, ...props }) => {
  return (
    <ButtonRoot
      onPress={onPress}
      /* background={`linear-gradient(to right, ${defaultTheme.color.primary}, ${defaultTheme.color.forty})`} */
      background={defaultTheme.color.tertiary}
      height="37px"
      width="265px"
      color="#fff"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
      borderRadius="18px"
      margin="5vh 0 0 0"
      {...props}
    >
      {children}
    </ButtonRoot>
  );
};

export const FloatingCircleButton = ({ children, onPress, ...props }) => {
  return (
    <ButtonRoot
      width="40px"
      height="40px"
      borderRadius="70px"
      margin="10px 0 0 0"
      background={`linear-gradient(to right, ${defaultTheme.color.primary}, ${defaultTheme.color.forty})`}
      onPress={onPress}
      {...props}
    >
      <CheckIcon color="white" />
    </ButtonRoot>
  );
};
