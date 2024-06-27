import { describe, it, expect } from "vitest";
import { SaqueFactory } from "./saque-factory";

describe("Testando factory da classe 'SaqueUseCase'.", () => {
  var caixaEletronico = SaqueFactory();

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof SaqueFactory()).toBe("object");
  });

  it("Deve verificar se retorna uma função contida dentro do objeto", async () => {
    expect(typeof caixaEletronico.Execute).toMatchObject("function");
  });
});
