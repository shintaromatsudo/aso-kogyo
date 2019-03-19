const Index = () => {
  const hover = () => {
    console.log("hover")
    const demo = document.getElementById("demo");
    element.classList.add("demo");
  }
  const hover = () => {
    console.log("hover")
    const demo = document.getElementById("demo");
    element.classList.remove("demo");
  }
  return (
  <div>
    <p>Hello Next.js</p>
    <div id="demo"  onMouseEnter={hover}  onMouseLeave={Leave}></div>
    <style jsx>{`
      p {
        text-align: center;
      }
      #demo {
        width: 300px;
        height: 300px;
        
      }
      .demo {
        
      }
    `}</style>
  </div>
)
}

export default Index
