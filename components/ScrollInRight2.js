import React from 'react'

class ScrollInLeft extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', event => this.handleScroll(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', event => this.handleScroll(), false)
  }

  handleScroll() {
    const ScrollY = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const scrollAnimationElm = document.querySelectorAll('.scrollIn')
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 500
      if (
        ScrollY >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add('show')
      }
    }
  }

  render() {
    return (
      <div className="flex scrollIn">
        <div className="frame">
          <div className="content" />
        </div>
        <div className="frame">
          <div className="content" />
        </div>
        <div className="frame">
          <div className="content" />
        </div>
        <style jsx>{`
          .flex {
            display: flex;
            position: relative;
            left: 500px;
            width: 100%;
            height: 300px;
            background-color: black;
            justify-content: space-around;
            opacity: 0;
            transition: all 1s ease;
          }
          .frame {
            position: relative;
            width: 300px;
            height: 300px;
            // overflow: hidden;
            background-color: gray;
            margin: 0 10px;
          }
          .content {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 300px;
            height: 300px;
            background-color: #a0d8ef;
            transition-duration: 1s;
          }
          .content :hover {
            transform: scale(1.1);
          }
          .show {
            opacity: 1;
            transform: translate(-500px, 0);
          }
        `}</style>
      </div>
    )
  }
}

export default ScrollInLeft
