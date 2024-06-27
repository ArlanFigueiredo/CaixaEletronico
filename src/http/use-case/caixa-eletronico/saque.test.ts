import { describe, it, expect } from "vitest";
import { SacarUseCase } from "./saque";
import { ErroValorSaque } from "@/exceptions/ErroValorSaque";
import { Cedulas } from "@/Model/Cedulas";
import { NovaCedulaFactory } from "@/Factories/Cedula-Factory";
import { SaqueFactory } from "@/Factories/saque-factory";

describe("Testando Caso de uso: saque", () => {
  var caixaEletronico = SaqueFactory();

  it("Deve verificar se é um objeto.", async () => {
    expect(typeof caixaEletronico).toBe("object");
  });

  //

  it("Deve verificar a se a instancia do objeto é do tipo SaqueUseCase", async () => {
    expect(caixaEletronico).toBeInstanceOf(SacarUseCase);
  });

  //

  it("Deve verificar se os objetos são iguais.", async () => {
    var cedulas = await caixaEletronico.Execute(10);
    var novasCedulas = NovaCedulaFactory();
    expect(cedulas).toMatchObject(novasCedulas);
  });
  
  it("Deve verificar se o valor da cedula está correto", async () => {
    var cedulas = await caixaEletronico.Execute(10);
    expect(cedulas[10]).toEqual(1)
  });

  //

  it("Deve verificar se o valores corretos está sendo retornado.", async () => {
    var cedulas = await caixaEletronico.Execute(100);
    expect(cedulas["100"]).toBe(1);
    expect(cedulas["50"]).toBe(0);
    expect(cedulas["20"]).toBe(0);
    expect(cedulas["10"]).toBe(0);
    expect(cedulas["5"]).toBe(0);
    expect(cedulas["2"]).toBe(0);
  });

  //

  it("Deve retornar uma exceção do tipo ErroValorSaque", async () => {
    expect(async () => {
      await caixaEletronico.Execute(41);
    }).rejects.toBeInstanceOf(ErroValorSaque);
  });

  //

  it("Deve verificar se a exceção está retornando corretamente o nome e a mensagem da", async () => {
    try {
      var cedula = await caixaEletronico.Execute(41);
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
