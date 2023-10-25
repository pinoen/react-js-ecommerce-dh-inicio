import { toast } from "sonner"
import useCartContext from "../../../hooks/useCartContext"
import { CartProduct } from "../../../interfaces/products"
import styles from './Table.module.css'

const Table = () => {
  const {state: {cartItems}, dispatch} = useCartContext()

  const handleRemove = (item: CartProduct) => {
    dispatch({type: 'REMOVE', payload: item})
    toast.error('Item removed')
  }

  const handleAdd = (item: CartProduct) => {
    dispatch({type: 'ADD', payload: item})
    toast.success('Item added')
  }
  return (
    <>
    <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
            <td>
              <p>{item.name}</p>
            </td>
            <td>
              <button className={styles.modalButtonRemove} onClick={() => handleRemove(item)}>-1</button>
            </td>
            <td>
              <p>{item.quantity}</p>
            </td>
            <td>
              <button className={styles.modalButtonAdd} onClick={() => handleAdd(item)}>+1</button></td>
          </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.modalTotal}>
        <h3>Total: ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}</h3>
      </div>
      </>
  )
}

export default Table