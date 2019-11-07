import React from 'react'
import Link from './Link'

const FooterLink = props => (
  <div className="footerLink">
    <Link {...props} />
    <style jsx>{`
      .footerLink {
        border-bottom: solid 2px white;
      }
    `}</style>
  </div>
)

export default FooterLink
