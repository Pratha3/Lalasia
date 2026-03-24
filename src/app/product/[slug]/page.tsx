import ProductDetailInfo from "@/components/pages/product/ProductDetailInfo";
import ProductDetailRelated from "@/components/pages/product/ProductDetailRelated";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = Number(slug);

  if (isNaN(id)) return <p className="p-10 text-center">Product Not Found</p>;

  return (
    <>
      <ProductDetailInfo id={id} />
      <ProductDetailRelated currentId={id} />
    </>
  );
}
