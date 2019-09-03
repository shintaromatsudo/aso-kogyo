import React from 'react'
import Link from 'next/link'

const LinkComponent = props => (
  <React.Fragment>
    <Link href={props.href}>
      <div className="Link">
        <a>{props.name}</a>
      </div>
    </Link>
    <style jsx>{`
      a {
        color: black;
        text-decoration: none;
      }
      .Link {
        height: 24px;
        padding: 23px 0;
        width: 120px;
        margin: auto;
        text-align: center;
        cursor: pointer;
        transition-duration: 0.5s;
      }
    `}</style>
  </React.Fragment>
)

export default LinkComponent
