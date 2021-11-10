import { Router } from 'express';
import  consultarBoletoController  from '../app/useCases/boleto/consultaBoleto';


const boletoRoutes = Router();

boletoRoutes.get("/", (request, response) => {
    return consultarBoletoController().handle(request, response);
})




export { boletoRoutes }