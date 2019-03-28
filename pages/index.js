import React from 'react'
import Head from 'next/head'
import TopImage from '../components/TopImage'
import TopSeconds from '../components/TopSeconds'
import PageTopButton from '../components/PageTopButton'

class Index extends React.Component {
  // const Index = () => {
  componentDidMount() {
    window.addEventListener('scroll', event => this.handleScroll(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', false)
  }

  handleScroll() {
    console.log(window.pageYoffset)
    console.log(document.documentElement.scrollTop)
    console.log(document.body.scrollTop)
    if (window.pageYoffset != NaN) {
      const ScrollY = window.pageYoffset
    } else if (document.documentElement.scrollTop != NaN) {
      const ScrollY = document.documentElement.scrollTop
    } else if (document.body.scrollTop != NaN) {
      const ScrollY = document.body.scrollTop
    }
    const ScrollY = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    console.log(ScrollY)
    const scrollAnimationElm = document.querySelectorAll('.scrollIn')
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 300
      if (ScrollY > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
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
        <TopSeconds />
        <div className="demo1 scrollIn" />
        <div className="demo2 scrollIn" />
        <div className="demo3 scrollIn" />
        <div className="flex">
          <div className="demo4 scrollIn" />
          <div className="demo5 scrollIn" />
          <div className="demo6 scrollIn" />
        </div>
        <PageTopButton />
        <style jsx>{`
          .demo1 {
            width: 100%;
            height: 300px;
            background-color: #a0d8ef;
            opacity: 0;
            transition: all 0.5s ease;
            padding: 10px;
          }
          .demo2 {
            width: 100%;
            height: 300px;
            background-color: white;
            opacity: 0;
            transition: all 0.5s ease;
            padding: 10px;
          }
          .demo3 {
            width: 100%;
            height: 300px;
            background-color: #a0d8ef;
            opacity: 0;
            transition: all 0.5s ease;
            padding: 10px;
          }
          .flex {
            display: flex;
            justify-content: space-around;
          }
          .demo4 {
            width: 300px;
            height: 300px;
            background-color: #a0d8ef;
            opacity: 0;
            transition: all 0.5s ease;
            padding: 10px;
          }
          .demo5 {
            width: 300px;
            height: 300px;
            background-color: white;
            opacity: 0;
            transition: all 0.5s ease;
            padding: 10px;
          }
          .demo6 {
            width: 300px;
            height: 300px;
            background-color: #a0d8ef;
            opacity: 0;
            transition: all 0.5s ease;
            padding: 10px;
          }
          .show {
            opacity: 1;
            transform: translate(-100px, 0);
          }
        `}</style>
      </div>
    )
  }
}

export default Index
