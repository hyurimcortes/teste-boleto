
import { Router } from 'express';
import { boletoRoutes } from './boleto.routes';

const router = Router();

router.use("/api/boletos", boletoRoutes);
export { router }