import FooterLink from './FooterLink'

const Footer = () => (
  <div className="footer">
    <div className="flex">
      <FooterLink href={'/company'} name={'会社概要'} />
      <FooterLink href={'/yokohama'} name={'横浜工場'} />
      <FooterLink href={'/tatebayashi'} name={'館林工場'} />
      <FooterLink href={'/iizuka'} name={'飯塚工場'} />
      <FooterLink href={'/contact'} name={'お問い合わせ'} />
    </div>
    <div className="mini">
      <img src="../static/top_logo.png" />
    </div>
    <div className="copy_right">
      <p>Copyright© 2019 阿蘇工業株式会社 All Rights Reserved.</p>
    </div>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .flex {
          display: none;
        }
        .mini {
          width: 180px;
          height: 50px;
          margin: auto;
        }
        .mini img {
          padding-top: 20px;
        }
      }
      @media screen and (min-width: 650px) {
        .mini {
          display: none;
        }
        .flex {
          width: 80%;
          margin: auto;
          display: flex;
          justify-content: space-around;
        }
      }
      .mini img {
        width: 180px;
      }
      .copy_right {
        font-size: 10px;
        color: gray;
        text-align: center;
      }
      .footer {
        position: relative;
        height: 100px;
        background-color: white;
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
