import React from "react";

const Emoji = props => (
  <span
    style={{ margin: "0 3px 0 3px" }}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default Emoji;
