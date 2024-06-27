import { describe, it, expect } from "vitest";
import { NovaCedulaFactory } from "./Cedula-Factory";
import { Cedulas } from "../Model/Cedulas";

describe("Testando Factory da entidade Cedula", async () => {
  var novaCedula = await NovaCedulaFactory();

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof novaCedula).toBe("object");
  });

  it("Deve verificar se o retorno é um objeto do tipo Cedula", async () => {
    var novasCedulas = new Cedulas();
    expect(novaCedula).toMatchObject(novasCedulas);
  });

  it("Deve verificar se os valores passado para estão corretos.", async () => {
    novaCedula[100] = 100;
    expect(novaCedula[100]).toBe(100);
  });
});
