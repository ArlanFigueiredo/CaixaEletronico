import { FastifyInstance } from "fastify";
import { describe, it, expect } from "vitest";
import { app } from "./app";

describe("Testando Factory da entidade Cedula", async () => {
  var novoApp = app;

  it("Deve verificar se o metodo retorna um objeto(classe)", async () => {
    expect(typeof novoApp).toBe("object");
  });

  it("Deve verificar se o app é uma instancia do tipo FastifyInstance", async () => {
    expect(app).to.be.an.toBeInstanceOf(app.constructor);
  });
});
