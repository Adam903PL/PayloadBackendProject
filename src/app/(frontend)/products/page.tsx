// app/(frontend)/products/page.tsx
import ProductCard from '@/ui/ProductCard'
import getProducts from '@/lib/action'

import '@/app/(frontend)/styles.css'

interface Product {
  id: number
  title: string
  price: number
  updatedAt: string
  createdAt: string
  image: {
    // Change from "featuredImage" to "image"
    url: string
    alt: string
  }
}
export default async function ProductsPage() {
  try {
    const products = await getProducts()
    return (
      <div className="container">
        <h1 className="page-title">Nasze Produkty</h1>
        <div className="product-grid">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    return <div>Error loading products</div>
  }
}
