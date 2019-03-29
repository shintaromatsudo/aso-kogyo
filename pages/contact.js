import Title from '../components/Title'

const Contact = () => (
  <div className="contact">
    <Title title={'お問い合わせ'} />
    <p>お問い合わせ</p>
    <style jsx>{`
      p {
        text-align: center;
      }
       .contact {
        animation:fadeIn 3s;
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
  </div>
)

export default Contact
