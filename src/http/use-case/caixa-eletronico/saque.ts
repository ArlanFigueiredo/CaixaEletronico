import { ICedulas } from "@/@Types/ICedulas";
import { ErrorHandlerSaqueFactory } from "@/Factories/error-handler-saque-factory";
import { NovaCedulaFactory } from "@/Factories/Cedula-Factory";
import { CalcularQuantidadeCedulasFactory } from "@/Factories/calcular-quantidade-cedulas-factory";
import { ISacarUseCase } from "@/@Types/ISacarUseCase";
import { CriarCedulasValores } from "@/utilities/criar-cedulas";

export class SacarUseCase implements ISacarUseCase {
  async Execute(valor: number): Promise<ICedulas> {

    const cedulas = await NovaCedulaFactory();

    const cedulaValores =  await CriarCedulasValores()

    var { cedulas: cedulasCalculadas, valorSaque } = await CalcularQuantidadeCedulasFactory(valor, cedulas, cedulaValores);

    await ErrorHandlerSaqueFactory().Execute(valorSaque);
    
    return cedulasCalculadas;
  }
}
