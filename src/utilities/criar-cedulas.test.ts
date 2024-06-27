import { describe, it, expect } from "vitest";
import { CalcularQuantidadeCedulas } from "./calcular-quantidade-cedulas";
import { Cedulas } from "@/Model/Cedulas";
import { CriarCedulasValores } from "./criar-cedulas";

describe("Testando Factory da entidade Cedula", async () => {
  var valoresCedula = await CriarCedulasValores();
  const cedulaValores: (keyof Cedulas)[] = ["100", "50", "20", "10", "5", "2"];

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(valoresCedula).toMatchObject(cedulaValores);
  });

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(valoresCedula[100]).toBeUndefined();
  });

  it("Deve verificar se as cedulas estão de acordo.", async () => {
    expect(parseInt(cedulaValores[0])).toBe(100);
    expect(parseInt(cedulaValores[1])).toBe(50);
    expect(parseInt(cedulaValores[2])).toBe(20);
    expect(parseInt(cedulaValores[3])).toBe(10);
    expect(parseInt(cedulaValores[4])).toBe(5);
    expect(parseInt(cedulaValores[5])).toBe(2);
  });
});
