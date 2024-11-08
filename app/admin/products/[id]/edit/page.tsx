import EditProductForm from "@/Components/Products/EditProductForm"
import ProductForm from "@/Components/Products/ProductForm"
import GobackButton from "@/Components/ui/GobackButton"
import Heading from "@/Components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

type EditProductPageProps = {
    params: {
        id: string
    }
}

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })

    if (!product) {
        notFound()
    }

    return product
}

export default async function EditProductPage({ params }: EditProductPageProps) {

    const product = await getProductById(Number(params.id))

    return (
        <>
            <Heading>Editar Prodcuto: {product.name}</Heading>
            <GobackButton/>
            <EditProductForm>
                <ProductForm
                    product={product}
                />
            </EditProductForm>
        </>
    )
}
