import Title from '../components/Title'

const Factory = () => (
  <div className="factory">
    <Title title={'工場'} />
    <p>工場</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .factory {
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

export default Factory
