import React from 'react'
import Head from 'next/head'
import TopImage from '../components/TopImage'
import Yokohama from '../components/Yokohama'
import Fukuoka from '../components/Fukuoka'
import Tatebayashi from '../components/Tatebayashi'

const Index = () => (
  <div id="main">
    <Head>
      <title>阿蘇工業株式会社</title>
    </Head>
    <TopImage />
    <div className="a">
      <h2>横浜工場</h2>
      <Yokohama />
    </div>
    <div className="b">
      <h2>館林工場</h2>
      <Tatebayashi />
    </div>
    <div className="a">
      <h2>福岡工場</h2>
      <Fukuoka />
    </div>
    <div className="access">
      <h2>アクセス</h2>
      <div className="iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.1045801073574!2d139.5201305152518!3d35.42743928025433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd19698d5778b90d2!2z6Zi_6JiH5bel5qWt77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1560690917956!5m2!1sja!2sjp"
          width="600"
          height="400"
          frameBorder="0"
          // style="border:0"
          allowFullScreen
        />
      </div>
    </div>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .a {
          height: 700px;
        }
        .b {
          height: 700px;
        }
      }
      @media screen and (min-width: 650px) {
        .a {
          height: 600px;
        }
        .b {
          height: 600px;
        }
      }
      h2 {
        font-size: 40px;
        color: white;
        margin: 0;
        padding: 50px;
        text-align: center;
      }
      .a {
        position: relative;
        background-color: gray;
      }
      .b {
        position: relative;
        background-color: #a0d8ef;
      }
      .access {
        background-color: blue;
      }
      .iframe {
        width: 600px;
        margin-left: auto;
        margin-right: 10px;
      }
    `}</style>
  </div>
)

export default Index
