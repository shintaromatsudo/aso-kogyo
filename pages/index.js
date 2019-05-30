import React from 'react'
import Head from 'next/head'
import TopImage from '../components/TopImage'
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
    <div className="a">
      <ScrollInLefts />
    </div>
    <div className="b">
      <ScrollInRights />
    </div>

    <PageTopButton />
    <TopImage />
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .a {
          position: relative;
          height: 1000px;
          background-color: gray;
        }
        .b {
          position: relative;
          height: 1000px;
        }
      }
      @media screen and (min-width: 650px) {
        .a {
          position: relative;
          height: 500px;
          background-color: gray;
        }
        .b {
          position: relative;
          height: 500px;
        }
      }
      .a {
        position: relative;
        height: 500px;
        background-color: gray;
      }
      .b {
        position: relative;
        height: 500px;
      }
    `}</style>
  </div>
)

export default Index
