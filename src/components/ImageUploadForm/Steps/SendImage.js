import React from "react";
import Checkbox from "components/Checkbox";
import ImageUpload from "components/ImageUpload";
import ImageService from "services/imageServices";
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
  // State passed to ImageUpload component to get the confirmed image
  const [confirmedImage, setConfirmedImage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  // Setting step title
  React.useEffect(() => {
    setStepTitle("send your photo");
  }, []);

  /*
   * When ImageUpload component returns the user
   * confirmed image we set the image to the state to be sent to the server
   */
  React.useEffect(() => {
    setData(data => ({
      ...data,
      base64Image: confirmedImage
    }));
  }, [confirmedImage]);

  // Simple fields check
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

  const submitHandler = async () => {
    if (fieldsCheck()) {
      setLoading(true);
      try {
        const serverResponse = await ImageService.sendEmailWithImageAsPdf(data);

        console.log(serverResponse);
      } catch (e) {
        console.log(e);
        dispatch({
          type: "SHOW_SNACKBAR",
          message:
            "error sending the image to the server, please try again in a few seconds."
        });
      }
      setLoading(false);
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
      <DefaultButton loading={loading} onPress={submitHandler}>
        <WhiteText>send</WhiteText>
      </DefaultButton>
    </React.Fragment>
  );
};

export default SendImage;
