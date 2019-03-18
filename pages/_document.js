import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <html>
        <head>
          <title>阿蘇工業株式会社</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/img/favicon.ico"
          />
          <style>{`
            body {
              font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳＰゴシック', 'MS PGothic', sans-serif;
              margin: 0
            }
          `}</style>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            background-color: white;
            margin: 0px;
          }
        `}</style>
      </html>
    )
  }
}

export default MyDocument
