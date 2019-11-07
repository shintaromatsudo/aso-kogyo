import React from 'react'
import Link from 'next/link'

const LinkComponent = props => (
  <React.Fragment>
    <Link href={props.href}>
      <a>
        <div className="Link">{props.name}</div>
      </a>
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
      .Link :hover {
        animation: fadeinTop 0.1s linear 0s;
        animation-fill-mode: forwards;
      }
      @keyframes fadeinTop {
        0% {
        }
        100% {
          color: #1059d3;
          border-bottom: solid 3px #1059d3;
        }
      }
    `}</style>
  </React.Fragment>
)

export default LinkComponent
