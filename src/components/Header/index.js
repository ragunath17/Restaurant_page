import {HiOutlineShoppingCart} from 'react-icons/hi'
import './index.css'

const Header = props => {
  const {count} = props

  return (
    <div className="heading-bg-container">
      <h1 className="heading">UNI Resto Cafe</h1>
      <div className="order-container">
        <p className="order">My Orders</p>
        <div className="count-container">
          <HiOutlineShoppingCart size={25} className="cart-icon" />
          <p className="count">{count}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
