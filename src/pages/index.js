import React from "react";
import styled from "styled-components";
import Seo from "components/Seo";
import Hero from "components/Hero";
import Footer from "components/Footer";
import ImageUploadForm from "components/ImageUploadForm";
import Infos from "components/Infos";
import Loader from "components/Loaders";
import { defaultTheme } from "themes";

const Dash = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  border-bottom: 2px solid ${defaultTheme.color.secondary};
  margin: 1vh 0 1vh 0;
  @media (min-width: 1010px) {
    display: none;
  }
`;

const IndexPage = () => {
  const [isDesktop, setIsDesktop] = React.useState(null);

  /*
   * Using window.innerWidth to identify if is desktop
   * and change the order that the component's
   * are rendered in Hero component
   * (Could be avoided if I used a grid layout)
   */
  React.useEffect(() => {
    const updatePredicate = () => {
      setIsDesktop(window.innerWidth > 1010);
    };
    window.addEventListener("resize", updatePredicate);
    setIsDesktop(window.innerWidth > 1010);
    return function cleanup() {
      window.removeEventListener("resize", updatePredicate);
    };
  }, []);

  const contentHandler = () => {
    if (isDesktop !== null) {
      return (
        <React.Fragment>
          <Hero isDesktop={isDesktop}>
            <ImageUploadForm />
            <Dash />
          </Hero>
          <Infos />
          <Footer />
        </React.Fragment>
      );
    } else {
      return <Loader />;
    }
  };

  return (
    <>
      <Seo
        title="Gabriel - Camera Challenge"
        description={"Mieter Engel - Camera Challenge."}
        keywords={["code", "challenge"]}
      />
      {contentHandler()}
    </>
  );
};

export default IndexPage;
