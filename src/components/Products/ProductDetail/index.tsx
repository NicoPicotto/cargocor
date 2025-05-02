import Container from "@/components/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "@/api/products";
import { Link } from "react-router-dom";
import { Phone, ArrowLeft } from "lucide-react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ProductCard from "../ProductList/ProductCard";

const ProductDetail = () => {
   const { id } = useParams<{ id: string }>();

   const {
      data: product,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["product", id],
      queryFn: () => fetchProductById(id || ""),
      enabled: !!id,
   });

   const { data: allProducts = [] } = useQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
   });

   // Obtener productos relacionados (misma categoría, excluyendo el actual)
   const relatedProducts = allProducts
      .filter((p) => p.categoria === product?.categoria && p.id !== product?.id)
      .slice(0, 3);

   if (isLoading) {
      return (
         <section className="py-10 min-h-[100dvh]">
            <Container>
               <div className="py-10">
                  <p>Cargando producto...</p>
               </div>
            </Container>
         </section>
      );
   }

   if (error) {
      return (
         <section className="py-10 min-h-[100dvh]">
            <Container>
               <div className="py-10">
                  <h1 className="text-2xl font-bold">Producto no encontrado</h1>
                  <p>El producto que buscas no existe o ha sido eliminado.</p>
               </div>
            </Container>
         </section>
      );
   }

   if (!product) {
      return (
         <section className="py-10 min-h-[100dvh]">
            <Container>
               <div className="py-10">
                  <h1 className="text-2xl font-bold">Producto no encontrado</h1>
                  <p>El producto que buscas no existe o ha sido eliminado.</p>
               </div>
            </Container>
         </section>
      );
   }

   return (
      <section className="py-10">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <Carousel className="w-full">
                  <CarouselContent className="relative w-full md:h-[550px] ml-0">
                     {product.imageUrls.map((slide, index) => (
                        <CarouselItem
                           key={index}
                           className="flex-none rounded-lg overflow-hidden w-full p-0 m-0"
                        >
                           <div className="w-full h-full aspect-[1/1] bg-gray-100 flex items-center justify-center">
                              <img
                                 src={slide as string}
                                 alt={`Slide ${index}`}
                                 className="h-full w-full  object-cover"
                              />
                           </div>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-primary bg-white rounded-full p-2">
                     ◀
                  </CarouselPrevious>
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-primary bg-white rounded-full p-2">
                     ▶
                  </CarouselNext>
               </Carousel>
               <div className="flex flex-col gap-2">
                  <h1 className="text-4xl text-primary font-bold">
                     {product.nombre}
                  </h1>
                  <p className="text-gray-500">{product.categoria}</p>

                  <h2 className="text-xl ">Descripción</h2>
                  <p className="text-gray-700 text-lg whitespace-pre-line">
                     {product.descripcion}
                  </p>

                  <div className="flex flex-col md:flex-row items-center gap-2 mt-2">
                     <Button asChild className="w-full md:w-fit">
                        <a href="tel:03584388136">
                           <Phone />
                           Contactar por este producto
                        </a>
                     </Button>
                     <Link to="/productos" className="w-full md:w-fit">
                        <Button
                           variant="outline"
                           className="text-primary w-full"
                        >
                           <ArrowLeft />
                           Volver a ver más productos
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex my-10 gap-6 items-center">
               <div className="border border-gray-300 w-full"></div>
               <img src="/common/logogrande.svg" alt="Logo cargocor" className="w-12 h-12" />
               <div className="border border-gray-300 w-full"></div>
            </div>
            {relatedProducts.length > 0 && (
               <div>
                  <h3 className="text-primary font-bold text-3xl border-l-[4px] border-primary pl-4 mb-6">
                     Productos relacionados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {relatedProducts.map((relatedProduct) => (
                        <ProductCard
                           key={relatedProduct.id}
                           id={relatedProduct.id}
                           nombre={relatedProduct.nombre}
                           descripcion={relatedProduct.descripcion}
                           imageUrls={relatedProduct.imageUrls}
                        />
                     ))}
                  </div>
               </div>
            )}
         </Container>
      </section>
   );
};
export default ProductDetail;
