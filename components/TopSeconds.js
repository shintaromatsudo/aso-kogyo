import TopSecond from './TopSecond'

const TopSeconds = () => (
  <div className="topSeconds">
    <p>紹介</p>
    <TopSecond />
    <TopSecond />
    <TopSecond />
    <style jsx>{`
      .topSeconds {
        display: flex;
      }
    `}</style>
  </div>
)

export default TopSeconds
