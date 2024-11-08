import ProductSearch from "@/Components/Products/ProductSearch";
import ProductTable from "@/Components/Products/ProductsTable";
import Heading from "@/Components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

type searchPageProps = {
    searchParams: {
        search: string
    }
}

async function searProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products

}

export default async function searchPage({ searchParams }: searchPageProps) {

    const products = await searProducts(searchParams.search)
    console.log(products)

    return (
        <>
            <Heading>Resultados de busquedad : {searchParams.search}</Heading>
            <div className='flex flex-col lg:flex-row lg:justify-end gap-5 '>
                <ProductSearch />
            </div>
            {products.length ? (
                <ProductTable
                    products={products}
                />
            ) : (
                <p className="mt-10 text-center text-lg">No hay resultados</p>
            )}

        </>
    )
}