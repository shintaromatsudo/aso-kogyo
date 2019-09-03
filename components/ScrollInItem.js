import React from 'react'

const Item = props => (
  <div className="frame">
    <div className="content">
      <img className="content" src={props.src} />
    </div>
    <style jsx>{`
      @media screen and (max-width: 649px) {
        .frame {
          margin: 20px auto;
          width: 300px;
          height: 200px;
        }
        .content {
          width: 300px;
          height: 200px;
        }
      }
      @media screen and (min-width: 650px) {
        .frame {
          margin: 0 10px;
          width: 350px;
          height: 250px;
        }
        .content {
          width: 350px;
          height: 250px;
        }
      }
      .frame {
        position: relative;
        overflow: hidden;
        background-color: gray;
      }
      .content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-color: #a0d8ef;
        transition-duration: 1s;
      }
      .content :hover {
        transform: scale(1.1);
      }
    `}</style>
  </div>
)

export default Item
