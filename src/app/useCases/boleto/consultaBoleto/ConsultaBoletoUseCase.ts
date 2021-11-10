

/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 * Esse Use Case é de authenticacao - use case mais especifico
 */

import { AppErrors } from "../../../../config/errors/AppErrors";
import { IBoletoRepositoy } from "../../../repositories/boletos/IBoletoRepository";


interface IRequest {
    barCode:string;
    amount:string;
    expirationDate:string;
}

class ConsultaBoletoUseCase {

    constructor(private boletoRepository:IBoletoRepositoy){

    }

     async execute({ barCode, amount, expirationDate }:IRequest): Promise<any>{
         // Usuario existe

         if(!barCode){
            return AppErrors('Codigo de barra obrigatorio')
         }

         if(barCode.length != 44){
            return AppErrors('Codigo de barras invalido')
         }

         if(!amount){
            return AppErrors('Valor do boleto obrigatorio')
         }

         if(Number(amount) !== 0 && Number(amount) < 0){
            return AppErrors('Valor do boleto não pode ser zero ou menor que 0')
         }

         if(!expirationDate){
            return AppErrors('Boleto deve ter data de expiração')
         }
        

        return {
            barCode:barCode,
            amount:amount,
            expirationDate:expirationDate
        }

    
    }

}

export { ConsultaBoletoUseCase }