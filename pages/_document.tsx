import { Html, Head, Main, NextScript } from 'next/document'

import Document, { DocumentContext } from 'next/document';

class MyDoc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          {/* <!-- Your data here --> */}
          <link rel="icon" href="/logo.png" />
          <meta name="description" content="Software Engineer resume" />
          <meta name="author" content="Jose Salcido" />

          {/* Google Fonts */}
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
          {/* Font Awesome */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type='text/css' />
          {/* Bootstrap */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" type='text/css' />
          <link rel="stylesheet" href="/assets/css/orbit-6.css" />
          <link rel="stylesheet" href="/assets/css/custom-global.css"></link>

          <link rel="stylesheet" href="/index.css" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDoc;