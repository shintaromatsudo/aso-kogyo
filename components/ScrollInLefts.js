import React from 'react'
import Item from './ScrollInItem'

class ScrollInLefts extends React.Component {
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
      <div className="flex">
        <div className="scrollIn delay2">
          <Item />
        </div>
        <div className="scrollIn delay1">
          <Item />
        </div>
        <div className="scrollIn">
          <Item />
        </div>
        <style jsx>{`
          .flex {
            display: flex;
            position: relative;
            right: 500px;
            width: 100%;
            height: 300px;
            margin: 10px;
            padding: 10px;
            background-color: black;
            justify-content: space-around;
          }
          .scrollIn {
            opacity: 0;
            transition: all 1s ease;
          }
          .delay1 {
            transition-delay: 0.2s;
          }
          .delay2 {
            transition-delay: 0.4s;
          }
          .show {
            opacity: 1;
            transform: translate(500px, 0);
          }
        `}</style>
      </div>
    )
  }
}

export default ScrollInLefts
