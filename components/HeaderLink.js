import React from 'react'
import Link from './Link'

const HeaderLink = props => (
  <div className="headerLink">
    <Link {...props} />
    <style jsx>{`
      .headerLink :hover {
        opacity: 0.7;
        background-color: gray;
      }
    `}</style>
  </div>
)

export default HeaderLink
