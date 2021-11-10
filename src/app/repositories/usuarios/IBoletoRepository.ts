
/**
 * Interface dos metodos e atributos usados no repository 
 */


 interface IBoletoRepositoyDTO{
     COD:string
 }
 
 interface IBoletoRepositoy {
      findByBoleto(COD:string):Promise<any>;
 }
 
 export { IBoletoRepositoy, IBoletoRepositoyDTO }