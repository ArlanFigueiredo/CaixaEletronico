import { ErroValorSaque } from "@/exceptions/ErroValorSaque";
import { FastifyReply, FastifyRequest } from "fastify";
import { SaqueFactory } from "@/Factories/saque-factory";
import { z } from "zod";
import { Cedulas } from "@/Model/Cedulas";

export async function SacarCedulas(req: FastifyRequest, res: FastifyReply) {
  var novoSaqueFactory = SaqueFactory();

  const createBodySchema = z.object({
    valor: z.number().min(1).int({
      message:
        "Erro: o valor inserido não é um valor inteiro, por favor, informe um valor inteiro",
    }),
  });

  const { valor } = createBodySchema.parse(req.body);

  await novoSaqueFactory
    .Execute(valor)
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((error) => {
      if (error instanceof ErroValorSaque) {
        console.log(error);
        return res.status(400).send({ error: error });
      }
    });
}
