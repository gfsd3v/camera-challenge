import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: Flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .gatsby-image-wrapper {
    width: 130px;
  }
`;

const LazyImage = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      );
      if (!image) {
        return null;
      }
      return (
        <Wrapper>
          <Img fluid={image.node.fluid} />
        </Wrapper>
      );
    }}
  />
);

export default LazyImage;
