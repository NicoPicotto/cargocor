// src/utils/imageUtils.ts

/**
 * Convierte una URL de Google Drive en una URL directa para usar en etiquetas <img>
 * @param {string} driveUrl - URL original de Google Drive
 * @returns {string} URL convertida para acceso directo
 */
export function convertGoogleDriveUrl(driveUrl: string): string {
   const regex = /\/d\/([a-zA-Z0-9_-]+)/;
   const match = driveUrl.match(regex);

   if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000&authuser=1`;
   }

   return driveUrl;
}

/**
 * Procesa una cadena de URLs separadas por comas y las convierte en un array de URLs directas
 * @param {string} imageUrlsString - Cadena con URLs separadas por comas
 * @returns {Array<string>} Array de URLs convertidas
 */
export function processImageUrls(imageUrlsString: string): string[] {
   if (!imageUrlsString) return [];

   const urls = imageUrlsString.split(",").map((url) => url.trim());

   return urls.map((url) => convertGoogleDriveUrl(url));
}
