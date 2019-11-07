import React from 'react'
import Link from 'next/link'
import HeaderLinks from './HeaderLinks'
import BurgerMenu from './BurgerMenu'

class Header extends React.Component {
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
    const element = document.getElementById('header')
    if (ScrollY < 50) {
      element.classList.remove('fadeIn')
      element.classList.add('fadeOut')
    } else {
      element.classList.add('fadeIn')
      element.classList.remove('fadeOut')
    }
  }
  render() {
    return (
      <div id="header">
        <div className="top">
          <Link href="/">
            <a>
              <img
                src="../static/top_logo.png"
                alt="阿蘇工業株式会社"
              ></img>
            </a>
          </Link>
        </div>
        <div className="top_mini">
          <Link href="/">
            <a>
              <img
                src="../static/top_logo_mini.png"
                alt="阿蘇工業株式会社"
              ></img>
            </a>
          </Link>
        </div>
        <div className="link">
          <HeaderLinks />
        </div>
        <div className="burger">
          <BurgerMenu />
        </div>
        <style jsx>{`
          @media screen and (max-width: 649px) {
            .link {
              display: none;
            }
            .top {
              display: none;
            }
          }
          @media screen and (min-width: 650px) {
            .burger {
              display: none;
            }
            .top_mini {
              display: none;
            }
          }
          .top a {
            color: black;
            text-decoration: none;
          }
          .top :hover {
            opacity: 0.7;
          }
          #header {
            width: 100vw;
            height: 70px;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            z-index: 100;
          }
          #header :hover {
            animation: fadein 0.5s linear 0s;
            animation-fill-mode: forwards;
          }
          .top {
            margin: auto 20px;
          }
          .top_mini img {
            width: 50px;
            margin: 10px;
          }
          .link {
            margin: auto 15px;
            margin-left: auto;
          }
          .burger {
            height: 70px;
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
            }
            100% {
              background-color: white;
              box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.15);
            }
          }
          @keyframes fadeout {
            from {
              background-color: white;
              box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.15);
            }
            to {
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Header
