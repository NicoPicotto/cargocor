// src/components/ProductsData.tsx
import { useState, useEffect } from "react";
import { processImageUrls } from "@/utils/imageUtils";

// Interfaz para los productos
interface Product {
   id: string;
   nombre: string;
   descripcion: string;
   imageUrls: string[];
   categoria: string;
}

function ProductsData() {
   const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      // Función para obtener datos de Google Sheets
      const fetchProductsData = async () => {
         // Usar las variables de entorno de Vite
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
            console.log("Datos crudos de la API:", data);

            if (data.values && data.values.length > 0) {
               // Transforma los datos a un formato más utilizable
               const formattedProducts: Product[] = data.values.map(
                  (row: any) => ({
                     id: row[0] || "",
                     nombre: row[1] || "",
                     descripcion: row[2] || "",
                     imageUrls: processImageUrls(row[3] || ""),
                     categoria: row[4] || "",
                  })
               );

               console.log("Productos formateados:", formattedProducts);
               setProducts(formattedProducts);
            } else {
               console.log("No se encontraron datos en la hoja");
               setProducts([]);
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
      <div>
         {loading && <p>Cargando productos...</p>}
         {error && <p>Error: {error}</p>}
         {!loading && !error && (
            <div>
               <p>Productos cargados: {products.length}</p>
               <div>
                  {products.map((product) => (
                     <div
                        key={product.id}
                        style={{
                           margin: "20px 0",
                           padding: "10px",
                           border: "1px solid #ddd",
                        }}
                     >
                        <h3>{product.nombre}</h3>
                        <p>{product.descripcion}</p>
                        <p>
                           <strong>Categoría:</strong> {product.categoria}
                        </p>
                        <p>
                           <strong>Imágenes:</strong>
                        </p>
                        <div
                           style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "10px",
                           }}
                        >
                           {product.imageUrls.map((url, index) => (
                              <img
                                 key={index}
                                 src={url}
                                 alt={`${product.nombre} - imagen ${index + 1}`}
                                 style={{
                                    maxWidth: "200px",
                                    maxHeight: "200px",
                                 }}
                              />
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
}

export default ProductsData;
