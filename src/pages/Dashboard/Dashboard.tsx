import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Product } from '../../interfaces/products'
import { createProduct } from '../../services/products'

const Dashboard = () => {
  const [product, setProduct] = useState({
    amiiboSeries: '',
    character: '',
    gameSeries: '',
    head: '',
    image: '',
    name: '',
    release: '',
    tail: '',
    type: '',
    price: 0,
  })

  const navigate = useNavigate()
  const mutation = useMutation((newProduct: Product) => {
    return createProduct(newProduct)
  })

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(product)

  }

  return (
    <div className={styles.container}>
      <div>

      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formControlLogin}>
          <label htmlFor='amiibo'>Amiibo series</label>
          <input type="text" id="amiibo" name='amiiboSeries' value={product.amiiboSeries} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='character'>Character</label>
          <input type="text" id="character" name='character' value={product.character} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='game'>Game Series</label>
          <input type="text" id="game" name='gameSeries' value={product.gameSeries} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='head'>Head</label>
          <input type="text" id="head" name='head' value={product.head} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='image'>Image</label>
          <input type="url" id="image" name='image' value={product.image} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='name'>Name</label>
          <input type="text" id="name" name='name' value={product.name} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='release'>Release Date</label>
          <input type="date" id="release" name='release' value={product.release} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='tail'>Tail</label>
          <input type="text" id="tail" name='tail' value={product.tail} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='type'>Type</label>
          <input type="text" id="type" name='type' value={product.type} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor='price'>Price</label>
          <input type="number" id="price" name='price' value={product.price} onChange={handleChange} required />
        </div>

        <div className={styles.formControlLogin}>
          <button type='submit'>Add product</button>
        </div>
      </form>
    </div>
  )
}

export default Dashboard