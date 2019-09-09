const initialState = {
  show: false,
  buttonText: false,
  onButtonClick: false,
  message: false
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_SNACKBAR":
      return {
        buttonText: action.buttonText,
        onButtonClick: action.onButtonClick,
        message: action.message,
        show: true
      };
    case "RESET_SNACKBAR":
      return initialState;
    default:
      return state;
  }
};

export default snackbarReducer;
