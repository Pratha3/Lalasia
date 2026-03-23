// Server component — fetches products based on URL params (search, category, page)
// Passes data to ProductsClient which renders the grid + pagination

import SectionWrapper from "@/components/common/SectionWrapper";
import {
  getProducts,
  searchProducts,
  getProductsByCategory,
  getCategories,
  PAGE_SIZE,
} from "@/lib/services/productService";
import ProductsClient from "@/components/pages/product/ProductsClient";

interface Props {
  search?: string;
  category?: string;
  page?: number;
}

export default async function ProductsListSection({ search, category, page = 1 }: Props) {
  // Fetch products + categories in parallel
  const [data, categories] = await Promise.all([
    search
      ? searchProducts(search, page)
      : category
        ? getProductsByCategory(category, page)
        : getProducts(page),
    getCategories(),
  ]);

  return (
    <SectionWrapper>
      <ProductsClient
        products={data.products}
        total={data.total}
        categories={categories}
        pageSize={PAGE_SIZE}
      />
    </SectionWrapper>
  );
}
