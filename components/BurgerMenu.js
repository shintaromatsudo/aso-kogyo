const BurgerMenu = () => {
  const openMenu = () => {
    document.getElementById('sidebar').style.width = '250px'
  }

  const closeMenu = () => {
    document.getElementById('sidebar').style.width = '0'
  }

  return (
    <div>
      <div id="sidebar" className="sidebar">
        <p
          // href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeMenu()}
        >
          ×
        </p>
        <a id="company" className="menu-item" href="/company">
          会社概要
        </a>
        <a id="yokohama" className="menu-item" href="/yokohama">
          横浜工場
        </a>
        <a id="tatebayashi" className="menu-item" href="/tatebayashi">
          館林工場
        </a>
        <a id="iizuka" className="menu-item" href="/iizuka">
          飯塚工場
        </a>
        <a id="contact" className="menu-item" href="/contact">
          お問い合わせ
        </a>
      </div>
      <div className="three" onClick={() => openMenu()}>
        <p>&#9776;</p>
      </div>
      <style jsx>{`
        .sidebar {
          height: 100%;
          width: 0;
          position: fixed;
          z-index: 1;
          top: 0;
          right: 0;
          background-color: #111;
          overflow-x: hidden;
          transition: 0.5s;
          padding-top: 40px;
        }
        .sidebar a {
          padding: 4px 8px 4px 32px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
          transition: 0.3s;
        }
        .sidebar a:hover {
          color: #f1f1f1;
        }
        .closebtn {
          padding: 4px 8px 4px 32px;
          margin: 0;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
          transition: 0.3s;
          cursor: pointer;
        }
        .three {
          position: absolute;
          right: 30px;
          font-size: 20px;
          margin: auto;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default BurgerMenu
