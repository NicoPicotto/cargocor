// src/utils/imageUtils.ts

/**
 * Convierte una URL de Google Drive en una URL directa para usar en etiquetas <img>
 * @param {string} driveUrl - URL original de Google Drive
 * @returns {string} URL convertida para acceso directo
 */
export function convertGoogleDriveUrl(driveUrl: string): string {
   // Extraer el ID del archivo usando expresiones regulares
   const regex = /\/d\/([a-zA-Z0-9_-]+)/;
   const match = driveUrl.match(regex);

   if (match && match[1]) {
      const fileId = match[1];
      // Agregar el parámetro authuser=0 que resuelve el problema
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000&authuser=0`;
   }

   // Si no se puede extraer el ID, devolver la URL original
   return driveUrl;
}

/**
 * Procesa una cadena de URLs separadas por comas y las convierte en un array de URLs directas
 * @param {string} imageUrlsString - Cadena con URLs separadas por comas
 * @returns {Array<string>} Array de URLs convertidas
 */
export function processImageUrls(imageUrlsString: string): string[] {
   if (!imageUrlsString) return [];

   // Dividir la cadena por comas y eliminar espacios en blanco
   const urls = imageUrlsString.split(",").map((url) => url.trim());

   // Convertir cada URL al formato correcto
   return urls.map((url) => convertGoogleDriveUrl(url));
}
