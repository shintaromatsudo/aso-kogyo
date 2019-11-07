const Machine = props => (
  <div className="machine">
    <p className="setsubi">主な所有設備</p>
    <table
      style={{
        width: '100%',
        margin: 'auto',
        padding: '0',
        borderCollapse: 'collapse'
      }}
    >
      <tr>
        <td style={{ width: '230px' }} className="text_align border double">
          機　械　名
        </td>
        <td style={{ width: '100px' }} className="text_align border double">
          メーカー名
        </td>
        <td style={{ width: '180px' }} className="text_align border double">
          型　　式
        </td>
        <td style={{ width: '100px' }} className="text_align border double">
          スペック
        </td>
        <td style={{ width: '180px' }} className="text_align border double">
          ワークサイズ
        </td>
        <td style={{ width: '100px' }} className="text_align border double">
          台　　数
        </td>
      </tr>
      <tr>
        <td style={{ color: '#1059d3' }} className="text_align border">
          成　型　機
        </td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
      </tr>
      <tr>
        <td className="text_align border">油圧式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">PS60E 9E</td>
        <td className="text_align border">60T</td>
        <td className="text_align border">325 × 325</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">油圧式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">FE80S 12ASE</td>
        <td className="text_align border">80T</td>
        <td className="text_align border">375 × 375</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">電動式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">NEX1000-9E</td>
        <td className="text_align border">80T</td>
        <td className="text_align border">385 × 385</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">電動式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">NEX2000-12E</td>
        <td className="text_align border">110T</td>
        <td className="text_align border">420 × 420</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">電動式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">NEX140W-18E</td>
        <td className="text_align border">140T</td>
        <td className="text_align border">510 × 460</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">電動式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">ES3000-25E</td>
        <td className="text_align border">155T</td>
        <td className="text_align border">510 × 510</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">油圧式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">NEX180</td>
        <td className="text_align border">180T</td>
        <td className="text_align border">510 × 510</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">油圧式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">FN4000-50A</td>
        <td className="text_align border">180T</td>
        <td className="text_align border">530 × 530</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">電動式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">FN4000-36E</td>
        <td className="text_align border">180T</td>
        <td className="text_align border">530 × 530</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">電動式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">ES5000-50E</td>
        <td className="text_align border">220T</td>
        <td className="text_align border">590 × 590</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="text_align border">油圧式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">FN6000-71A</td>
        <td className="text_align border">280T</td>
        <td className="text_align border">660 × 660</td>
        <td className="text_align border">2</td>
      </tr>
      <tr>
        <td className="text_align border">油圧式射出成形機</td>
        <td className="text_align border">日精樹脂</td>
        <td className="text_align border">FN280-100A</td>
        <td className="text_align border">280T</td>
        <td className="text_align border">660 × 660</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td style={{ color: '#1059d3' }} className="text_align border">
          検　査　機　器
        </td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
      </tr>
      <tr>
        <td className="text_align border">測定顕微鏡（３軸）</td>
        <td className="text_align border">Mitutoyo</td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td style={{ color: '#1059d3' }} className="text_align border">
          羽　布　レ　ー　ス
        </td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
      </tr>
      <tr>
        <td className="text_align border">可変式汎用レース</td>
        <td className="text_align border">轟製作所</td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="text_align border">2</td>
      </tr>
      <tr>
        <td style={{ color: '#1059d3' }} className="text_align border">
          プ　レ　ス　機
        </td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
        <td className="border"></td>
      </tr>
      <tr>
        <td className="text_align border">R/GRILLE加工用</td>
        <td className="text_align border">自社製</td>
        <td className="border"></td>
        <td className="text_align border">6T</td>
        <td className="border"></td>
        <td className="text_align border">1</td>
      </tr>
    </table>
    <p>
      ＊尚、450tクラスにつきましては、弊社協力メーカーにて対応させて頂いております。
    </p>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .machine {
          padding: 0;
        }
        .machine td {
          font-size: 10px;
        }
      }
      @media screen and (min-width: 650px) {
        .machine {
          padding: 30px;
        }
      }
      .machine {
        font-size: 18px;
        max-width: 900px;
        margin: auto;
        border-bottom: solid 3px #1059d3;
      }
      .setsubi {
        font-size: 25px;
        text-align: center;
      }
      .text_align {
        text-align: center;
      }
      .border {
        border: 1px solid black;
      }
      .double {
        border-bottom: double;
      }
    `}</style>
  </div>
)

export default Machine
