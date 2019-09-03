import HeaderLink from './HeaderLink'
import HeaderLinkOpen from './HeaderLinkOpen'

const HeaderLinks = () => (
  <div className="headerLinks">
    <HeaderLink href={'/company'} name={'会社概要'} />
    <HeaderLinkOpen id={'open'} href={'/yokohama'} link_name={'横  浜'}>
      <HeaderLink href={'/factory'} name={'工   場'} />
    </HeaderLinkOpen>
    <HeaderLink href={'/product'} name={'製   品'} />
    <HeaderLink href={'/technology'} name={'技   術'} />
    <HeaderLink href={'/equipment'} name={'設   備'} />
    <HeaderLink href={'/access'} name={'アクセス'} />
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
