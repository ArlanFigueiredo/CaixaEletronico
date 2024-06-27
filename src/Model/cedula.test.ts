import { describe, it, expect } from "vitest";
import { Cedulas } from "./Cedulas";

describe("Testando Factory da entidade Cedula", () => {
  var novaCedula = new Cedulas();

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof novaCedula).toBe("object");
  });

  it("Deve verificar se os valores passado para estão corretos.", async () => {
    novaCedula[100] = 100;
    expect(novaCedula[100]).toBe(100);
  });
});
