import React from "react";
import styled from "styled-components";
import UserInfos from "./Steps/UserInfos";
import SendImage from "./Steps/SendImage";
import Success from "./Steps/Success";
import PrimaryLogo from "images/primary_logo.svg";
import Help from "components/Help";
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

/**
 * Parent component who controls the step that is shown
 * and the data to be sent
 */
const ImageUploadForm = () => {
  const stepsMap = [UserInfos, SendImage, Success];
  // State that controls the step to be shown
  const [currentStep, setCurrentStep] = React.useState(0);
  // State that sets the step title
  const [stepTitle, setStepTitle] = React.useState(false);
  // Data to be sent to the serverless function
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
  );
};

export default ImageUploadForm;
