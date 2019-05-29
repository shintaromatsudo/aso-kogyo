import React from 'react'

const Item = () => (
  <div className="frame">
    <div className="content" />
    <style jsx>{`
      .frame {
        position: relative;
        width: 300px;
        height: 300px;
        // overflow: hidden;
        background-color: gray;
        margin: 0 10px;
      }
      .content {
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
      .content :hover {
        transform: scale(1.1);
      }
    `}</style>
  </div>
)

export default Item
