const Factory = props => (
  <div className="factory">
    <h2>{props.name}</h2>
    <div className="info">
      <p>{props.zipcode}</p>
      <p>{props.address}</p>
      <p>{props.address2}</p>
      <p className="btn">
        TEL：
        <a href={`tel: ${props.tel}`}>{props.tel}</a>
      </p>
      <p className="btn">
        FAX：
        <a href={`tel: ${props.fax}`}>{props.fax}</a>
      </p>
      <p className="btn">
        E-MAIL：
        <a href={`mailto: ${props.mail1}@${props.mail2}`}>
          {props.mail1}&#64;{props.mail2}
        </a>
      </p>
      <p>{props.jugyoin}</p>
    </div>
    <div className="iframe">
      <iframe src={props.src} height="400" frameBorder="0" allowFullScreen />
    </div>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .info {
          width: 300px;
          margin-left: 20px;
        }
        .iframe {
          margin: auto;
        }
        iframe {
          width: 400px;
        }
      }
      @media screen and (min-width: 650px) {
        .info {
          width: 300px;
          margin-left: 20px;
          float: left;
        }
        iframe {
          width: 550px;
        }
      }
      h2 {
        font-size: 40px;
        margin-top: 50px;
        text-align: center;
        font-weight: normal;
      }
      a {
        color: -webkit-link;
        text-decoration: underline;
      }
      .factory {
        max-width: 900px;
        margin: auto;
        padding-bottom: 30px;
        border-bottom: solid 3px #1059d3;
      }
      .iframe {
      }
    `}</style>
  </div>
)

export default Factory
