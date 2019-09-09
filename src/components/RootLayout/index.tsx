import * as React from "react";
import styled from "styled-components";
import Transition from "components/Transition";
import PageTemplate from "components/PageTemplate";
import Modal from "components/Modal";

import { WhiteText } from "components/Text";
import { useDispatch } from "react-redux";
import { Button, Typography, Snackbar, Fade } from "@material-ui/core";
import { useSelector } from "react-redux";

const ModalContentWrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 14px;
  width: ${props => props.width};
  display: ${props => props.display};
  height: ${props => props.height};
`;

const RootLayout = props => {
  const snackBarProps = useSelector(state => state.snackbarReducer);
  const modalProps = useSelector(state => state.modalReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        onOuterClick={() =>
          dispatch({
            type: "RESET_MODAL"
          })
        }
        isOpen={modalProps.show}
        boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
        borderRadius="14px"
        backdrop="rgba(0,0,0,0.45)"
        width={modalProps.width}
        display={modalProps.display}
        height={modalProps.height}
      >
        <Fade in={modalProps.show}>
          <ModalContentWrapper
            width={modalProps.width}
            display={modalProps.display}
            height={modalProps.height}
          >
            {modalProps.content}
          </ModalContentWrapper>
        </Fade>
      </Modal>
      <PageTemplate>
        <Snackbar
          open={snackBarProps.show}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          action={
            snackBarProps.buttonText ? (
              <Button
                key="undo"
                color="secondary"
                size="small"
                onClick={snackBarProps.onButtonClick}
              >
                <Typography variant="button">
                  {snackBarProps.buttonText}
                </Typography>
              </Button>
            ) : null
          }
          autoHideDuration={3500}
          onClose={() =>
            dispatch({
              type: "RESET_SNACKBAR"
            })
          }
          message={<WhiteText>{snackBarProps.message}</WhiteText>}
        />
        <Transition transitionTime={0.25} animation="fadeIn">
          {React.cloneElement(props.children)}
        </Transition>
      </PageTemplate>
    </>
  );
};

export default RootLayout;
