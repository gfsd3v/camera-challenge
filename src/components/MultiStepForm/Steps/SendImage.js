import React from "react";
import Checkbox from "components/Checkbox";
import ImageUpload from "components/ImageUpload";
import { defaultTheme } from "themes";
import { DefaultButton } from "components/Button";
import { ParagraphText, WhiteText } from "components/Text";
import { useDispatch } from "react-redux";

const SendImage = ({
  setCurrentStep,
  setStepTitle,
  setData,
  data,
  FlexRow,
  ...props
}) => {
  const [agreeState, setAgreeState] = React.useState(false);
  const [confirmedImage, setConfirmedImage] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setStepTitle("send your photo");
  }, []);

  React.useEffect(() => {
    setData(data => ({
      ...data,
      base64Image: confirmedImage
    }));
  }, [confirmedImage]);

  const fieldsCheck = () => {
    let checked = true;

    if (!confirmedImage) {
      checked = false;
      dispatch({
        type: "SHOW_SNACKBAR",
        message: "please upload a image"
      });
    } else if (!agreeState) {
      checked = false;
      dispatch({
        type: "SHOW_SNACKBAR",
        message: "please agree with the terms and conditions"
      });
    }

    return checked;
  };

  const submitHandler = () => {
    if (fieldsCheck()) {
      dispatch({
        type: "SHOW_SNACKBAR",
        message: "submited"
      });
      console.log(data);
    }
  };

  return (
    <React.Fragment>
      <ImageUpload
        confirmedImage={confirmedImage}
        setConfirmedImage={setConfirmedImage}
      />
      <FlexRow>
        <Checkbox
          color={defaultTheme.color.primary}
          onCheck={res => setAgreeState(res)}
        />
        <ParagraphText
          alignItems="center"
          margin="0 0px 0 15px"
          justifyContent="center"
        >
          i agree with the terms and conditions
        </ParagraphText>
      </FlexRow>
      <DefaultButton onPress={submitHandler}>
        <WhiteText>send</WhiteText>
      </DefaultButton>
    </React.Fragment>
  );
};

export default SendImage;
