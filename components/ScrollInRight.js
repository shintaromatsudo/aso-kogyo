import React from 'react'

class ScrollInRight extends React.Component {
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
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      const triggerMargin = 500
      if (
        ScrollY >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add('show')
      }
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="scrollIn" style={this.props.style} />
        <style jsx>{`
          .scrollIn {
            opacity: 0;
            transition: all 1s ease;
            margin: 10px;
            padding: 10px;
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

export default ScrollInRight
