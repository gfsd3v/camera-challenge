const initialState = {
  content: null,
  show: false,
  display: "flex",
  width: null,
  height: null
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        content: action.content,
        show: true,
        display: action.display,
        width: action.width,
        height: action.height
      };
    case "RESET_MODAL":
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
