import HeaderLink from './HeaderLink'

const HeaderLinks = () => (
  <div className="headerLinks">
    <HeaderLink href={'/company'} name={'会社案内'} />
    <HeaderLink href={'/factory'} name={'工場'} />
    <HeaderLink href={'/product'} name={'技術'} />
    <HeaderLink href={'/technology'} name={'技術'} />
    <HeaderLink href={'/equipment'} name={'設備'} />
    <HeaderLink href={'/access'} name={'アクセス'} />
    <HeaderLink href={'/contact'} name={'お問い合わせ'} />
    <style jsx>{`
      .headerLinks {
        margin: auto 0;
        text-align: right;
      }
    `}</style>
  </div>
)

export default HeaderLinks
