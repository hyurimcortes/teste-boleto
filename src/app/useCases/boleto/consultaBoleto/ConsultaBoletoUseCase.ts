

/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 * Esse Use Case é de authenticacao - use case mais especifico
 */

import { AppErrors } from "../../../../config/errors/AppErrors";
import { IBoletoRepositoy } from "../../../repositories/usuarios/IBoletoRepository";

interface IRequest {
    login:string;
    password:string;
}

interface IResponse {
    id:number;
    login:string;
    token:string;
}

class ConsultaBoletoUseCase {

    constructor(private boletoRepository:IBoletoRepositoy){

    }

     async execute({login,password}:IRequest): Promise<any>{
         // Usuario existe

        

         const boleto = await this.boletoRepository.findByBoleto('1');

       
         if(!boleto){
            const status = { "error":"Boleto não existe" }
             return  status;
           //  throw new AppErrors("Usuario Ou Senha não existe");
         }

      
        return {
            '1':'1'
        }

       

    }

}

export { ConsultaBoletoUseCase }