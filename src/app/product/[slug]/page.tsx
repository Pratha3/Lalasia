import ProductDetailInfo from "@/components/pages/product/ProductDetailInfo";
import ProductDetailRelated from "@/components/pages/product/ProductDetailRelated";
import { getProductById } from "@/lib/services/productService";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const id = Number(params.slug);

  if (isNaN(id)) return <p className="p-10 text-center">Product Not Found</p>;

  const product = await getProductById(id);

  if (!product) return <p className="p-10 text-center">Product Not Found</p>;

  return (
    <>
      <ProductDetailInfo product={product} />
      <ProductDetailRelated currentId={product.id} />
    </>
  );
}
