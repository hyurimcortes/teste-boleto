
/**
 * Interface dos metodos e atributos usados no repository 
 */

import { Usuarios } from "../../entities/Usuarios";


interface IUsuarioRepositoyDTO{
    name:string,
    senha:string,
    email:string,
    USU_NOME:string,
    USU_SENHA:string,
    USU_COD:number
}

interface IUsuarioRepositoy {
     create({name, email, senha}):Promise<void>;
     findByLogin(USU_NOME:string):Promise<Usuarios>;
     findByPassword(USU_SENHA:string):Promise<Usuarios>;
     findById(USU_COD:number):Promise<Usuarios>;
     findByEmpresa(COD_EMPRESA:string):Promise<Usuarios>;
}

export { IUsuarioRepositoy, IUsuarioRepositoyDTO }