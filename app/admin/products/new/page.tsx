import AddProductForm from "@/components/Products/AddProductForm";
import ProductForm from "@/components/Products/ProductForm";
import Heading from "@/components/ui/Heading";


export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>

      <AddProductForm>
        <ProductForm/>
      </AddProductForm>
    </>
  )
}
