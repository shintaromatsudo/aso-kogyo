const Jigyo = props => (
  <div className="jigyonaiyo">
    <p className="jigyo">事業内容</p>
    <p className="contents">{props.contents1}</p>
    <p className="contents bottom">{props.contents2}</p>
    <style jsx>{`
      .jigyonaiyo {
        max-width: 900px;
        margin: auto;
      }
      p {
        text-align: center;
      }
      .jigyo {
        font-size: 25px;
        padding-top: 30px;
      }
      .contents {
        font-size: 18px;
      }
      .bottom {
        padding-bottom: 50px;
        border-bottom: solid 3px #1059d3;
      }
    `}</style>
  </div>
)

export default Jigyo
