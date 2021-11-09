import { getRepository, Repository } from "typeorm";
import { Usuarios } from "../../../entities/Usuarios";
import { IUsuarioRepositoy, IUsuarioRepositoyDTO } from "../IUsuarioRepository";


/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class UsuarioRepository implements IUsuarioRepositoy {
    
    private usuario:Repository<Usuarios>;

    constructor(){
        this.usuario = getRepository(Usuarios);
    }
  
    async findByEmpresa(COD_EMPRESA: string): Promise<Usuarios> {
      const usuario = await this.usuario.createQueryBuilder().select(`"COD_EMPRESA"`).where(`"COD_EMPRESA" = '${COD_EMPRESA}'`).getRawOne();
      return usuario;
    }


  async findById(USU_COD: number): Promise<Usuarios> {
    const usuario = await this.usuario.findOne({USU_COD});
    return usuario;
  }

  
  async findByLogin(USU_NOME: string): Promise<Usuarios> {
    const usuario = await this.usuario.findOne({USU_NOME});
    return usuario;
  }

  async findByPassword(USU_SENHA: string): Promise<Usuarios> {
    const usuario = await this.usuario.findOne({USU_SENHA});
    return usuario;
  }
  


    async create({ name, email, senha }: IUsuarioRepositoyDTO): Promise<void> {
       
      /* const usuario = await this.usuario.create({
                      name,
                      email,
                      senha
                    });

        this.usuario.save(usuario);
     */
    }


}

export { UsuarioRepository }