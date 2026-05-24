import { useParams } from 'react-router-dom'
import ProductsCards from '../components/ProductsCards'
import Navbar from '../components/Navbar'
import Order from '../components/Order'

export default function ProductsList() {
  const { categoryId } = useParams()
  return (
    <>
      <Navbar />
      <ProductsCards categoryId={categoryId} />
      <Order />
    </>
  )
}
