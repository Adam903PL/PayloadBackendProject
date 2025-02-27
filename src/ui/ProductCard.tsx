import Image from 'next/image'
import '@/app/(frontend)/styles.css'

interface Product {
  id: number
  title: string
  price: number
  updatedAt: string
  createdAt: string
  image: {
    url: string
    alt: string
  }
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  console.log(product)
  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.image ? (
          <Image
            src={product.image.url}
            alt={product.image.alt}
            width={300}
            height={200}
            className="product-image"
          />
        ) : (
          <p>Brak zdjęcia</p>
        )}
      </div>
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">Cena: {product.price} zł</p>
        <div className="product-dates">
          <p>Utworzono: {formatDate(product.createdAt)}</p>
          <p>Aktualizowano: {formatDate(product.updatedAt)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
