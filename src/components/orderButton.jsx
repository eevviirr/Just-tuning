import React from 'react'

import '../UI/orderButton.css'

function OrderButton({value, type}) {
  return (
    <button type={type} className='order--button'>
        {value}
    </button>
  )
}

export default OrderButton;