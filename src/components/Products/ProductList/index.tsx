// src/components/ProductsData.tsx
import { useState, useEffect } from "react";
import { processImageUrls } from "@/utils/imageUtils";
import Container from "@/components/Container";
import ProductCard from "./ProductCard";

// Interfaz para los productos
interface Product {
   id: string;
   nombre: string;
   descripcion: string;
   imageUrls: string[];
   categoria: string;
}

// Tipo para los productos agrupados por categoría
type ProductsByCategory = {
   [key: string]: Product[];
};

function ProductsData() {
   const [products, setProducts] = useState<Product[]>([]);
   const [productsByCategory, setProductsByCategory] =
      useState<ProductsByCategory>({});
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchProductsData = async () => {
         const API_KEY = import.meta.env.VITE_API_KEY;
         const SHEET_ID = import.meta.env.VITE_SHEET_ID;
         const RANGE = "A2:F";

         if (!API_KEY || !SHEET_ID) {
            setError("API_KEY o SHEET_ID no configurados en el archivo .env");
            setLoading(false);
            return;
         }

         try {
            const response = await fetch(
               `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
            );

            if (!response.ok) {
               throw new Error(
                  `Error en la respuesta de la API: ${response.status} ${response.statusText}`
               );
            }

            const data = await response.json();

            if (data.values && data.values.length > 0) {
               // Transforma los datos a un formato más utilizable
               const formattedProducts: Product[] = data.values.map(
                  (row: any) => ({
                     id: row[0] || "",
                     nombre: row[1] || "",
                     descripcion: row[2] || "",
                     imageUrls: processImageUrls(row[3] || ""),
                     categoria: row[4] || "Sin categoría", // Valor por defecto
                  })
               );

               setProducts(formattedProducts);

               // Agrupar productos por categoría
               const grouped = formattedProducts.reduce(
                  (acc: ProductsByCategory, product) => {
                     const category = product.categoria;
                     if (!acc[category]) {
                        acc[category] = [];
                     }
                     acc[category].push(product);
                     return acc;
                  },
                  {}
               );

               setProductsByCategory(grouped);
            } else {
               setProducts([]);
               setProductsByCategory({});
            }
         } catch (err) {
            console.error("Error al obtener datos:", err);
            setError(err instanceof Error ? err.message : "Error desconocido");
         } finally {
            setLoading(false);
         }
      };

      fetchProductsData();
   }, []);

   return (
      <section className="py-10">
         <Container>
            {loading && <p>Cargando productos...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
               <>
                  {Object.entries(productsByCategory).map(
                     ([categoria, productos]) => (
                        <div key={categoria} className="mb-12">
                           <h3 className="text-primary font-bold text-3xl border-l-[4px] border-primary pl-4 mb-6">
                              {categoria}
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {productos.map((product) => (
                                <ProductCard id={product.id} nombre={product.nombre} descripcion={product.descripcion} imageUrls={product.imageUrls} />
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
