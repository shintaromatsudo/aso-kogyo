import Link from 'next/link'
import HeaderLink from './HeaderLink'

const Header = () => (
  <div className="header">
    <Link href="/">
      <a>阿蘇工業株式会社</a>
    </Link>
    <div className="link">
      <HeaderLink />
    </div>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .link {
          display: none;
        }
      }
      @media screen and (min-width: 650px) {
      }

      a {
        color: black;
        text-decoration: none;
      }
      a :hover {
        opacity: 0.7;
      }
      .header {
        padding: 10px;
        border: 0.5px solid gray;
        display: grid;
        grid-template-columns: 150px 1fr;
      }
    `}</style>
  </div>
)

export default Header
