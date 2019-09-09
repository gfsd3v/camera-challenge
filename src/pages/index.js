import React from "react";
import styled from "styled-components";
import Seo from "components/Seo";
import Hero from "components/Hero";
import Footer from "components/Footer";
import MultiStepForm from "components/MultiStepForm";
import Informations from "components/Informations";
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

  return (
    <>
      <Seo
        title="Gabriel - Camera Challenge"
        description={"Mieter Engel - Camera Challenge."}
        keywords={["code", "challenge"]}
      />
      {isDesktop !== null ? (
        <>
          <Hero isDesktop={isDesktop}>
            <MultiStepForm />
            <Dash />
          </Hero>
          <Informations />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default IndexPage;
