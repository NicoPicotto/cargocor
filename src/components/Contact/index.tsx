import { useState } from "react";
import Container from "../Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
   Phone,
   MessageCircle,
   Mail,
   CheckCircle,
   AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Contact = () => {
   const [formData, setFormData] = useState({
      nombre: "",
      email: "",
      empresa: "",
      mensaje: "",
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [alert, setAlert] = useState<{
      type: "success" | "error";
      message: string;
   } | null>(null);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Validación básica
      if (!formData.nombre || !formData.email || !formData.mensaje) {
         setAlert({
            type: "error",
            message:
               "Por favor completa los campos obligatorios (nombre, email y mensaje).",
         });
         return;
      }

      // Validación simple de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
         setAlert({
            type: "error",
            message: "Por favor ingresa un email válido.",
         });
         return;
      }

      setIsSubmitting(true);
      setAlert(null);

      try {
         // Crear FormData para enviar al PHP
         const form = new FormData();
         Object.entries(formData).forEach(([key, value]) => {
            form.append(key, value);
         });

         // URL relativa que apunta al PHP en la misma ubicación que los archivos estáticos
         const response = await fetch("./sendEmail.php", {
            method: "POST",
            body: form,
         });

         // Verificar el tipo de contenido
         const contentType = response.headers.get("content-type");

         // Loguear para depuración (puedes quitar esto en producción)
         console.log("Status:", response.status);
         console.log("Content-Type:", contentType);

         // Procesar la respuesta
         let result;
         try {
            // Primero intentamos como JSON
            if (contentType && contentType.includes("application/json")) {
               result = await response.json();
            } else {
               // Si no es JSON, intentamos parsear el texto
               const textResponse = await response.text();
               try {
                  result = JSON.parse(textResponse);
               } catch (e) {
                  console.error("Error al parsear respuesta:", textResponse);
                  throw new Error(
                     "Error al procesar la respuesta del servidor"
                  );
               }
            }
         } catch (error) {
            console.error("Error al procesar respuesta:", error);
            throw error;
         }

         if (result && result.success) {
            setAlert({
               type: "success",
               message:
                  "¡Tu mensaje ha sido enviado correctamente! Nos pondremos en contacto pronto.",
            });
            // Limpiar el formulario después de un envío exitoso
            setFormData({
               nombre: "",
               email: "",
               empresa: "",
               mensaje: "",
            });
         } else {
            setAlert({
               type: "error",
               message:
                  (result && result.error) ||
                  "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.",
            });
         }
      } catch (error) {
         setAlert({
            type: "error",
            message:
               "No se pudo conectar con el servidor. Verifica tu conexión e intenta nuevamente.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="py-10 min-h-[calc(100dvh-10.8rem)] relative">
         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/20 z-[-1]"></div>
         <img
            src="/home/hero.webp"
            alt="Trabajador de industria trasaladando mercadería"
            className="absolute top-0 object-top left-0 w-full h-full object-cover z-[-2]"
         />
         <Container>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:mt-20">
               <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
                  <h1 className="text-3xl font-bold mb-4">Contactanos</h1>
                  <div className="flex flex-col gap-4">
                     <div className="flex gap-2 items-center">
                        <div className="bg-primary p-2 rounded-full">
                           <Phone className="text-white" size={12} />
                        </div>
                        <a href="tel:03584388136">
                           Vía Telefónica al (0358) 4388136
                        </a>
                     </div>
                     <div className="flex gap-2 items-center">
                        <div className="bg-primary p-2 rounded-full">
                           <MessageCircle className="text-white" size={12} />
                        </div>
                        <a
                           href="https://wa.me/5493584388136?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20sus%20servicios"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Vía Whatsapp
                        </a>
                     </div>
                     <div className="flex gap-2 items-center">
                        <div className="bg-primary p-2 rounded-full">
                           <Mail className="text-white" size={12} />
                        </div>
                        <a href="mailto:ventas@cargocor.com.ar">
                           Vía Mail a ventas@cargocor.com.ar
                        </a>
                     </div>

                     <div className="border border-gray-200"></div>
                     <p className="text-sm text-gray-500">
                        Nuestro horario de atención de es de Lunes a Viernes de
                        08:00 a 12:00 y de 16:00 a 20:00.
                     </p>
                  </div>
               </div>
               <div className="col-span-1 md:col-span-4 bg-white p-4 rounded-lg shadow-sm">
                  <form
                     className="flex h-full flex-col gap-4"
                     onSubmit={handleSubmit}
                  >
                     <div className="flex w-full flex-col md:flex-row gap-2 items-center">
                        <div className="flex w-full flex-col gap-1">
                           <Label htmlFor="nombre">Nombre *</Label>
                           <Input
                              id="nombre"
                              name="nombre"
                              value={formData.nombre}
                              onChange={handleChange}
                              placeholder="Juan Perez"
                              required
                           />
                        </div>
                        <div className="flex w-full flex-col gap-1">
                           <Label htmlFor="email">Email *</Label>
                           <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="juanperez@gmail.com"
                              required
                           />
                        </div>
                        <div className="flex w-full flex-col gap-1">
                           <Label htmlFor="empresa">Empresa</Label>
                           <Input
                              id="empresa"
                              name="empresa"
                              value={formData.empresa}
                              onChange={handleChange}
                              placeholder="Mi Empresa SA"
                           />
                        </div>
                     </div>
                     <div className="flex h-full w-full flex-col gap-1">
                        <Label htmlFor="mensaje">Mensaje *</Label>
                        <Textarea
                           id="mensaje"
                           name="mensaje"
                           value={formData.mensaje}
                           onChange={handleChange}
                           className="h-full min-h-[150px]"
                           placeholder="Quiero más información acerca de..."
                           required
                        />
                     </div>
                     <Button
                        type="submit"
                        variant="secondary"
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                     </Button>
                     {alert && (
                        <Alert
                           className={`${
                              alert.type === "success"
                                 ? "bg-green-50 border-green-200 text-green-800"
                                 : "bg-red-50 border-red-200 text-red-800"
                           }`}
                        >
                           {alert.type === "success" ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                           ) : (
                              <AlertCircle className="h-4 w-4 text-red-600" />
                           )}
                           <AlertTitle>
                              {alert.type === "success"
                                 ? "¡Enviado con éxito!"
                                 : "Error"}
                           </AlertTitle>
                           <AlertDescription>{alert.message}</AlertDescription>
                        </Alert>
                     )}
                  </form>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Contact;
