import { useParams } from 'react-router-dom'
import ProductsCards from '../components/ProductsCards'
import ProductsHeader from '../components/ProductsHeader'
import Order from '../components/Order'

export default function ProductsList() {
  const { categoryId } = useParams()
  return (
    <>
      <ProductsHeader categoryId={categoryId} />
      <ProductsCards categoryId={categoryId} />
      <Order />
    </>
  )
}
