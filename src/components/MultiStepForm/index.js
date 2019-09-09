import React from "react";
import styled from "styled-components";
import UserInfos from "./Steps/UserInfos";
import SendImage from "./Steps/SendImage";
import PrimaryLogo from "images/primary_logo.svg";
import Help from "components/Help";
import Transition from "components/Transition";
import { defaultTheme } from "themes";
import { HelpCircleIcon } from "@icons/material";
import { useDispatch } from "react-redux";
import { Header } from "components/Text";

const Wrapper = styled.div`
  display: flex;
  padding: 3em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (min-width: 1010px) {
    width: 370px;
    min-height: 65vh;
    background-color: white;
  }
`;

const Logo = styled.div`
  display: none;
  @media (min-width: 1010px) {
    display: block;
    width: 10vw;
    max-width: 130px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HelpIcon = styled(HelpCircleIcon)`
  margin: 2px 0 0 10px;
  width: 22px;
  height: 22px;
  color: ${defaultTheme.color.secondary};
  cursor: pointer;
`;

const MultiStepForm = () => {
  const stepsMap = [UserInfos, SendImage];
  const [currentStep, setCurrentStep] = React.useState(0);
  const [stepTitle, setStepTitle] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    base64Image: ""
  });
  const dispatch = useDispatch();

  const helpHandler = () => {
    dispatch({
      type: "SHOW_MODAL",
      height: "458px",
      width: "310px",
      display: "flex",
      content: <Help />
    });
  };

  return (
    <Transition transitionTime={0.25} animation="fadeIn">
      <Wrapper>
        <Logo>
          <img src={PrimaryLogo} alt="Logo" />
        </Logo>
        <FlexRow>
          <Header>{stepTitle || "loading..."}</Header>
          <HelpIcon onClick={helpHandler} />
        </FlexRow>
        {React.createElement(stepsMap[currentStep], {
          setCurrentStep,
          setStepTitle,
          data,
          setData,
          FlexRow
        })}
      </Wrapper>
    </Transition>
  );
};

export default MultiStepForm;
