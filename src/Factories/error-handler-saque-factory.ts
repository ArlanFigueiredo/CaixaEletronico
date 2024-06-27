import { ErrorHandlerSaque } from "@/Error-handlers/error-handler-saque";
export function ErrorHandlerSaqueFactory() {
  var novoErrorHandlerSaque = new ErrorHandlerSaque();
  return novoErrorHandlerSaque;
}
