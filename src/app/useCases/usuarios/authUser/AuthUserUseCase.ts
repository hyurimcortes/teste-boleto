import { UsuarioRepository } from "../../../repositories/usuarios/implements/UsuarioRepository";


/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 * Esse Use Case é de authenticacao - use case mais especifico
 */

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppErrors } from "../../../../config/errors/AppErrors";

interface IRequest {
    login:string;
    password:string;
}

interface IResponse {
    id:number;
    login:string;
    token:string;
}

class AuthUserUseCase {

    constructor(private usuarioRepository:UsuarioRepository){

    }

     async execute({login,password}:IRequest): Promise<any>{
         // Usuario existe

        

         const usuario = await this.usuarioRepository.findByLogin(login)

       
         if(!usuario){
            const status = { "error":"Usuario Ou Senha não existe" }
             return  status;
           //  throw new AppErrors("Usuario Ou Senha não existe");
         }

      
         const empresa = await this.usuarioRepository.findByEmpresa(usuario.COD_EMPRESA);
         
         if(!empresa.COD_EMPRESA){
            if(empresa.COD_EMPRESA != usuario.COD_EMPRESA){
              const status = { "error":"Esta empresa não pertence a este usuario" }
              return  status;
            }
         }
         
          // Senha esta correta

         /*const passCompare = compare(password, usuario.USU_SENHA);*/

         const pass = await this.usuarioRepository.findByPassword(password);

         if(!pass){
            const status = { "error":"Usuario Ou Senha não existe" }
            return  status;
         } 

      
         // gerar jwt

        let id = usuario.USU_COD;
        let cod_empresa = empresa.COD_EMPRESA;

        const token = sign( { id } , process.env.APP_KEY,{
          expiresIn:process.env.APP_EXPIRATION
        });

        return {
            id,
            login,
            token,
            cod_empresa
        }

       

    }

}

export { AuthUserUseCase }