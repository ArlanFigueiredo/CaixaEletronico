import { ICedulas } from "./ICedulas";

import { describe, it, expect } from "vitest";
import { NovaCedulaFactory } from "@/Factories/Cedula-Factory";

describe("Testando '@Types ICedula' ", async () => {
  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    var cedulas: ICedulas[] = [];
    expect(typeof cedulas).toBe("object");
  });

  it("Deve verificar se objeto pertence ao tipo certo da interface", async () => {
    const cedulas: ICedulas = await NovaCedulaFactory();

    expect(cedulas).to.containSubset({
      "100": 0,
      "50": 0,
      "20": 0,
      "10": 0,
      "5": 0,
      "2": 0,
    });
  });
});
