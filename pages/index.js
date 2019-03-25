import Head from 'next/head'
import TopImage from  '../components/TopImage'
import TopSeconds from  '../components/TopSeconds'
import PageTopButton from '../components/PageTopButton'

const Index = () => (
    <div>
      <Head>
        <title>阿蘇工業株式会社</title>
      </Head>
      <TopImage />
      <TopSeconds />
      <PageTopButton />
    </div>
  )

export default Index
