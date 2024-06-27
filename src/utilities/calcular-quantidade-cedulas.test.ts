import { describe, it, expect } from "vitest";
import { CalcularQuantidadeCedulas } from "./calcular-quantidade-cedulas";
import { Cedulas } from "@/Model/Cedulas";
import { CriarCedulasValores } from "./criar-cedulas";

describe("Testando Factory da entidade Cedula", async() => {
  var calcularQuantidadeCedulas = new CalcularQuantidadeCedulas();
  var valoresCedula = await CriarCedulasValores()

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof calcularQuantidadeCedulas).toBe("object");
  });

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof calcularQuantidadeCedulas.Execute).toBe("function");
  });

  it("Deve verificar se o valor da cedula de '10' está correto.", async () => {
    var novaCedula = new Cedulas();
    var executeCalculo = calcularQuantidadeCedulas.Execute(10, novaCedula, valoresCedula);
    expect((await executeCalculo).cedulas[10]).toBe(1);
  });

  it("Deve verificar se o 'valorSaque' está correto.", async () => {
    var novaCedula = new Cedulas();
    var executeCalculo = calcularQuantidadeCedulas.Execute(11, novaCedula, valoresCedula);
    expect((await executeCalculo).valorSaque).toBe(1);
  });

  it("Deve verificar se retorno da função é um objeto esperado.", async () => {
    var novaCedula = new Cedulas();
    var executeCalculo = calcularQuantidadeCedulas.Execute(11, novaCedula, valoresCedula);
    expect((await executeCalculo).cedulas).toMatchObject(novaCedula);
  });

  it("Deve verificar se o 'valorSaque' está correto", async () => {
    var novaCedula = new Cedulas();
    var executeCalculo = calcularQuantidadeCedulas.Execute(11, novaCedula, valoresCedula);
    expect((await executeCalculo).cedulas).toMatchObject(novaCedula);
  });
});
