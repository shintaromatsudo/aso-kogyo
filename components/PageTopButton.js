import React from 'react'

class PageTopButton extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', event => this.handleScroll(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', false)
  }

  handleScroll() {
    console.log(window.pageYoffset)
    console.log(document.documentElement.scrollTop)
    console.log(document.body.scrollTop)
    if (window.pageYoffset != NaN) {
      ScrollY = window.pageYoffset
    } else if (document.documentElement.scrollTop != NaN) {
      ScrollY = document.documentElement.scrollTop
    } else if (document.body.scrollTop != NaN) {
      ScrollY = document.body.scrollTop
    }
    console.log(ScrollY)
    const element = document.getElementById('scrollToTop')
    if (ScrollY < 50) {
      element.classList.remove('fade')
      // element.classList.remove('fadeIn')
      // element.classList.add('fadeOut')
    } else {
      element.classList.add('fade')
      // element.classList.add('fadeIn')
      // element.classList.remove('fadeOut')
    }
  }

  // hover() {
  //   const scrollToTop = document.getElementById('scrollToTop')
  //   scrollToTop.classList.add('hover')
  //   scrollToTop.classList.remove('leave')
  // }

  // leave() {
  //   const scrollToTop = document.getElementById('scrollToTop')
  //   scrollToTop.classList.add('leave')
  //   scrollToTop.classList.remove('hover')
  // }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div
        id="scrollToTop"
        onClick={this.scrollToTop}
        // onMouseEnter={this.hover}
        // onMouseLeave={this.leave}
      >
        <i className="fas fa-angle-double-up" />
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
            border: 2px solid #a0d8ef;
            border-radius: 50%;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            opacity: 0;
            visibility: hidden;
          }
          #scrollToTop :hover {
            color: white;
            background-color: #a0d8ef;
            border: 2px solid white;
          }
          // .hover {
          //   animation: hover 0.3s linear 0s;
          //   animation-fill-mode: forwards;
          // }
          // .leave {
          //   animation: leave 0.3s linear 0s;
          //   animation-fill-mode: forwards;
          // }
          // @keyframes hover {
          //   0% {
          //     color: #a0d8ef;
          //     background-color: white;
          //     border: 2px solid #a0d8ef;
          //   }
          //   100% {
          //     color: white;
          //     background-color: #a0d8ef;
          //     border: 2px solid white;
          //   }
          // }
          // @keyframes leave {
          //   0% {
          //     color: white;
          //     background-color: #a0d8ef;
          //     border: 2px solid white;
          //   }
          //   100% {
          //     color: #a0d8ef;
          //     background-color: white;
          //     border: 2px solid #a0d8ef;
          //   }
          // }
          .fade {
            opacity: 1;
            visibility: visible;
          }
          // .fadeIn {
          //   animation: fadein 0.5s linear 0s;
          //   animation-fill-mode: forwards;
          // }
          // .fadeout {
          //   animation: fadeout 0.5s linear 0s;
          //   animation-fill-mode: forwards;
          // }
          // @keyframes fadein {
          //   0% {
          //     opacity: 0;
          //   }
          //   100% {
          //     opacity: 1;
          //   }
          // }
          // @keyframes fadeout {
          //   from {
          //     opacity: 1;
          //   }
          //   to {
          //     opacity: 0;
          //   }
          }
        `}</style>
      </div>
    )
  }
}

export default PageTopButton
