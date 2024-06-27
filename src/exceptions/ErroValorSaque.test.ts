import { describe, it, expect } from "vitest";
import { ErroValorSaque } from "./ErroValorSaque";

describe("Testando classe de exceção 'ErroValorSaque'.", () => {
  const erroValorSaque = new ErroValorSaque();
  it("Deverá retornar o tipo de classe Error", () => {
    expect(erroValorSaque).toThrow(Error);
  });

  it("Deverá retornar a mensagem da exceção", () => {
    expect(erroValorSaque.message).toBe(
      "Erro: Saque não permitido para o valor informado."
    );
  });

  it("Deverá retornar o nome da classe de exceção", () => {
    expect(erroValorSaque.name).toBe("ErroValorSaque");
  });
});
