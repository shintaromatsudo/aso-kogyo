const TopSecond = () => (
    <div className="demoFrame">
      <div className="demo" />
      <style jsx>{`
        .demoFrame {
          width: 600px;
          height: 300px;
        }
        .demo {
          width: 100%;
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

export default TopSecond
