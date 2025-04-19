// src/components/ProductsData.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, groupProductsByCategory } from "@/api/products";
import Container from "@/components/Container";
import ProductCard from "./ProductCard";

function ProductsData() {
   const {
      data: products = [],
      isLoading,
      error,
   } = useQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
   });

   // Agrupar productos por categoría
   const productsByCategory = groupProductsByCategory(products);

   const toKebabCase = (text: string) => {
      return text
         .toLowerCase()
         .normalize("NFD")
         .replace(/[\u0300-\u036f]/g, "")
         .replace(/\s+/g, "-")
         .replace(/[^\w-]+/g, "");
   };

   return (
      <section className="py-10">
         <Container>
            {isLoading && <p>Cargando productos...</p>}
            {error && <p>Error: {(error as Error).message}</p>}
            {!isLoading && !error && (
               <>
                  {Object.entries(productsByCategory).map(
                     ([categoria, productos]) => (
                        <div
                           key={categoria}
                           id={toKebabCase(categoria)}
                           className="mb-12"
                        >
                           <h3 className="text-primary font-bold text-3xl border-l-[4px] border-primary pl-4 mb-6">
                              {categoria}
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {productos.map((product) => (
                                 <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    nombre={product.nombre}
                                    descripcion={product.descripcion}
                                    imageUrls={product.imageUrls}
                                 />
                              ))}
                           </div>
                        </div>
                     )
                  )}
               </>
            )}
         </Container>
      </section>
   );
}

export default ProductsData;
