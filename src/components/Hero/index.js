import React from "react";
import styled from "styled-components";
import LazyImage from "components/LazyImage";
import { defaultTheme } from "themes";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background: linear-gradient(
    to right,
    ${defaultTheme.color.primary},
    ${defaultTheme.color.forty},
    ${defaultTheme.color.primary}
  );
  background-size: cover;
  @media (min-width: 1010px) {
    /* flex-direction: row; */
    padding: 0;
  }
`;

const Logo = styled.div`
  width: 35vw;
  max-width: 150px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
  padding: 0;
`;

const Hero = ({ isDesktop, children, ...props }) => {
  /*
   * Check if is desktop to change order of render
   * (Could be avoided if I used a grid layout)
   */
  const contentHandler = () => {
    if (isDesktop) {
      return (
        <Wrapper>
          <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
      );
    } else {
      return (
        <React.Fragment>
          <Wrapper>
            <Logo>
              <LazyImage imgName="logo_and_name2.png" />
            </Logo>
          </Wrapper>
          <ContentWrapper>{children}</ContentWrapper>
        </React.Fragment>
      );
    }
  };

  return <React.Fragment>{contentHandler()}</React.Fragment>;
};

export default Hero;
