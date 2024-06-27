import { describe, it, expect } from "vitest";
import { ISacarUseCase } from "./ISacarUseCase";
import { SacarUseCase } from "@/http/use-case/caixa-eletronico/saque";

describe("Testando ISacarUseCase", async () => {

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    var iSacarUseCase: ISacarUseCase = new SacarUseCase()
    expect(typeof iSacarUseCase).toBe("object");
  });

  it("Deve verificar se a classe 'SacarUseCase' implementa o metodo 'Execute' da interface", async () => {
    var iSacarUseCase: ISacarUseCase = new SacarUseCase()
    expect(iSacarUseCase).to.have.property('Execute').that.is.a('function')
  });

  
});
