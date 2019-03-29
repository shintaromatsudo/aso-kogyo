import Title from '../components/Title'

const Equipment = () => (
  <div classname="equipment">
    <Title title={'設備'} />
    <p>設備</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .equipment {
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

export default Equipment
