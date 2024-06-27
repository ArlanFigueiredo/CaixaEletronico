export class ErroValorSaque extends Error {
  constructor() {
    super();
    (this.name = "ErroValorSaque"),
      (this.message = "Erro: Saque não permitido para o valor informado.");
  }
}
