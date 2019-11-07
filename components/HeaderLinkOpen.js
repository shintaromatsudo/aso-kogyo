import Link from './Link'

const HeaderLinkOpen = props => {
  const hover = () => {
    const elm = document.getElementById('open')
    elm.classList.remove('open')
  }
  const leave = () => {
    const elm = document.getElementById('open')
    elm.classList.add('open')
  }
  return (
    <div onMouseLeave={leave}>
      <div className="headerLinkOpen" onMouseEnter={hover}>
        {props.children}
      </div>
      <div id={props.id} className="open">
        <Link href={props.href} name={props.link_name} />
      </div>
      <style jsx>{`
        .headerLinkOpen {
          cursor: pointer;
        }
        #open {
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          height: 100px;
          background-color: #1059d3;
        }
        .open {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default HeaderLinkOpen
