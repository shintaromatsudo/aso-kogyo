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
      <div className="scrollInRights flex">
        <div className="scrollIn">
          <Item src="../static/img/工場.jpg" />
        </div>
        <div className="scrollIn delay1">
          <Item src="../static/img/ダッシュボード.jpg" />
        </div>
        <div className="scrollIn delay2">
          <Item src="../static/img/スパナ.jpg" />
        </div>
        <style jsx>{`
          @media screen and (max-width: 649px) {
            .scrollInRights {
              height: 640px;
            }
          }
          @media screen and (min-width: 650px) {
            .scrollInRights {
              height: 300px;
            }
            .flex {
              display: flex;
              justify-content: space-around;
            }
          }
          .scrollInRights {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 100vw;
            background-color: #a0d8ef;
          }

          .scrollIn {
            position: relative;
            right: -500px;
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
            transform: translate(-500px, 0);
          }
        `}</style>
      </div>
    )
  }
}

export default ScrollInLefts
