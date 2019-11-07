const Machine = props => (
  <div className="machine">
    <p className="setsubi">主な所有設備</p>
    <table style={{ margin: 'auto', borderCollapse: 'collapse' }}>
      <tr>
        <td
          style={{ width: '250px', borderBottom: 'double' }}
          className="text_align border"
        >
          機　械　名
        </td>
        <td
          style={{ width: '100px', borderBottom: 'double' }}
          className="text_align border"
        >
          台　　数
        </td>
      </tr>
      <tr>
        <td style={{ color: '#1059d3' }} className="border">
          羽布レース
        </td>
        <td className="border"></td>
      </tr>
      <tr>
        <td className="border">可変式汎用レース</td>
        <td className="text_align border">8</td>
      </tr>
      <tr>
        <td className="border">可変式エンドレス</td>
        <td className="text_align border">2</td>
      </tr>
      <tr>
        <td className="border">直管パイプ用研磨装置</td>
        <td className="text_align border">1</td>
      </tr>
      <tr>
        <td className="border">各種エアーツール</td>
        <td className="text_align border">多数</td>
      </tr>
    </table>
    <style jsx>{`
      .machine {
        font-size: 18px;
        max-width: 900px;
        padding: 30px;
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
    `}</style>
  </div>
)

export default Machine
