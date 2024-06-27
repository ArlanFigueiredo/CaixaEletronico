import { Cedulas } from "@/Model/Cedulas";
export async function CriarCedulasValores() {
  const cedulaValores: (keyof Cedulas)[] = ["100", "50", "20", "10", "5", "2"];
  return cedulaValores;
}
