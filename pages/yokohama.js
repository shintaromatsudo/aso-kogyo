import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Jigyo from '../components/Jigyo'
import Factory from '../components/Factory'
import Machine from '../components/MachineY'
import PageImage from '../components/PageImage'

const Yokohama = () => (
  <div className="yokohama">
    <Title title={'横浜工場'} />
    <Header />
    <PageImage title={'横浜工場'} src={'../static/yokohama/P1010774.JPG'} />
    <Jigyo
      contents1={'自動車部品の羽布研磨と組立て'}
      contents2={'航空機部品の羽布研磨'}
    />
    <Factory
      zipcode={'〒245-0003'}
      address={'神奈川県横浜市泉区岡津町2259'}
      tel={'045-811-1244'}
      fax={'045-812-5907'}
      mail1={'yokohama'}
      mail2={'aso-kk.co.jp'}
      jugyoin={'従業員数：13名（男性8名　女性5名）'}
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.1045801073574!2d139.5201305152518!3d35.42743928025433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd19698d5778b90d2!2z6Zi_6JiH5bel5qWt77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1560690917956!5m2!1sja!2sjp'
      }
    />
    <Machine />
    <Footer />
    <style jsx>{`
      p {
        text-align: center;
      }
      .yokohama {
        animation: fadeIn 3s;
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}</style>
  </div>
)

export default Yokohama
