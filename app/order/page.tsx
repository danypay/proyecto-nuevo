import ProductCard from "@/Components/Products/ProductCard"
import Heading from "@/Components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

async function getProducts() {
  const products = await prisma.product.findMany()

  return products
}

export default async function OrderPage() {

  const products = await getProducts()

  return (
    <>
      <Heading>
        Elige y personaliza tu pedido a continuación
      </Heading>

      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4 items-start">
      {products.map( product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
      </div>
    </>
  )
}