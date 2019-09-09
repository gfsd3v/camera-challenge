import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  background: ${props => props.background};
  filter: ${props => props.filter || "none"};
`;

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: fixed;
  z-index: 4;
  top: calc(
    50% - ${props => parseFloat(props.height.replace(/(\d+).+/, "$1")) / 2}px
  );
  left: calc(
    50% - ${props => parseFloat(props.width.replace(/(\d+).+/, "$1")) / 2}px
  );
  display: ${props => props.display || "initial"};
  background: ${props => props.background};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  box-shadow: ${props => props.boxShadow};
  overflow: hidden;
  box-sizing: border-box;
`;

const Modal = ({
  children,
  width = "300px",
  display,
  height = "250px",
  background = "#f0f0f0",
  backdrop = "rgb(0,0,0,0.3)",
  backdropFilter,
  borderRadius,
  padding,
  margin,
  onOuterClick,
  boxShadow,
  isOpen
}) => {
  return isOpen ? (
    <>
      <Background
        filter={backdropFilter}
        background={backdrop}
        onClick={() => onOuterClick()}
      />
      <Wrapper
        width={width}
        display={display}
        height={height}
        background={background}
        backdrop={backdrop}
        borderRadius={borderRadius}
        padding={padding}
        margin={margin}
        boxShadow={boxShadow}
      >
        {children}
      </Wrapper>
    </>
  ) : null;
};

export default Modal;
