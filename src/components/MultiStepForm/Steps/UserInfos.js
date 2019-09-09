import React from "react";
import styled from "styled-components";
import { EmailInput, NameInput } from "components/Input";
import { DefaultButton } from "components/Button";
import { WhiteText } from "components/Text";
import { useDispatch } from "react-redux";

const InputsWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 25px 0 25px 0;
`;

const UserInfos = ({ setCurrentStep, setStepTitle, setData, ...props }) => {
  const [inputState, setInputState] = React.useState({
    email: "",
    emailError: false,
    emailErrorMessage: "",
    name: "",
    nameError: false,
    nameErrorMessage: ""
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    setStepTitle("who are u ?");
  }, []);

  const fieldsCheck = () => {
    let checked = true;

    const emailIsValid = email => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (!inputState.email) {
      checked = false;
      setInputState(inputState => ({
        ...inputState,
        emailError: true,
        emailErrorMessage: "please insert your email"
      }));
    } else if (!emailIsValid(inputState.email)) {
      checked = false;
      setInputState(inputState => ({
        ...inputState,
        emailError: true,
        emailErrorMessage: "please insert a valid email"
      }));
    }

    if (!inputState.name) {
      checked = false;
      setInputState(inputState => ({
        ...inputState,
        nameError: true,
        nameErrorMessage: "please insert your name"
      }));
    }

    return checked;
  };

  const submitHandler = () => {
    if (fieldsCheck()) {
      setData(data => ({
        ...data,
        name: inputState.name,
        email: inputState.email
      }));
      setCurrentStep(1);
    } else {
      dispatch({
        type: "SHOW_SNACKBAR",
        message: "please check the information you provided"
      });
    }
  };

  return (
    <React.Fragment>
      <InputsWrapper>
        <NameInput
          onChange={e => {
            const name = e.target.value;
            setInputState(inputState => ({
              ...inputState,
              name
            }));
          }}
          error={inputState.nameError}
          helperText={inputState.nameErrorMessage}
        />
        <EmailInput
          onChange={e => {
            const email = e.target.value;
            setInputState(inputState => ({
              ...inputState,
              email
            }));
          }}
          error={inputState.emailError}
          helperText={inputState.emailErrorMessage}
        />
      </InputsWrapper>
      <DefaultButton onPress={submitHandler}>
        <WhiteText>continue</WhiteText>
      </DefaultButton>
    </React.Fragment>
  );
};

export default UserInfos;
