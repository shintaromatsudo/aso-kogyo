import Title from '../components/Title'

const Company = () => (
  <div className="company">
    <Title title={'会社案内'} />
    <p>会社案内</p>
    <style jsx>{`
      p {
        text-align: center;
      }
      .company {
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

export default Company
