import Head from 'next/head'

const Index = () => {
  // const hover = () => {
  //   console.log('hover')
  //   const demo = document.getElementById('demo')
  //   demo.classList.add('demo')
  // }
  // const leave = () => {
  //   console.log('leave')
  //   const demo = document.getElementById('demo')
  //   demo.classList.remove('demo')
  // }
  const myFunction = () => {
    var x = location.pathname
    document.getElementById('demo').innerHTML = x
  }
  return (
    <div>
      <Head>
        <title>阿蘇工業株式会社</title>
      </Head>
      <div className="demo" id="demo" />
      <button onClick={myFunction}>Try it</button>
      <style jsx>{`
        p {
          text-align: center;
        }
        .demo {
          width: 1280px;
          height: 3000px;
          background-color: orange;
          transition-duration: 1s;
        }
        .demo :hover {
          width: 1330px;
        }
      `}</style>
    </div>
  )
}

export default Index
