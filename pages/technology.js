import Title from '../components/Title'

const Technology = () => (
  <div className="technology">
    <Title title={'技術'} />
    <p>技術</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .technology {
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

export default Technology
