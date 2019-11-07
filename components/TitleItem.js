const TitleItem = props => (
  <div id="titleItem">
    <h2>{props.title}</h2>
    <style jsx>{`
      #titleItem {
        width: 130px;
        text-align: center;
        background-color: blue;
        color: white;
      }
    `}</style>
  </div>
)

export default TitleItem
