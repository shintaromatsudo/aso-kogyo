import Link from 'next/link'

const HeaderLink = () => (
  <div className="headerLink">
    <Link href="/company">
      <a>会社案内</a>
    </Link>
    <Link href="/factory">
      <a>工場</a>
    </Link>
    <Link href="/product">
      <a>製品</a>
    </Link>
    <Link href="/technology">
      <a>技術</a>
    </Link>
    <Link href="/equipment">
      <a>設備</a>
    </Link>
    <Link href="/access">
      <a>アクセス</a>
    </Link>
    <Link href="/contact">
      <a>お問い合わせ</a>
    </Link>
    <style jsx>{`
      a {
        padding: 10px;
        color: black;
        text-decoration: none;
        border-left: 0.5px solid gray;
        transition-duration:3s;
         transition-property: border-bottom;
      }
      a :hover {
        color: blue;
        border-bottom: 5px solid blue;
      }
      .headerLink {
        margin: auto 0;
        text-align: right;
      }
      .link {
        padding: 5px;
      }
    `}</style>
  </div>
)

export default HeaderLink
