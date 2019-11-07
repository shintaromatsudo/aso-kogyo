import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitleItem from '../components/TitleItem'
import PageImage from '../components/PageImage'

const Company = () => (
  <div className="company">
    <Title title={'会社概要'} />
    <Header />
    <PageImage title={'会社概要'} src={'../static/iizuka1/P1010722.JPG'} />
    <div className="box">
      <div className="title">
        <TitleItem title="社　　是" />
      </div>
      <div className="width">
        <p>
          私達は、「強い意志」と「しなやかな心」をもって、人々が安心して安全な日々を楽しめる、モノづくりを目指します。
        </p>
      </div>
    </div>
    <div className="box">
      <div className="title">
        <TitleItem title="経営方針" />
      </div>
      <div className="width">
        <p>１、品質を第一に考え、お客様の信用を得られる企業にします。</p>
        <p>１、企業の発展および地域との協調を目指します。</p>
        <p>１、社員一人一人の能力の開発により、生活環境の向上に努めます。</p>
      </div>
    </div>
    <div className="box">
      <div className="title">
        <TitleItem title="会社概要" />
      </div>
      <div className="width">
        <table>
          <tr>
            <td>１、設立年月日　：　</td>
            <td>1969年6月10日</td>
          </tr>
          <tr>
            <td className="super">２、所　在　地　：　</td>
            <td>
              <div>〒245−0003</div>
              <div>神奈川県横浜市泉区岡津町2259</div>
              <div>TEL 045-811-0278</div>
              <div>FAX 045-812-5907</div>
            </td>
          </tr>
          <tr>
            <td>３、資　本　金　：　</td>
            <td>1,600万円</td>
          </tr>
          <tr>
            <td>４、売　上　高　：　</td>
            <td>約45,000万円</td>
          </tr>
          <tr>
            <td>５、従　業　員　：　</td>
            <td>58名</td>
          </tr>
          <tr>
            <td>６、役　　　員　：　</td>
            <td>
              <div>代表取締役</div>
              <div>取　締　役</div>
              <div>監　査　役</div>
            </td>
          </tr>
        </table>
        <div>７、主要取引先と取引銀行　：　</div>
        <table>
          <tr>
            <td className="kara"></td>
            <td>(株)ファルテック</td>
            <td>りそな銀行横浜支店</td>
          </tr>
          <tr>
            <td className="kara"></td>
            <td>日本飛行機(株)</td>
            <td>横浜銀行横浜支店</td>
          </tr>
          <tr>
            <td className="kara"></td>
            <td>(株)トーコー技研</td>
            <td>横浜信用金庫和泉支店</td>
          </tr>
          <tr>
            <td className="kara"></td>
            <td>(株)プラテック</td>
            <td>商工中金横浜支店</td>
          </tr>
          <tr>
            <td className="kara"></td>
            <td>建設ゴム(株)</td>
            <td></td>
          </tr>
          <tr>
            <td className="kara"></td>
            <td>九州小島(株)小竹工場</td>
            <td></td>
          </tr>
          <tr>
            <td className="kara"></td>
            <td>真和工業(株)</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <div className="box">
      <div className="title">
        <TitleItem title="沿　　革" />
      </div>
      <div className="width">
        <table style={{ borderCollapse: 'collapse' }}>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和44年</div>
              <div className="seireki">(1969)</div>
            </td>
            <td className="border-left border-bottom">
              <div>
                横浜市戸塚区岡津町に初代社長、家入進が阿蘇工業株式会社を設立。
              </div>
              <div>
                本社横浜工場及び館林工場を、橋本フォーミング工業株式会社の工場内に新設し、自動車部品の羽布研磨並びに組み込み作業を開始。
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和47年</div>
              <div className="seireki">(1972)</div>
            </td>
            <td className="border-left border-bottom">資本金を400万円に増資</td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和50年</div>
              <div className="seireki">(1975)</div>
            </td>
            <td className="border-left border-bottom">資本金を800万円に増資</td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和51年</div>
              <div className="seireki">(1976)</div>
            </td>
            <td className="border-left border-bottom">
              横浜市戸塚区岡津町に新工場が完成し移転。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和52年</div>
              <div className="seireki">(1977)</div>
            </td>
            <td className="border-left border-bottom">
              <div>橋本フォーミング工業株式会社協力会”睦会”に加入。</div>
              <div>九州工場を新設。</div>
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和53年</div>
              <div className="seireki">(1978)</div>
            </td>
            <td className="border-left border-bottom">
              資本金を1600万円に増資
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和57年</div>
              <div className="seireki">(1982)</div>
            </td>
            <td className="border-left border-bottom">
              <div>群馬県館林市栄町に館林工業を新設し、移転。</div>
              <div>今津彩市が新社長に就任。</div>
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和59年</div>
              <div className="seireki">(1984)</div>
            </td>
            <td className="border-left border-bottom">
              自働研磨機を開発し、当時のメッキ仕上げに変わるクロム羽布仕上げが正式に採用される。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">昭和62年</div>
              <div className="seireki">(1987)</div>
            </td>
            <td className="border-left border-bottom">
              神奈川戸塚税務署より、優良申告法人に表敬される。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">平成 3年</div>
              <div className="seireki">(1991)</div>
            </td>
            <td className="border-left border-bottom">
              福岡県飯塚市に飯塚工場を新設し、九州工場を移転。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">平成 5年</div>
              <div className="seireki">(1993)</div>
            </td>
            <td className="border-left border-bottom">
              業務拡張に伴い、館林工場を現在の高根町に移転。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">平成16年</div>
              <div className="seireki">(2004)</div>
            </td>
            <td className="border-left border-bottom">
              新社長に石井哲哉が就任。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">平成19年</div>
              <div className="seireki">(2007)</div>
            </td>
            <td className="border-left border-bottom">
              業務拡張に伴い、飯塚市吉北に工場兼倉庫を新設。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">平成22年</div>
              <div className="seireki">(2010)</div>
            </td>
            <td className="border-left border-bottom">
              新しい研磨技術を利用したSUSMOULが日産エルグランド及びクエストで正式に採用される。
            </td>
          </tr>
          <tr>
            <td className="border-bottom">
              <div className="wareki">平成25年</div>
              <div className="seireki">(2013)</div>
            </td>
            <td className="border-left border-bottom">
              飯塚市吉北の工場を、目尾に移設。（飯塚第二工場）
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div className="title">
      <TitleItem title="会社組織図" />
    </div>
    <div style={{ overflow: 'scroll' }} className="box">
      <img className="soshikizu" src="../static/soshikizu.jpg" />
    </div>
    <Footer />
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .kara {
          width: 15%;
        }
      }
      @media screen and (min-width: 650px) {
        .kara {
          width: 162px;
        }
      }
      .company {
        animation: fadeIn 3s;
      }
      .box {
        max-width: 900px;
        margin: auto;
        border-bottom: solid 2px blue;
      }
      .width {
        max-width: 750px;
        margin: auto;
        margin-bottom: 20px;
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .title {
        max-width: 900px;
        margin: auto;
      }
      .wareki {
        width: 80px;
      }
      .seireki {
        font-size: 12px;
        text-align: center;
      }
      .super {
        vertical-align: super;
      }
      .border-left {
        border-left: solid 1px blue;
      }
      .border-bottom {
        border-bottom: solid 0.3px gray;
      }
      .soshikizu {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default Company
