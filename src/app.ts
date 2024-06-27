import fastify, { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { appRoutes } from "./http/routes/routes";
import cors from "@fastify/cors";
import  SwaggerUiOptions  from "swagger-ui-express";

export const app = fastify();



app.register(cors);


app.register(appRoutes);

app.register(appRoutes, { prefix: env.VERSION_ROUTE });

app.setErrorHandler((error, _, res) => {
  if (error instanceof ZodError) {
    return res.status(400).send({
      issues: error.format(),
    });
  }
  if (env.NODE_ENV !== "production") {
    console.error(error);
  }
  return res.status(500).send({
    message: "Internal server error",
  });
});
