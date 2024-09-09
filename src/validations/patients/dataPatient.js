import { z } from "zod";

export const data = z.object({
  nombres: z.string().min(1, "Este campo es requerido"),
  apellidos: z.string().min(1, "Este campo es requerido"),
  dni: z.union([z.string(), z.number()]).refine((val) => String(val).length > 0, "Este campo es requerido"),
  genero: z.enum(["Masculino", "Femenino"], "Este campo es requerido"),
  edad:  z.union([z.string(), z.number()]).refine((val) => String(val).length > 0, "Este campo es requerido"),
  celular: z.string().min(1, "Este campo es requerido"),
  fecha_nac: z.string().min(1, "Este campo es requerido"),
  direccion: z.string().min(1, "Este campo es requerido"),
  sede: z.enum(["Lima", "Arequipa", "Chiclayo"], "Este campo es requerido"),
  locacion: z.string().min(1, "Este campo es requerido"),
  email_pat: z
    .string()
    .optional(),
  vendedor: z.enum(
    ["Yessenia Anaí Cuya Sarango", "Zuleik Robles Ortiz", "No Habido", "Otros"],
    "Este campo es requerido"
  ),
  otro_contact: z.string().optional(),
  estado: z.enum(
    ["Cotización", "Contrato", "Donación", "EsSalud", "Accesorios"],
    "Este campo es requerido"
  ),
  canal: z.enum(
    [
      "Facebook",
      "Youtube",
      "TikTok",
      "Instagram",
      "Recomendación",
      "Página Web",
    ],
    "Este campo es requerido"
  ),
  time_ampu: z.string().min(1, "Este campo es requerido"),
  motivo: z.string().min(1, "Este campo es requerido"),
  afecciones: z.string().optional(),
  alergias: z.string().optional(),
  observacion: z.string().optional(),
});
