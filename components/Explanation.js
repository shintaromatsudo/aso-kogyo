const Explanation = props => (
  <div className="explanation">
    <p>{props.e1}</p>
    {/* <p>{props.e2}</p> */}
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .explanation {
          position: absolute;
          top: 10%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          margin: 0;
          padding: 0;
          font-size: 15px;
        }
      }
      @media screen and (min-width: 650px) {
        .explanation {
          position: absolute;
          top: 20%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          margin: 0;
          padding: 0;
          font-size: 20px;
        }
      }
    `}</style>
  </div>
)

export default Explanation
