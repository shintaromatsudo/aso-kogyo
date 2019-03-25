import Link from 'next/link'
import HeaderLink from './HeaderLink'
import BurgerMenu from './BurgerMenu'

const Header = () => (
  <div className="header">
    <Link href="/">
      <a>阿蘇工業株式会社</a>
    </Link>
    <div className="link">
      <HeaderLink />
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
      a {
        color: black;
        text-decoration: none;
      }
      a :hover {
        opacity: 0.7;
      }
      .header {
        width: 100%;
        height: 100px;
        padding: 10px;
        box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: 150px 1fr;
      }
    `}</style>
  </div>
)

export default Header
