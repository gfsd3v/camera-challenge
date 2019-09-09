import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 3px solid #e0e0e0;
  background: #fff;
  position: relative;
`;

const CircleAnimation = keyframes`
  0% {
    clip-path: circle(2px at center);
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  100% {
    clip-path: circle(56px at center);
    opacity: 0;
  }
`;

export const Circle = styled.div`
  width: 56px;
  height: 56px;
  background: #e0e0e0;
  border-radius: 100%;
  position: absolute;
  z-index: -1;
  top: calc(50% - 28px);
  left: calc(50% - 28px);
  clip-path: circle(2px at center);
  opacity: 0.5;
  animation: ${CircleAnimation} 0.4s ease-out;
`;

const InnerThumbAnimation = keyframes`
  from {
    clip-path: circle(1px at 3px 15px);
  }
  to {
    clip-path: circle(32px at 3px 15px);
  }
`;

export const Thumb = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  background: ${props => props.color};
  border-radius: 3px;
`;

export const InnerThumb = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  background: ${props => props.color};
  border-radius: 3px;
  animation: ${InnerThumbAnimation} 0.3s;
`;
