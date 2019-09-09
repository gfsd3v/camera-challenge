import React from "react";
import InputRoot from "./InputRoot";

export const EmailInput = ({ ...props }) => {
  return (
    <InputRoot
      label="email"
      type="email"
      name="email"
      autoComplete="email"
      margin="normal"
      variant="outlined"
      {...props}
    />
  );
};

export const NameInput = ({ ...props }) => {
  return (
    <InputRoot
      label="name"
      type="name"
      name="name"
      margin="normal"
      variant="outlined"
      {...props}
    />
  );
};
