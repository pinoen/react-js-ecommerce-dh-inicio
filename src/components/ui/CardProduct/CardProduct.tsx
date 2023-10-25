import { toast } from 'sonner'
import useCartContext from '../../../hooks/useCartContext'
import { CartProduct, Product } from '../../../interfaces/products'
import styles from './CardProduct.module.css'

interface Props {
  product: Product
}

const CardProduct: React.FC<Props> = ({product}) => {

  const {dispatch} = useCartContext()

  const item: CartProduct = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1
  }

  const handleAdd = (item: CartProduct) => {
    dispatch({type: 'ADD', payload: item})
    toast.success('Item added')
    
  }

  return (
    <div className={styles.cardContainer}>
      <img src={product.image} className={styles.cardImage} alt={product.name} />
      <div className={styles.cardDetail}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.cardBody}>
        <p className={styles.cardType}>{product.type}</p>
        <p className={styles.cardPrice}>{product.price}, <small>00</small></p>
      </div>

      <button className={styles.cardButton} onClick={() => handleAdd(item)}>Add to cart</button>
      </div>
    </div>
  )
}

export default CardProduct