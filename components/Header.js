import Link from 'next/link'
import HeaderLinks from './HeaderLinks'
import BurgerMenu from './BurgerMenu'

const Header = () => (
  <div className="header">
    <div className="top">
      <Link href="/">
        <a>阿蘇工業株式会社</a>
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
      }
      @media screen and (min-width: 650px) {
        .burger {
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
      .header {
        width: 100vw;
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.7;
        background-color: white;
        box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.15);
        display: flex;
        z-index: 9999;
      }
      .top {
        margin: auto 20px;
      }
      .link {
        margin: auto 15px;
        margin-left: auto;
      }
      .burger {
        height: 70px;
      }
    `}</style>
  </div>
)

export default Header
