const Factory = props => (
  <div>
<p>{props.name}</p>
<p>{props.zipcode}</p>
<p>{props.address}</p>
<iframe src={props.src} width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    <style jsx>{`
      p {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Factory
