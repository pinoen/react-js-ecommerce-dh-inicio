import logo from '../../../assets/logo.svg'
import cart from '../../../assets/cart.svg'
import styles from './Navbar.module.css'
import { useState } from 'react'
import CartModal from '../CartModal/CartModal'
import useCartContext from '../../../hooks/useCartContext'
import { useLocation, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const { state: { cartItems } } = useCartContext()
  const [showCartModal, setShowCartModal] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const handleShowModal = () => {
    setShowCartModal(curr => !curr)
  }

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail} onClick={() => navigate('/')}>
        <img src={logo} alt="logo" width={50} height={50} />
        <div>
          <span>DH E-commerce</span>
        </div>
      </div>

      {location.pathname !== '/checkout' && (
        <>
        <div className={styles.navbarCartContainer}>
          <p className={styles.navbarTextAmount}>{cartItems.length > 0 && cartItems.length}</p>
          <img src={cart} alt="cart" onClick={handleShowModal} />
        </div>

        {showCartModal && <CartModal handleShowModal={handleShowModal} />}
        </>
      )}
    </div>
  )
}

export default Navbar