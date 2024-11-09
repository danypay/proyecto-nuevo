import ProductSearch from '@/Components/Products/ProductSearch'
import ProductsPagination from '@/Components/Products/ProductsPagination'
import ProductTable from '@/Components/Products/ProductsTable'
import Heading from '@/Components/ui/Heading'
import { prisma } from '@/src/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

async function productCount() {
    return await prisma.product.count()
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize
  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true
    }
  })

  return products
}

export default async function ProductsPage({ searchParams }: { searchParams: { page: string } }) {

  const page = +searchParams.page || 1
  const pageSize = 10
  if(page < 0) redirect('/admin/products')
  
  const productsData = getProducts(page, pageSize)
  const totalProductsData = productCount()
  const [products, totalProducts] = await Promise.all([productsData,totalProductsData])
  const totalPages = Math.ceil(totalProducts / pageSize)

  if(page > totalPages)redirect('/admin/products')


  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5 '>
        <Link
          href={'/admin/products/new'}
          className='bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
        >Crear producto</Link>

        <ProductSearch/>
      </div>

      <ProductTable
        products={products}
      />

      <ProductsPagination
        page = {page}
        totalPages = {totalPages}
      />
    </>
  )
}
