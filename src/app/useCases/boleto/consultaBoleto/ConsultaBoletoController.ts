import { Request, Response } from 'express';
import { ConsultaBoletoUseCase } from './ConsultaBoletoUseCase';

/**
 * Controller responsavel apenas para receber requisicao e da resposta
 */

class ConsultaBoletoConstoller {

    constructor(private consultaBoletoUseCase:ConsultaBoletoUseCase){

    }

    async handle(request:Request, response:Response): Promise<Response>{
     const { barCode, amount, expirationDate } = request.body;

     const dadosAuth =   await  this.consultaBoletoUseCase.execute({ barCode, amount, expirationDate});
   
     return response.status(201).json(dadosAuth);
   
    }

}

export { ConsultaBoletoConstoller }