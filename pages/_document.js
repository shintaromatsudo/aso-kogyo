import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const ScrollY = window.scrollY
    console.log('click')
    const element = document.getElementById('scrollToTop')
    if (ScrollY < 50) {
      element.classList.remove('fadeIn')
      element.classList.add('displayNone')
    } else {
      element.classList.remove('displayNone')
      element.classList.add('fadeIn')
    }
  }

  scrollToTop = () => {
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // })
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
              font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳＰゴシック', 'MS PGothic', sans-serif;
              margin: 0;
              background-color: white;
            }
            #scrollToTop {
              font-size: 2em;
              color: blue;
              position: fixed;
              right: 40px;
              bottom: 30px;
            }
          `}</style>
        </head>
        <body>
          <Main />
          <NextScript />
          <div id="scrollToTop">
            <a href="#">
              <i
                className="fas fa-angle-double-up"
                onClick={this.scrollToTop}
              />
            </a>
          </div>
        </body>
        <style jsx>{`
          .displayNone {
            display: none;
          }
          .fadeIn {
            position: absolute;
            right: 10px;
            bottom: 10px;
            animation-name: fadein;
          }
          @keyframes fadein {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </html>
    )
  }
}

export default MyDocument
