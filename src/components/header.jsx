import React from 'react'

import logo from '../UI/image/svg/logotype.svg'
import '../UI/header.css'
import Search from './search'
import OrderButton from './orderButton'
import Menu from './menu'

function Header() {
  return (
    <div className='header'>

      <div className="container header__container">
        <div className="logo--just-tuning">
          <img src={logo} alt="Logo" />
        </div>
        <Search color="black"/>
        <Menu type="header"/>
        <OrderButton value="Заказать звонок" type='button'/>
      </div>
    </div>
  )
}
export default Header;
