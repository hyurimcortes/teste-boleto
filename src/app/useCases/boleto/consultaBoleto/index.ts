

/**
 * Injeção de dependencias modo manual
 * Onde Repositorio->UseCase->Controller
 */

import { BoletoRepository } from "../../../repositories/boletos/implements/BoletoRepository";
import { ConsultaBoletoConstoller } from "./ConsultaBoletoController";
import { ConsultaBoletoUseCase } from "./consultaBoletoUseCase";

export default ():ConsultaBoletoConstoller => {

const boletoRepository = new BoletoRepository();
const consultaBoletoUseCase = new ConsultaBoletoUseCase(boletoRepository);
const consultarBoletoController = new ConsultaBoletoConstoller(consultaBoletoUseCase);

return consultarBoletoController 

}

