import Title from '../components/Title'
import Factories from '../components/Factories'

const Access = () => (
  <div className="access">
    <Title title={'アクセス'} />
    <p>アクセス</p>
    <Factories />
    <style jsx>{`
      .access {
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

export default Access
