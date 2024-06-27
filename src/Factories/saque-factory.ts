import { SacarUseCase } from "../http/use-case/caixa-eletronico/saque";
export function SaqueFactory() {
  const novoSaque = new SacarUseCase();
  return novoSaque;
}
