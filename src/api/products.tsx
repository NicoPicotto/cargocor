// src/api/products.ts
import { processImageUrls } from "@/utils/imageUtils";

export interface Product {
   id: string;
   nombre: string;
   descripcion: string;
   imageUrls: string[];
   categoria: string;
}

export type ProductsByCategory = {
   [key: string]: Product[];
};

// Función para obtener todos los productos
export const fetchProducts = async (): Promise<Product[]> => {
   const API_KEY = import.meta.env.VITE_API_KEY;
   const SHEET_ID = import.meta.env.VITE_SHEET_ID;
   const RANGE = "A2:F";

   if (!API_KEY || !SHEET_ID) {
      throw new Error("API_KEY o SHEET_ID no configurados en el archivo .env");
   }

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
      return data.values.map((row: any) => ({
         id: row[0] || "",
         nombre: row[1] || "",
         descripcion: row[2] || "",
         imageUrls: processImageUrls(row[3] || ""),
         categoria: row[4] || "Sin categoría",
      }));
   }

   return [];
};

// Función para obtener un producto por ID
export const fetchProductById = async (id: string): Promise<Product | null> => {
   const products = await fetchProducts();
   const product = products.find((p) => p.id === id);
   return product || null;
};

// Función para agrupar productos por categoría
export const groupProductsByCategory = (
   products: Product[]
): ProductsByCategory => {
   return products.reduce((acc: ProductsByCategory, product) => {
      const category = product.categoria;
      if (!acc[category]) {
         acc[category] = [];
      }
      acc[category].push(product);
      return acc;
   }, {});
};
