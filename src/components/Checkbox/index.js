import React from "react";
import CheckboxIcon from "./icons/check";
import { defaultTheme } from "themes";
import { Wrapper, Circle, Thumb, InnerThumb } from "./style";

const Checkbox = ({
  color,
  theme = defaultTheme,
  selected = false,
  onCheck = () => {}
}) => {
  const [checked, setChecked] = React.useState(selected);
  const [circleVisible, setCircleVisible] = React.useState(false);

  return (
    <Wrapper
      onClick={() => {
        setCircleVisible(true);
        onCheck(!checked);
        setChecked(!checked);
      }}
    >
      {circleVisible ? <Circle color={color || theme.color.primary} /> : null}
      {checked ? (
        <Thumb color={color || theme.color.primary}>
          <InnerThumb color={color || theme.color.primary}>
            <CheckboxIcon />
          </InnerThumb>
        </Thumb>
      ) : null}
    </Wrapper>
  );
};

export default Checkbox;
