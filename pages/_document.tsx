import Document, { Html, Head, Main, NextScript } from "next/document";
import { JSX } from "react/jsx-runtime";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;