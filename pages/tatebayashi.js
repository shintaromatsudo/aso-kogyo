import Title from '../components/Title'

const Tatebayashi = () => (
  <div className="tatebayashi">
    <Title title={'館林工場'} />
    <p>館林工場</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .tatebayashi {
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

export default Tatebayashi
