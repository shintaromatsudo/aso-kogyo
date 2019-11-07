import HeaderLink from './HeaderLink'
import HeaderLinkOpen from './HeaderLinkOpen'

const HeaderLinks = () => (
  <div className="headerLinks">
    <HeaderLink href={'/company'} name={'会社概要'} />
    <HeaderLink href={'/yokohama'} name={'横浜工場'} />
    <HeaderLink href={'/tatebayashi'} name={'館林工場'} />
    <HeaderLink href={'/iizuka'} name={'飯塚工場'} />
    <HeaderLink href={'/contact'} name={'お問い合わせ'} />
    <style jsx>{`
      .headerLinks {
        height: 70px;
        margin: auto 0;
        text-align: right;
        display: flex;
      }
    `}</style>
  </div>
)

export default HeaderLinks
