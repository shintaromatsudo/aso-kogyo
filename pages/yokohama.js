import Title from '../components/Title'

const Yokohama = () => (
  <div className="yokohama">
    <Title title={'横浜工場'} />
    <p>横浜工場</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .yokohama {
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

export default Yokohama
