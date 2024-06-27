import { describe, it, expect } from "vitest";
import { ErrorHandlerSaqueFactory } from "./error-handler-saque-factory";
import { ErroValorSaque } from "@/exceptions/ErroValorSaque";
import { ErrorHandlerSaque } from "@/Error-handlers/error-handler-saque";

describe("Testando Factory da classe 'ErrorHandlerSaque'.", () => {
  var erroHandlerSaque = ErrorHandlerSaqueFactory();
  it("Deve verificar se o metodo retorna uma function", async () => {
    expect(typeof erroHandlerSaque.Execute).toBe("function");
  });

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof erroHandlerSaque).toBe("object");
  });

  it("Deve verificar se o retorno é um objeto do tipo ErroHandlerSaque.", async () => {
    var resultadoErrorHandlerSaque = erroHandlerSaque.Execute(0);
    var novoErrorHandlerSaque = new ErrorHandlerSaque();
    expect(resultadoErrorHandlerSaque).toMatchObject(novoErrorHandlerSaque);
  });

  it("Deve verificar atributos como tipo e instancia, mensagem e nome da instancia", async () => {
    try {
      await erroHandlerSaque.Execute(1);
    } catch (error) {
      if (error instanceof ErroValorSaque) {
        expect(error).toBeInstanceOf(ErroValorSaque);
        expect(error.message).toBe(
          "Erro: Saque não permitido para o valor informado."
        );
        expect(error.name).toEqual("ErroValorSaque");
      }
    }
  });
});
