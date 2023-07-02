import React from 'react'

import '../UI/menu.css'

function Menu({type}) {
  return (
    <div>
        <nav className={`menu ${type}`}>
            <a href="#" className={`menu__item ${type}`}>Главаня</a>
            <a href="#" className={`menu__item ${type}`}>О нас</a>
            <a href="#" className={`menu__item ${type}`}>Контакты</a>
        </nav>
    </div>
  )
}
export default Menu;