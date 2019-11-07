import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TopImage from '../components/TopImage'
import Yokohama from '../components/Yokohama'
import Iizuka from '../components/Iizuka'
import Tatebayashi from '../components/Tatebayashi'
import Explanation from '../components/Explanation'

const Index = () => (
  <div id="index">
    <Head>
      <title>阿蘇工業株式会社</title>
    </Head>
    <div id="loading_mini">
      <img className="white" src="../static/white.jpg" />
      <img className="logo" src="../static/top_logo_mini.png" />
    </div>
    <div id="main">
      <Header />
      <TopImage />
      <div className="a">
        <a href="/yokohama">
          <h2 className="h2a">横 浜 工 場</h2>
        </a>
        <Yokohama />
        <div style={{ color: 'white' }}>
          <Explanation
            e1="羽布研磨・組立て"
            e2="自動車部品、航空機部品"
            color="white"
          />
        </div>
      </div>
      <div className="b">
        <a href="/tatebayashi">
          <div className="h2b">
            <h2>館 林 工 場</h2>
          </div>
        </a>
        <Tatebayashi />
        <Explanation
          e1="羽布研磨・組立て"
          e2="自動車部品、車輌部品"
          color="black"
        />
      </div>
      <div className="a">
        <a href="/iizuka">
          <h2 className="h2a">飯 塚 工 場</h2>
        </a>
        <Iizuka />
        <div style={{ color: 'white' }}>
          <Explanation
            e1="射出成型・羽布研磨・組立て"
            e2="自動車部品"
            color="white"
          />
        </div>
      </div>
      <Footer />
    </div>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .a {
          height: 700px;
        }
        .b {
          height: 700px;
        }
        h2 {
          font-size: 35px;
          margin: 0;
          text-align: center;
          font-weight: normal;
        }
      }
      @media screen and (min-width: 650px) {
        .a {
          height: 600px;
        }
        .b {
          height: 600px;
        }
        h2 {
          font-size: 35px;
          margin: 0;
          padding-top: 50px;
          text-align: center;
          font-weight: normal;
        }
      }
      #index {
        animation-name: fadeIn;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;

      }
      #loading_mini {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background: #fff;
        z-index: 9999;
        animation-name: fadeOut;
        animation-duration: 1s;
        animation-delay 3s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      .logo {
        width: 50px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-name: Image;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      .white {
        width: 100%;
        height: 100%;
      }
      @keyframes fadeOut {
        0% {
          opacity: 1;
          z-index: 9999;
        }
        100% {
          opacity: 0;
          z-index: 0;
        }
      }
      @keyframes Image {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      #main {
        animation-name: fadeIn;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
          z-index: 0;
        }
        100% {
          opacity: 1;
          z-index: 9999;
        }
      }
      .a {
        position: relative;
        background-color: #1059d3;
      }
      .b {
        position: relative;
        background-color: white;
      }
      .h2a {
        color: white;
        width: 200px;
        margin: auto;
        border-bottom: solid 0.5px white;
      }
      .h2b {
        color: black;
        width: 200px;
        margin: auto;
        border-bottom: solid 0.5px black;
      }
    `}</style>
  </div>
)

export default Index
