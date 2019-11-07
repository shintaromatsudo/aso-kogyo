import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Factories from '../components/Factories'
import PageImage from '../components/PageImage'

const Contact = () => (
  <div className="contact">
    <Title title={'お問い合わせ'} />
    <Header />
    <PageImage
      title={'お問い合わせ'}
      src={'../static/iizuka1/P1010743.JPG'}
    />
    <Factories />
    <Footer />
    <style jsx>{`
      .contact {
        animation: fadeIn 3s;
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .access {
        background-color: white;
      }
      .iframeBox {
        margin: auto;
      }
      .iframe {
        float: left;
      }
    `}</style>
  </div>
)

export default Contact
