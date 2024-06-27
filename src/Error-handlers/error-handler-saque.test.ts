import { describe, it, expect } from "vitest";
import { ErrorHandlerSaque } from "./error-handler-saque";
import { ErroValorSaque } from "@/exceptions/ErroValorSaque";
describe("Testando classe 'ErrorHandlerSaque' ", async () => {
  var erroHandlerSaque = new ErrorHandlerSaque();

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof erroHandlerSaque).toBe("object");
  });

  it("Deve verificar se o metodo retorna uma function)", async () => {
    expect(typeof erroHandlerSaque.Execute).toBe("function");
  });

  it("Deve verificar se os atributos da exceção estão corretos.", async () => {
    try {
      await erroHandlerSaque.Execute(1);
    } catch (error) {
      if (error instanceof ErroValorSaque) {
        expect(error.message).toBe(
          "Erro: Saque não permitido para o valor informado."
        );
        expect(error.name).toBe("ErroValorSaque");
      }
    }
  });
});
