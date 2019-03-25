import Factory from './Factory'

const Factories = () => (
  <div>
    <Factory
      name={'横浜工場'}
      zipcode={'〒245-0003'}
      address={'神奈川県横浜市泉区岡津町2259'}
      src={
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13004.418365680072!2d139.522319!3d35.427439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd19698d5778b90d2!2z6Zi_6JiH5bel5qWt77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1553521492748'
      }
    />
    <p class="btn">
      <a href="tel:045-811-1244">電話</a>
    </p>
    <p class="btn">
      <a href="mailto:yokohama@aso-kk.co.jp">メール</a>
    </p>
    <p>yokohama&#64;aso-kk.co.jp</p>
    <Factory
      name={'館林工場'}
      zipcode={'〒374-0074'}
      address={'群馬県館林市高根町山神裏1081'}
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.8409167840214!2d139.51436431564952!3d36.267640980061714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f253a69dfda47%3A0x87f1509bdbe4e932!2z6Zi_6JiH5bel5qWt77yI5qCq77yJIOmkqOael-W3peWgtA!5e0!3m2!1sen!2sjp!4v1553475709521'
      }
    />
    <Factory
      name={'飯塚工場/吉北工場'}
      zipcode={'〒820-0062'}
      address={'福岡県飯塚市目尾字境田515-87（※目尾＝しゃかの）'}
      src={
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.139225118687!2d130.69306131559202!3d33.67945898070907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543d5b7d35f0ce7%3A0xf78f4b16834d44d3!2z6Zi_6JiH5bel5qWt77yI5qCq77yJ!5e0!3m2!1sen!2sjp!4v1553475756192'
      }
    />
  </div>
)

export default Factories
