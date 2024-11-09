import AddProductForm from "@/Components/Products/AddProductForm";
import ProductForm from "@/Components/Products/ProductForm";
import Heading from "@/Components/ui/Heading";


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
