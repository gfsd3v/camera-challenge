import * as React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import FavIcon from "images/small_favicon.png";

const Seo = ({ description, lang, meta = [], keywords = [], title }) => {
  const detailsQuery = graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || `Gabriel`;
        return (
          <Helmet
            defer={false}
            htmlAttributes={{
              lang
            }}
            title={metaTitle}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                name: `og:image`,
                content: FavIcon
              },
              {
                property: `og:title`,
                content: metaTitle
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
};

export default Seo;
