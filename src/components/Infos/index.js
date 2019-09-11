import React from "react";
import styled from "styled-components";
import { SmallHeader, ParagraphText } from "components/Text";
import { defaultTheme } from "themes";

const Dash = styled.div`
  display: none;
  @media (min-width: 1010px) {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 60vw;
    border-bottom: 2px solid ${defaultTheme.color.secondary};
    margin: 4vh 0 3vh 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 1em;
`;

const CustomUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: self-start;
  flex-direction: column;
`;

const Infos = () => {
  return (
    <Wrapper>
      <Dash />
      <SmallHeader justifyContent="flex-start">Improvement ideas:</SmallHeader>
      <CustomUl>
        <li>
          <SmallHeader justifyContent="flex-start">Tests</SmallHeader>
          <ParagraphText>
            Didn&apos;t had the time to add the tests needed, the project could
            use some basics Jest tests.
          </ParagraphText>
        </li>
        <li>
          <SmallHeader justifyContent="flex-start">Multiple Images</SmallHeader>
          <ParagraphText>
            The user should be able to upload more than one image, the backend
            function that transform the image to pdf is ready for this
            Functionality but I didn&apos;t had the time to do the frontend part
            of the Functionality. should be documented.
          </ParagraphText>
        </li>
        <li>
          <SmallHeader justifyContent="flex-start">Grid Template</SmallHeader>
          <ParagraphText>
            I didn&apos;t had much time to think about the possibilities to
            implement the layout that I had in mind, but this kinda of layout
            would be better and cleaner using the CSS Grid feature, I ended up
            using the React State to change the order that the Components were
            rendered in which device(Mobile &amp; Desktop).
          </ParagraphText>
        </li>
      </CustomUl>
      <SmallHeader justifyContent="flex-start">Stack:</SmallHeader>
      <CustomUl>
        <li>
          <a href="https://www.gatsbyjs.org/">
            <code>Gatsby</code>
          </a>
        </li>
        <li>
          <a href="https://redux.js.org/">
            <code>Redux</code>
          </a>
        </li>
        <li>
          <a href="https://www.styled-components.com/">
            <code>Styled Components</code>
          </a>
        </li>
        <li>
          <a href="https://www.netlify.com/docs/functions/">
            <code>Netlify Lambda Functions (Backend)</code>
          </a>
        </li>
        <li>
          <a href="https://oauth.net/2/">
            <code>OAuth2</code>
          </a>
        </li>
      </CustomUl>
      <SmallHeader justifyContent="flex-start">
        Libraries &amp; Resources:
      </SmallHeader>
      <CustomUl>
        <li>
          <a href="https://material-ui.com/">
            <code>Material UI</code>
          </a>
        </li>
        <li>
          <a href="https://github.com/DominicTobias/react-image-crop">
            <code>React Image Crop</code>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/mr_alien/pen/FDLjg">
            <code>Jetpack Loader</code>
          </a>
        </li>
        <li>
          <a href="https://pdfkit.org/">
            <code>Pdfkit</code>
          </a>
        </li>
        <li>
          <a href="https://nodemailer.com/about/">
            <code>Nodemailer</code>
          </a>
        </li>
      </CustomUl>
    </Wrapper>
  );
};

export default Infos;
