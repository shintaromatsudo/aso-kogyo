import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Jigyo from '../components/Jigyo'
import Factory from '../components/Factory'
import Machine from '../components/MachineT'
import PageImage from '../components/PageImage'

const Tatebayashi = () => (
  <div className="tatebayashi">
    <Title title={'館林工場'} />
    <Header />
    <PageImage title={'館林工場'} src={'../static/tatebayashi/P1010759.JPG'} />
    <Jigyo
      contents1={'自動車部品の羽布研磨と組立て'}
      contents2={'電車車輌部品の羽布研磨'}
    />
    <Factory
      zipcode={'〒374-0074'}
      address={'群馬県館林市高根町山神裏1081'}
      tel={'0276-73-2787'}
      fax={'0276-73-5444'}
      mail1={'tatebayashi'}
      mail2={'aso-kk.co.jp'}
      jugyoin={'従業員数：16名（男性12名　女性4名）'}
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.84073861699!2d139.5143643148897!3d36.26764530519564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f253a69dfda47%3A0x87f1509bdbe4e932!2z6Zi_6JiH5bel5qWt77yI5qCq77yJIOmkqOael-W3peWgtA!5e0!3m2!1sja!2sjp!4v1569559476795!5m2!1sja!2sjp'
      }
    />
    <Machine />
    <Footer />
    <style jsx>{`
      p {
        text-align: center;
      }
      .tatebayashi {
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

export default Tatebayashi
