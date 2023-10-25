import styles from './CartModal.module.css'
import CloseBtn from '../../../assets/close.svg'
import Table from '../Table/Table'
import { useNavigate } from 'react-router-dom'

interface Props {
  handleShowModal: () => void
}
const CartModal: React.FC<Props> = ({handleShowModal}) => {
  const navigate = useNavigate()
  
  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowModal}>
        <img src={CloseBtn} alt='close button' />
      </button>

      <Table />
      <div className={styles.modalButtonContainer}>
        <button onClick={() => {
          navigate('/checkout')
          handleShowModal()
          }
        }>Checkout</button>
      </div>
    </div>
  )
}

export default CartModal