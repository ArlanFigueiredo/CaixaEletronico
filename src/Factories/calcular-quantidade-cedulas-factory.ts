import { ICedulas } from "@/@Types/ICedulas";
import { CalcularQuantidadeCedulas } from "../utilities/calcular-quantidade-cedulas";
import { Cedulas } from "@/Model/Cedulas";

export function CalcularQuantidadeCedulasFactory(
  valorSaque: number,
  cedulas: ICedulas,
  cedulaValores: (keyof Cedulas)[]
) {
  var calcularQuantidadeCedulas = new CalcularQuantidadeCedulas().Execute(
    valorSaque,
    cedulas,
    cedulaValores
  );
  return calcularQuantidadeCedulas;
}
