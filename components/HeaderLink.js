import React from 'react'
import Link from 'next/link'

const HeaderLink = props => (
  <React.Fragment>
    <Link href={props.href}>
      <div className="headerLink">
        <a>{props.name}</a>
      </div>
    </Link>
    <style jsx>{`
      a {
        color: black;
        text-decoration: none;
      }
      .headerLink {
        padding: 10px;
        border-left: 0.5px solid gray;
        cursor: pointer;
        transition-duration: 0.5s;
      }
      .headerLink :hover {
        color: #a0d8ef;
      }
      // .headerLink ::before {
      //   content: '';
      //   width: 0;
      //   left: 50%;
      //   bottom: 0;
      //   transition: all 0.3s ease;
      //   border-bottom: 3px solid #000;
      //   position: absolute;
      //   display: block;
      // }
      // .headerLink:hover ::before {
      //   width: 50%;
      //   border-bottom: 3px solid #000;
      // }
      // .headerLink ::after {
      //   content: '';
      //   width: 0;
      //   right: 50%;
      //   bottom: 0;
      //   transition: all 0.3s ease;
      //   border-bottom: 3px solid #000;
      //   position: absolute;
      //   display: block;
      // }
      // .headerLink:hover ::after {
      //   width: 50%;
      //   border-bottom: 3px solid #000;
      // }
    `}</style>
  </React.Fragment>
)

export default HeaderLink
