const PageImage = props => (
  <div className="image">
    <img src={props.src} />
    <p>{props.title}</p>
    <style jsx>{`
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: 50% 40%;
      }
      .image {
        position: relative;
        margin-top: 70px;
      }
      .image p {
        position: absolute;
        color: white;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0;
        font-size: 30px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default PageImage
