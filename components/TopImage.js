const TopImage = () => (
  <div className="topImg">
    {/* <div id="topImg" /> */}
    {/* <h1 id="h1">阿蘇工業株式会社</h1> */}
    <img src="../static/img/TopImg.JPG" type="hidden" />
    <style jsx>{`
      .topImg {
        height: 100vh;
      }
      h1 {
        width: 80%;
        height: 20vh;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        font-size: 10vw;
        font-weight: bold;
        text-align: center;
      }
      #topImg {
        position: absolute;
        width: 100%;
        background-image: url('../static/img/yuuhi.jpg');
        background-size: cover;
        background-position: center;
        z-index: 100;
      }
      img {
        width: 100%;
        height: 100vh;
      }
    `}</style>
  </div>
)

export default TopImage
