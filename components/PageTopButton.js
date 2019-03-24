const PageTopButton = () => {
  const hover = () => {
    const scrollToTop = document.getElementById('scrollToTop')
    scrollToTop.classList.add('hover')
    scrollToTop.classList.remove('leave')
  }

  const leave = () => {
    const scrollToTop = document.getElementById('scrollToTop')
    scrollToTop.classList.add('leave')
    scrollToTop.classList.remove('hover')
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      <div id="scrollToTop">
        <i
          className="fas fa-angle-double-up"
          onClick={scrollToTop}
          onMouseEnter={hover}
          onMouseLeave={leave}
        />
      </div>
      <style jsx>{`
        #scrollToTop {
          position: fixed;
          right: 40px;
          bottom: 30px;
          width: 50px;
          height: 50px;
          font-size: 2em;
          color: #a0d8ef;
          background-color: white;
          text-align: center;
          cursor: pointer;
        }
        .hover {
          animation: hover 0.3s linear 0s;
          animation-fill-mode: forwards;
        }
        .leave {
          animation: leave 0.3s linear 0s;
          animation-fill-mode: forwards;
        }
        @keyframes hover {
          0% {
            color: #a0d8ef;
            background-color: white;
          }
          100% {
            color: white;
            background-color: #a0d8ef;
          }
        }
        @keyframes leave {
          0% {
            color: white;
            background-color: #a0d8ef;
          }
          100% {
            color: #a0d8ef;
            background-color: white;
          }
        }
      `}</style>
    </div>
  )
}

export default PageTopButton
