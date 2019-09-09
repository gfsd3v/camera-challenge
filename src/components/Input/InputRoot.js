import React from "react";
import styled from "styled-components";
import { defaultTheme } from "themes";
import { TextField } from "@material-ui/core";

const StyledTextField = styled(({ width, ...props }) => (
  <TextField {...props} />
))`
  display: block;
  width: ${props => props.width || "100%"};
  margin: 20px;
  .MuiInputLabel-root {
    font-family: ${defaultTheme.font.primary};
    &.Mui-focused {
      color: ${defaultTheme.color.primary};
    }
  }
  .MuiOutlinedInput-root {
    font-family: ${defaultTheme.font.primary};
    &:hover fieldset {
      border-color: ${defaultTheme.color.primary};
    }
    &.Mui-focused fieldset {
      border-color: ${defaultTheme.color.primary};
    }
  }
`;

const InputRoot = props => {
  return <StyledTextField {...props} />;
};

export default InputRoot;
