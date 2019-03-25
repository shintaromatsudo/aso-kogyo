import React from 'react'

class PageTopButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: 0
    }
  }
  
  componentDidMount() {
    console.log('did')
//    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll')
  }
  
//  handleScroll() {
//    const ScrollY = window.scrollY
//    console.log('click')
//    const element = document.getElementById('scrollToTop')
//    if (ScrollY < 50) {
//      element.classList.remove('fadeIn')
//      element.classList.add('displayNone')
//    } else {
//      element.classList.remove('displayNone')
//      element.classList.add('fadeIn')
//    }
//  }
  
  watchCurrentPosition() {
    console.log(this.scrollTop())
  }
  
  scrollTop() {
    return Math.max(window.pageYoffset,document.documentElement.scrollTop,document.body.scrollTop)
  }
  
  hover() {
    const scrollToTop = document.getElementById('scrollToTop')
    scrollToTop.classList.add('hover')
    scrollToTop.classList.remove('leave')
  }

  leave() {
    const scrollToTop = document.getElementById('scrollToTop')
    scrollToTop.classList.add('leave')
    scrollToTop.classList.remove('hover')
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  
  render() {
    return (
      <div>
      <p>Scroll Top:{this.state.currentPosition}</p>
      <div id="scrollToTop">
        <i
          className="fas fa-angle-double-up"
          onClick={this.scrollToTop}
          onMouseEnter={this.hover}
          onMouseLeave={this.leave}
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
          border-radius: 50%;
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
            border: 0.5px solid #a0d8ef;
          }
          100% {
            color: white;
            background-color: #a0d8ef;
            border: 0.5px solid white;
          }
        }
        @keyframes leave {
          0% {
            color: white;
            background-color: #a0d8ef;
            border: 0.5px solid white;
          }
          100% {
            color: #a0d8ef;
            background-color: white;
            border: 0.5px solid #a0d8ef;
          }
        }
        //.displayNone {
        //  display: none;
        //}
        //.fadeIn {
        //  position: absolute;
        //  right: 10px;
        //  bottom: 10px;
        //  animation-name: fadein;
        //}
        //@keyframes fadein {
        //  from {
        //    opacity: 0;
        //    transform: translateY(20px);
        //  }
        //  to {
        //    opacity: 1;
        //    transform: translateY(0);
        //  }
        //}
      `}</style>
    </div>
    )
  }
}


//const PageTopButton = () => {
//  const hover = () => {
//    const scrollToTop = document.getElementById('scrollToTop')
//    scrollToTop.classList.add('hover')
//    scrollToTop.classList.remove('leave')
//  }

//  const leave = () => {
//    const scrollToTop = document.getElementById('scrollToTop')
//    scrollToTop.classList.add('leave')
//    scrollToTop.classList.remove('hover')
//  }

//  const scrollToTop = () => {
//    window.scrollTo({
//      top: 0,
//      left: 0,
//      behavior: 'smooth'
//    })
//  }

//  return (
//    <div>
//      <div id="scrollToTop">
//        <i
//          className="fas fa-angle-double-up"
//          onClick={scrollToTop}
//          onMouseEnter={hover}
//          onMouseLeave={leave}
//        />
//      </div>
//      <style jsx>{`
//        #scrollToTop {
//          position: fixed;
//          right: 40px;
//          bottom: 30px;
//          width: 50px;
//          height: 50px;
//          font-size: 2em;
//          color: #a0d8ef;
//          background-color: white;
//          text-align: center;
//          cursor: pointer;
//        }
//        .hover {
//          animation: hover 0.3s linear 0s;
//          animation-fill-mode: forwards;
//        }
//        .leave {
//          animation: leave 0.3s linear 0s;
//          animation-fill-mode: forwards;
//        }
//        @keyframes hover {
//          0% {
//            color: #a0d8ef;
//            background-color: white;
//          }
//          100% {
//            color: white;
//            background-color: #a0d8ef;
//          }
//        }
//        @keyframes leave {
//          0% {
//            color: white;
//            background-color: #a0d8ef;
//          }
//          100% {
//            color: #a0d8ef;
//            background-color: white;
//          }
//        }
//      `}</style>
//    </div>
//  )
//}

export default PageTopButton
