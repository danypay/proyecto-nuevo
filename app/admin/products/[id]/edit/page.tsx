import EditProductForm from "@/components/Products/EditProductForm"
import ProductForm from "@/components/Products/ProductForm"
import GobackButton from "@/components/ui/GobackButton"
import Heading from "@/components/ui/Heading"
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
