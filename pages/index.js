import React from 'react'
import Head from 'next/head'
import TopImage from '../components/TopImage'
import TopSeconds from '../components/TopSeconds'
import TopThird from '../components/TopThird'
import ScrollInLeft from '../components/ScrollInLeft'
import ScrollInRight from '../components/ScrollInRight'
import PageTopButton from '../components/PageTopButton'

const style1 = {
  width: '300px',
  height: '300px',
  backgroundColor: 'red'
}
const style2 = {
  width: '300px',
  height: '300px',
  backgroundColor: 'black'
}

class Index extends React.Component {
  // const Index = () => {
  componentDidMount() {
    window.addEventListener('scroll', event => this.handleScroll(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', event => this.handleScroll(), false)
  }

  handleScroll() {
    const ScrollY = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const scrollAnimationElm = document.querySelectorAll('.scrollIn')
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 500
      if (
        ScrollY >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add('show')
      }
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>阿蘇工業株式会社</title>
        </Head>
        <TopImage />
        {/* <TopSeconds /> */}
        <TopThird />
        <div className="demo1 flex scrollIn">
          <div className="demo11">
            <div className="demo" />
          </div>
          <div className="demo11">
            <div className="demo" />
          </div>
          <div className="demo11">
            <div className="demo" />
          </div>
        </div>
        <div className="flexLeft">
          <ScrollInLeft style={style2} />
          <ScrollInLeft style={style1} />
          <ScrollInLeft style={style2} />
        </div>
        <div className="flexRight">
          <ScrollInRight style={style2} />
          <ScrollInRight style={style1} />
          <ScrollInRight style={style2} />
        </div>
        <PageTopButton />
        <style jsx>{`
          .demo1 {
            position: relative;
            right: 500px;
            width: 100%;
            height: 300px;
            background-color: black;
            opacity: 0;
            transition: all 1s ease;
          }
          .flex {
            display: flex;
            justify-content: space-around;
          }
          .demo11 {
            position: relative;
            width: 300px;
            height: 300px;
            // overflow: hidden;
            background-color: gray;
            margin: 0 10px;
          }
          .demo {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 300px;
            height: 300px;
            background-color: #a0d8ef;
            transition-duration: 1s;
          }
          .demo :hover {
            transform: scale(1.1);
          }
          .flexLeft {
            display: flex;
            position: relative;
            right: 500px;
            justify-content: space-around;
          }
          .flexRight {
            display: flex;
            position: relative;
            left: 500px;
            justify-content: space-around;
          }
          .show {
            opacity: 1;
            transform: translate(500px, 0);
          }
        `}</style>
      </div>
    )
  }
}

export default Index
