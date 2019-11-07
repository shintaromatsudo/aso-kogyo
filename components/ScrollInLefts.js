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
    const scrollAnimationElm = document.querySelectorAll('.scrollInL')
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 1700
      if (ScrollY > triggerMargin) {
        scrollAnimationElm[i].classList.add('show')
      }
    }
  }

  render() {
    return (
      <div className="scrollInLefts flex">
        <div className="scrollInL delay2">
          <Item src={this.props.img1} href={this.props.href} />
        </div>
        <div className="scrollInL delay1">
          <Item src={this.props.img2} href={this.props.href} />
        </div>
        {/* <div className="scrollInL">
          <Item src={this.props.img3} href={this.props.href} />
        </div> */}
        <style jsx>{`
          @media screen and (max-width: 649px) {
            .scrollInLefts {
              height: 640px;
              margin-top: 90px;
            }
            .delay1 {
              transition-delay: 0.2s;
            }
            .delay2 {
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
            .delay1 {
            }
            .delay2 {
              transition-delay: 0.2s;
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

          .scrollInL {
            position: relative;
            left: -500px;
            opacity: 0;
            transition: all 1s ease;
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
