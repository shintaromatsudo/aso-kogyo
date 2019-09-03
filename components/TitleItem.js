const TitleItem = props => (
  <div id="titleItem">
    <h3>{props.title}</h3>
    <style jsx>{`
      #titleItem {
        width: 100px;
        text-align: center;
        background-color: blue;
        color: white;
      }
    `}</style>
  </div>
)

export default TitleItem
