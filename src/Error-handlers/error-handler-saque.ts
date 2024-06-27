import { ErroValorSaque } from "@/exceptions/ErroValorSaque";
export class ErrorHandlerSaque {
  async Execute(restoValorDeSaque: number) {
    if (restoValorDeSaque > 0) {
      throw new ErroValorSaque();
    }
  }
}
