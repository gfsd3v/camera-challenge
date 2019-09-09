const initialState = {
  title: "Gabriel",
  description: "Mieter Engel - Camera Challenge",
  keywords: [`code challenge`]
};

const seoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEO":
      return {
        ...state,
        title: action.SEO.title,
        description: action.SEO.description,
        keywords: action.SEO.keywords
      };
    default:
      return state;
  }
};

export default seoReducer;
