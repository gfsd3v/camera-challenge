# MieterEngel coding challenge

I did a fully responsive web app where the user can either take a picture or upload a image, [`app in production`](https://nodejs.org/en/).

## Improvement ideas

- **Tests:** Didn't had the time to add the tests needed, the project could use some
  basic Jest tests.
- **Multiple Images:** The user should be able to upload more than one image, the backend function that transform the image to pdf is ready for this but I didn't had the time to do the frontend part of the Functionality.
  should be documented.
- **Grid Template:** I didn't had much time to think about the ways that I could implement the layout that I had in mind, but this kinda of layout would be better and cleaner using the CSS Grid feature, I ended up using the React State to change the order that the Components were rendered in each device(Mobile & Desktop).

## Stack

- #### [`Gatsby`](https://www.gatsbyjs.org/)
- #### [`Redux`](https://redux.js.org/)
- #### [`Styled Components`](https://www.styled-components.com/)
- #### [`OAuth2`](https://oauth.net/2/)
- #### [`Netlify Lambda Functions`](https://www.netlify.com/docs/functions/) (Backend functions)

## Libraries & Resources

- #### [`Material UI`](https://material-ui.com/)
- #### [`Pdfkit`](https://pdfkit.org/)
- #### [`Nodemailer`](https://nodemailer.com/about/)
- #### [`React Image Crop`](https://github.com/DominicTobias/react-image-crop)
- #### [`Jetpack Loader`](https://codepen.io/mr_alien/pen/FDLjg)
