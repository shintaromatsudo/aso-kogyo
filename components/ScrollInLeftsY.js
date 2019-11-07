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
      var triggerMargin = 200
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
      <div className="scrollInLefts flex">
        <div className="scrollIn delay2">
          <Item src={this.props.img1} href={this.props.href} />
        </div>
        <div className="scrollIn delay1">
          <Item src={this.props.img2} href={this.props.href} />
        </div>
        {/* <div className="scrollIn">
          <Item src={this.props.img3} href={this.props.href} />
        </div> */}
        <style jsx>{`
          @media screen and (max-width: 649px) {
            .scrollInLefts {
              height: 640px;
              margin-top: 90px;
            }
          }
          @media screen and (min-width: 650px) {
            .scrollInLefts {
              height: 300px;
              margin: auto;
            }
            .flex {
              display: flex;
              justify-content: space-around;
            }
          }
          .scrollInLefts {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100vw;
            background-color: #1059d3;
          }

          .scrollIn {
            position: relative;
            left: -500px;
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
