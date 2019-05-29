import React from 'react'
import Head from 'next/head'
import TopImage from '../components/TopImage'
import ScrollInLeft from '../components/ScrollInLeft2'
import ScrollInRight from '../components/ScrollInRight2'
import ScrollInLefts from '../components/ScrollInLefts'
import ScrollInRights from '../components/ScrollInRights'
import PageTopButton from '../components/PageTopButton'

const Index = () => (
  <div>
    <Head>
      <title>阿蘇工業株式会社</title>
    </Head>
    <TopImage />
    <TopImage />
    <ScrollInLeft />
    <ScrollInRight />
    <ScrollInLefts />
    <ScrollInRights />
    <PageTopButton />
    <TopImage />
    <style jsx>{
    `}</style>
  </div>
)

export default Index
