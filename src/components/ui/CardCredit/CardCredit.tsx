import { useState } from 'react'
import Cards from 'react-credit-cards-2'
import styles from './CardCredit.module.css'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { toast } from 'sonner'
import useCartContext from '../../../hooks/useCartContext'
import { CartProduct } from '../../../interfaces/products'
const CardCredit = () => {
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  })

  const {dispatch} = useCartContext()
  
  const { name, number, expiry, cvc } = cardData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setCardData(prev => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData(prev => ({ ...prev, focus: e.target.name }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!name || !number || !expiry || !cvc) {
      toast.error('Please fill in all fields');
      return;
    }

    
    setCardData({
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focus: '',
    })

    toast.success('Thank you for buying!')

    dispatch({type: 'CLEAR', payload: {} as CartProduct})
  }

  return (
    <div className={styles.container}>
      <div>
        <Cards 
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={cardData.focus as any}
        />

      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="number">Card Number</label>
          <input type="text" id="number" name="number" value={number} onChange={handleInputChange} onFocus={handleInputFocus} />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="name">Card Name</label>
          <input type="text" name="name" id="name" value={name} onChange={handleInputChange} onFocus={handleInputFocus} />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Card Expiry</label>
            <input type="text" name="expiry" id="expiry" value={expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc">Card CVV</label>
            <input type="text" name="cvc" id="cvc" value={cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
          </div>
        </div>
      <button type='submit' className={styles.buyButton}>Buy now</button>

      </form>
    </div>
  )
}

export default CardCredit