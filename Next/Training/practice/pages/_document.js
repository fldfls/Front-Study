import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import "./index.css";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            nam="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
