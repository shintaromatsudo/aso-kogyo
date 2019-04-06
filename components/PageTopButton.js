import React from 'react'

class PageTopButton extends React.Component {
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
    const element = document.getElementById('scrollToTop')
    if (ScrollY < 50) {
      element.classList.remove('fadeIn')
      element.classList.add('fadeOut')
    } else {
      element.classList.add('fadeIn')
      element.classList.remove('fadeOut')
    }
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
      <div id="scrollToTop" onClick={this.scrollToTop}>
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
            transition: all 0.5s linear 0s;
            opacity: 0;
            visibility: hidden;
          }
          #scrollToTop :hover {
            color: white;
            background-color: #a0d8ef;
            border: 2px solid white;
          }
          .fadeIn {
            animation: fadein 0.5s linear 0s;
            animation-fill-mode: forwards;
          }
          .fadeOut {
            animation: fadeout 0.5s linear 0s;
            animation-fill-mode: forwards;
          }
          @keyframes fadein {
            0% {
              opacity: 0;
              visibility: hidden;
            }
            100% {
              opacity: 1;
              visibility: visible;
            }
          }
          @keyframes fadeout {
            from {
              opacity: 1;
              visibility: visible;
            }
            to {
              opacity: 0;
              visibility: hidden;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default PageTopButton
