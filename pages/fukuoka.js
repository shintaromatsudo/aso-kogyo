import Title from '../components/Title'

const Fukuoka = () => (
  <div className="fukuoka">
    <Title title={'福岡工場'} />
    <p>福岡工場</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .fukuoka {
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

export default Fukuoka
