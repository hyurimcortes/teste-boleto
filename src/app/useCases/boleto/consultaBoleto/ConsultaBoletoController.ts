import { Request, Response } from 'express';
import { ConsultaBoletoUseCase } from './consultaBoletoUseCase';

/**
 * Controller responsavel apenas para receber requisicao e da resposta
 */

class ConsultaBoletoConstoller {

    constructor(private consultaBoletoUseCase:ConsultaBoletoUseCase){

    }

    async handle(request:Request, response:Response): Promise<Response>{
     const { login, password } = request.body;

     const dadosAuth =   await  this.consultaBoletoUseCase.execute({login, password});
   
     return response.status(201).json(dadosAuth);
   
    }

}

export { ConsultaBoletoConstoller }