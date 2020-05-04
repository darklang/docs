/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;

  const downloadAssets = name =>
    `Files: [svg](${siteConfig.baseUrl}branding/${name}.svg) | [png](${siteConfig.baseUrl}branding/${name}@1x.png) | [png 2x](${siteConfig.baseUrl}branding/${name}@2x.png) | [png 3x](${siteConfig.baseUrl}branding/${name}@3x.png)`;

  const badge = (name, imageAlt) => {
    return {
      image: `${siteConfig.baseUrl}branding/${name}@2x.png`,
      content: downloadAssets(name),
      imageAlt
    };
  };

  return (
    <div className="wrapper">
      <h1>Using your Dark badge!</h1>
      <p>Did your project launch? Give it a "Made with Dark" badge.</p>

      <Container background="light" className="badges">
        <h2>Badges for light backgrounds</h2>
        <GridBlock
          align="left"
          layout="twoColumn"
          className="medium"
          contents={[
            badge("md-color-light", "color badge in light background"),
            badge("md-mono-light", "monochrome badge in light background")
          ]}
        ></GridBlock>

        <GridBlock
          align="left"
          layout="twoColumn"
          className="small"
          contents={[
            badge("sm-color-light", "small color badge in light background"),
            badge("sm-mono-light", "small monochrome badge in light background")
          ]}
        ></GridBlock>
      </Container>

      <Container background="dark" className="badges">
        <h2>Badges for dark backgrounds</h2>
        <GridBlock
          align="left"
          layout="twoColumn"
          className="medium"
          contents={[
            badge("md-color-dark", "color badge in dark background"),
            badge("md-mono-dark", "monochrome badge in dark background")
          ]}
        ></GridBlock>

        <GridBlock
          align="left"
          layout="twoColumn"
          className="small"
          contents={[
            badge("sm-color-dark", "small color badge in dark background"),
            badge("sm-mono-dark", "small monochrome badge in dark background")
          ]}
        ></GridBlock>
      </Container>
    </div>
  );
}

module.exports = Help;
