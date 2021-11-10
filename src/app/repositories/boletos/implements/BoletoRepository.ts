import { IBoletoRepositoy } from "../IBoletoRepository";


/**
 * Repository usado para comunicar com dados
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class BoletoRepository implements IBoletoRepositoy {
    
    constructor(){
     
    }
  
    async findByBoleto(COD: string): Promise<any> {
      const usuario = await {
          'numero_boleto':"121212"
      }
      return usuario;
    }

}

export { BoletoRepository }