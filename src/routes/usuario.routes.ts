import { Router } from 'express';
import { ensureAuthenticated } from '../database/middleware/ensureAuthenticated';
import  listUsuarioController  from '../app/useCases/usuarios/listUsuario';


const usuarioRoutes = Router();

usuarioRoutes.use(ensureAuthenticated);

usuarioRoutes.get("/", (request, response) => {
    return listUsuarioController().handle(request, response);
})




export { usuarioRoutes }