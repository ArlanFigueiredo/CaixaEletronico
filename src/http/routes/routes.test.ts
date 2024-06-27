import { FastifyInstance } from "fastify";
import { describe, it, expect } from "vitest";
import { appRoutes } from "./routes";
import { app } from "@/app";
import { STATUS_CODES } from "http";

describe("Testando classe de exceção ErroValorSaque.", () => {
  var routes = appRoutes(app);

  it("Deverá verificar se é do tipo function", () => {
    expect(typeof appRoutes).toBe("function");
  });

  it("Deverá verificar se é do tipo objeto", () => {
    expect(typeof routes).toBe("object");
  });
});
