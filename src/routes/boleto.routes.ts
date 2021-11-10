import { Router } from 'express';
import  consultarBoletoController  from '../app/useCases/usuarios/listUsuario';


const boletoRoutes = Router();

boletoRoutes.get("/", (request, response) => {
    return consultarBoletoController().handle(request, response);
})




export { boletoRoutes }