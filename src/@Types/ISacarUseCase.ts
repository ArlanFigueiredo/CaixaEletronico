import { ICedulas } from "./ICedulas";
export interface ISacarUseCase {
  Execute(valorSaque: number): Promise<ICedulas>;
}
