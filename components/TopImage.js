const TopImage = () => (
  <div className="topImg">
    {/* <h1 id="h1">阿蘇工業株式会社</h1> */}
    <img src="../static/TopImg.JPG" />
    <h2>
      人々が安心して安全な日々を楽しめる<br></br>モノづくりを
    </h2>
    <div className="verticalLine"></div>
    <p className="scroll">S C R O L L</p>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .topImg img {
          object-fit: cover;
          object-position: 15% 50%;
        }
      }
      .topImg {
        position: relative;
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
      h2 {
        position: absolute;
        width: 100vw;
        color: black;
        top: 23%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4vw;
        font-weight: normal;
        text-align: center;
      }
      p {
        position: absolute;
        color: white;
        bottom: 7%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        text-align: center;
      }
      .verticalLine {
        position: absolute;
        bottom: 18%;
        left: 50%;
        width: 1px;
        height: 150px;
        background-color: white;
        animation-name: transform;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        transform-origin: center top;
      }
      .scroll {
        animation-name: fadeIn;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      @keyframes transform {
        0% {
          transform: scaleY(0);
        }
        20% {
          transform: scaleY(0);
        }
        80% {
          transform: scaleY(1);
        }
        100% {
          transform: scaleY(1);
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      // #topImg {
      //   position: absolute;
      //   width: 100%;
      //   background-image: url('');
      //   background-size: cover;
      //   background-position: center;
      //   z-index: 100;
      // }
      img {
        width: 100%;
        height: 100vh;
      }
    `}</style>
  </div>
)

export default TopImage
