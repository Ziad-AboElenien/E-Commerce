import ProductDetailsScreen from "@/src/features/products/screens/product-details.screen";

type ProductDetailsPageProps ={
    params: { id: string }
}

export default async function ProductPage({params}:ProductDetailsPageProps) {

  const { id } = params

  return <>
  <ProductDetailsScreen productId={id}/>
  </>
}
