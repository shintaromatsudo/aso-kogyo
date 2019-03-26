import React from 'react'
import { elastic as Menu } from 'react-burger-menu'

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <div>
        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <a id="company" className="menu-item" href="/company">
            会社案内
          </a>
          <a id="factory" className="menu-item" href="/factory">
            工場
          </a>
          <a id="product" className="menu-item" href="/product">
            製品
          </a>
          <a id="technology" className="menu-item" href="/technology">
            技術
          </a>
          <a id="equipment" className="menu-item" href="/equipment">
            設備
          </a>
          <a id="access" className="menu-item" href="/access">
            アクセス
          </a>
          <a id="contact" className="menu-item" href="/contact">
            お問い合わせ
          </a>
        </Menu>
        <div className="three">
          <i className="fas fa-bars" onClick={() => this.toggleMenu()} />
        </div>
        <style jsx>{`
          .three {
            position: fixed;
            right: 0;
          }
        `}<style>
      </div>
    )
  }
}

export default BurgerMenu
