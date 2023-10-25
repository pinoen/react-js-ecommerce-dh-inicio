// import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import CardProduct from "../../components/ui/CardProduct/CardProduct"
import { getProducts } from "../../services/products"
// import { Product } from "../../interfaces/products"
import { useQuery } from "react-query"
import { useState } from "react"

const Home = () => {
  const [page, setPage] = useState(0)
  const {data: products, isLoading, error} = useQuery(['products', page], () => getProducts(page), {
    keepPreviousData: true
  })

  // const [products, setProducts] = useState<Product[]>([])
  // const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  // This code was replace by a service.
  /* const getProducts = async() => {
    try {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  } */

  // useEffect(() => {
  //   getProducts().then(data => {
  //     setProducts(data)
  //   }).catch(() => {
  //     setError(true)
  //   }).finally(() => {
  //     setIsLoading(false)
  //   })
  // }, [])

  
  return (
    <>
    <Hero />
    {isLoading && <p className={styles.loading}>Loading...</p>}
    {error && <p className={styles.error}>Something went wrong</p>}
    <div className={styles.container}>
      {products?.map(product => (
        <CardProduct key={product.id} product={product} />))}
    </div>

    <div className={styles.paginationContainer}>
      <button onClick={() => setPage(page - 1)} disabled={page === 0} className={styles.paginationButton}>Previous</button>
      <span className={styles.paginationActive}>{page + 1}</span>
      <button onClick={() => setPage(page + 1)} className={styles.paginationButton}>Next</button>
    </div>
    </>
  )
}

export default Home