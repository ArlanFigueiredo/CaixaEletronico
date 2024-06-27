import { FastifyInstance } from "fastify";
import { SacarCedulas } from "../controllers/caixa-eletronico/sacar";

export async function appRoutes(app: FastifyInstance) {
  app.post("/caixa", SacarCedulas);
}
