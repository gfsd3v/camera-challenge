import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const Loader = styled(CircularProgress)`
  color: white !important;
  width: 25px !important;
  height: 25px !important;
`;

const ButtonWrapper = styled.div`
  cursor: ${props => props.cursor || "pointer"};
  width: ${props => props.width || "100%"};
  min-height: ${props => props.height || "auto"};
  max-height: ${props => props.height || "auto"};
  padding: ${props => props.padding || "10px"};
  margin: ${props => props.margin || "unset"};
  box-sizing: border-box;
  border-radius: ${props => props.borderRadius || "14px"};
  background: ${props => props.background || "#fff"};
  border: ${props => props.border || "none"};
  box-shadow: ${props => props.boxShadow || "none"};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  flex: ${props => props.flex || "1"};
`;

const ButtonRoot = ({
  onPress = () => {},
  loading,
  children,
  width,
  height,
  justifyContent,
  alignItems,
  padding,
  margin,
  background,
  border,
  borderRadius,
  cursor,
  boxShadow,
  flex
}) => {
  return (
    <ButtonWrapper
      onClick={onPress}
      cursor={cursor}
      width={width}
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      background={background}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      flex={flex}
    >
      {loading ? <Loader /> : children}
    </ButtonWrapper>
  );
};
export default ButtonRoot;
