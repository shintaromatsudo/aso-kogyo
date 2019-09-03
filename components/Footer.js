import Link from './Link'

const Footer = () => (
  <div className="footer">
    <div className="flex">
      <Link href={'/company'} name={'会社概要'} />
      <Link href={'/factory'} name={'工   場'} />
      <Link href={'/product'} name={'製   品'} />
      <Link href={'/technology'} name={'技   術'} />
      <Link href={'/equipment'} name={'設   備'} />
      <Link href={'/access'} name={'アクセス'} />
      <Link href={'/contact'} name={'お問い合わせ'} />
    </div>
    <div className="copy_right">
      <p>Copyright© 2019 阿蘇工業株式会社 All Rights Reserved.</p>
    </div>
    <style jsx>{`
      p {
        font-size: 10px;
        color: gray;
        text-align: center;
      }
      .footer {
        position: relative;
        height: 100px;
        background-color: #a0d8ef;
      }
      .flex {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
      }
      .copy_right {
        width: 100%;
        position: absolute;
        bottom: 0;
      }
    `}</style>
  </div>
)

export default Footer
