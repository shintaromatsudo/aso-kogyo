import Link from 'next/link'

const HeaderLink = props => (
  <div className="headerLink">
    <Link href={props.href}>
      <a>{props.name}</a>
    </Link>
    <style jsx>{`
      a {
        padding: 10px;
        color: black;
        text-decoration: none;
        border-left: 0.5px solid gray;
        transition-duration: 0.5s;
      }
      a :hover {
        color: #a0d8ef;
      }
      a:before {
        content: '';
        width: 0;
        left: 50%;
        bottom: 0;
        transition: all 0.3s ease;
        border-bottom: 3px solid #000;
        position: absolute;
        display: block;
      }
      a:hover:before {
        width: 50%;
        border-bottom: 3px solid #000;
      }
      a:after {
        content: '';
        width: 0;
        right: 50%;
        bottom: 0;
        transition: all 0.3s ease;
        border-bottom: 3px solid #000;
        position: absolute;
        display: block;
      }
      a:hover:after {
        width: 50%;
        border-bottom: 3px solid #000;
      }
    `}</style>
  </div>
)

export default HeaderLink
