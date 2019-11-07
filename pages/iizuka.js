import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Jigyo from '../components/Jigyo'
import Factory from '../components/Factory'
import Machine from '../components/MachineI'
import PageImage from '../components/PageImage'

const Iizuka = () => (
  <div className="iizuka">
    <Title title={'飯塚工場'} />
    <Header />
    <PageImage title={'飯塚工場'} src={'../static/iizuka1/P1010721.JPG'} />
    <Jigyo contents1={'射出成形、羽布研磨、組立'} />
    <p style={{ fontSize: '25px' }}>飯塚第一工場</p>
    <Factory
      zipcode={'〒820-0062'}
      address={'福岡県飯塚市目尾515-87'}
      address2={'（※目尾＝しゃかの）'}
      tel={'0948-24-5586'}
      fax={'0948-24-5814'}
      mail1={'iiduka'}
      mail2={'aso-kk.co.jp'}
      jugyoin={'従業員数：34名（男性18名　女性16名）'}
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.1404544987395!2d130.69302941481905!3d33.67942714473245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543d5b7d35f0705%3A0xb8c69037eddee612!2z44CSODIwLTAwNjIg56aP5bKh55yM6aOv5aGa5biC55uu5bC-77yV77yR77yV4oiS77yY77yX!5e0!3m2!1sja!2sjp!4v1569560435543!5m2!1sja!2sjp'
      }
    />
    <p style={{ fontSize: '25px' }}>飯塚第二工場</p>
    <Factory
      zipcode={'〒820-0062'}
      address={'福岡県飯塚市目尾951-2'}
      address2={'（※目尾＝しゃかの）'}
      tel={'0948-26-5377'}
      fax={'0948-26-5388'}
      mail1={'uratuka'}
      mail2={'aso-kk.co.jp'}
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.2362264415315!2d130.7019942822535!3d33.67694695674788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543d5ce59c8d2df%3A0xb7d0756ab81beab9!2z44CSODIwLTAwNjIg56aP5bKh55yM6aOv5aGa5biC55uu5bC-77yZ77yV77yR4oiS77yS!5e0!3m2!1sja!2sjp!4v1569560561328!5m2!1sja!2sjp'
      }
    />
    <Machine />
    <Footer />
    <style jsx>{`
      p {
        text-align: center;
      }
      .iizuka {
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

export default Iizuka
