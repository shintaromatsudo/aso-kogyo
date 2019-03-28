const Factory = props => (
  <div>
    <p>{props.name}</p>
    <p>{props.zipcode}</p>
    <p>{props.address}</p>
    <p>
      <iframe src={props.src} allowFullScreen />
    </p>
    <style jsx>{`
      p {
        text-align: center;
      }
      iframe {
        width: 800;
        height: 600;
        border: 0;
      }
    `}</style>
  </div>
)

export default Factory
