import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const animationMap = {
  fadeIn: fadeIn,
  slideLeft: slideLeft,
  slideRight: slideRight,
  slideUp: slideUp,
  slideDown: slideDown
};

const Wrapper = styled.div`
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.justifyContent || "column"};
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  flex-grow: 1;
  animation: ${props => props.transitionTime}s
    ${props => animationMap[props.animation]} ease-in-out;
  & > div {
    margin: ${props => props.childMargin || "unset"};
  }
`;

const Transition = ({
  children,
  animation,
  transitionTime,
  display,
  flexDirection,
  justifyContent,
  childMargin,
  alignItems
}) => {
  return (
    <Wrapper
      childMargin={childMargin}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      transitionTime={transitionTime}
      animation={animation}
    >
      {children}
    </Wrapper>
  );
};

export default Transition;
