import { ICedulas } from "@/@Types/ICedulas";
import { Cedulas } from "@/Model/Cedulas";

export class CalcularQuantidadeCedulas {
  async Execute(valorSaque: number, cedulas: ICedulas, cedulaValores: (keyof Cedulas)[]) {

    for (var i = 0; i < cedulaValores.length; i++) {
      var valorCedula = parseInt(cedulaValores[i]);
      cedulas[cedulaValores[i]] = Math.floor(valorSaque / valorCedula);
      if (i == cedulaValores.length - 1) {
        if (((cedulas[cedulaValores[i - 1]] * parseInt(cedulaValores[i - 1])) + valorSaque) % 2 == 0 ) {
          valorSaque = ((cedulas[cedulaValores[i - 1]] * parseInt(cedulaValores[i - 1])) + valorSaque)
          cedulas[cedulaValores[i - 1]] = 0;
          cedulas[cedulaValores[i]] = Math.floor(valorSaque / valorCedula);
        }
      }
      valorSaque = valorSaque % valorCedula;
    }
    console.log(`4º valor saque: ${valorSaque}`)
    return {
      cedulas,
      valorSaque,
    };
  }
}
