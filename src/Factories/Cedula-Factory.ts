import { ICedulas } from "@/@Types/ICedulas";
import { Cedulas } from "../Model/Cedulas";

export async function NovaCedulaFactory() {
  const cedulas: ICedulas = new Cedulas();
  return cedulas;
}
