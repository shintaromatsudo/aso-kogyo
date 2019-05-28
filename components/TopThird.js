const TopThird = () => (
  <div className="demoFrame">
    <div className="demo" />
    <style jsx>{`
      .demoFrame {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: #ffdc00;
      }
      .demo {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 10vw;
        height: 10vh;
        background-color: #a0d8ef;
        transition-duration: 1s;
      }
      .demo :hover {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default TopThird
