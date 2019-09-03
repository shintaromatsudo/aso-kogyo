import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            name="description"
            content="私達は、『強い意志』と『しなやかな心』をもって、人々が安心して安全な日々を楽しめる、モノづくりを目指します。事業内容｛樹脂成型、羽布研磨、組立て・自動車部品・車輌部品・航空機部品｝"
          />
          <meta
            name="keywords"
            content="羽布研磨,組立て,樹脂成型,自動車部品,車輌部品,航空機部品"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/img/favicon.ico"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
          <style>{`
            body {
              font-family: 游ゴシック体, Yu Gothic, YuGothic, ヒラギノ角ゴシック Pro, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, Osaka, ＭＳＰゴシック, MS PGothic, sans-serif;
              margin: 0;
              background-color: white;
              animation:fadeIn 2s;
            }
            @keyframes fadeIn {
              0% { 
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}</style>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
