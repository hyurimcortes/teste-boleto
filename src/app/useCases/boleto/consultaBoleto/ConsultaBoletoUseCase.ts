

/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 * Esse Use Case é de authenticacao - use case mais especifico
 */

import { AppErrors } from "../../../../config/errors/AppErrors";
import { IBoletoRepositoy } from "../../../repositories/boletos/IBoletoRepository";


interface IRequest {
    barCode:number;
    amount:string;
    expirationDate:string;
}

class ConsultaBoletoUseCase {

    constructor(private boletoRepository:IBoletoRepositoy){

    }

     async execute({ barCode, amount, expirationDate }:IRequest): Promise<any>{
         // Usuario existe

        

         const boleto = await this.boletoRepository.findByBoleto('1');

       
         if(!boleto){
            const status = { "error":"Boleto não existe" }
             return  status;
           //  throw new AppErrors("Usuario Ou Senha não existe");
         }

      
        return {
            barCode:21313,
            amount:'string',
            expirationDate:'string'
        }

       

    }

}

export { ConsultaBoletoUseCase }