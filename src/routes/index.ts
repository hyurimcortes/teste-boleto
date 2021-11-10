
import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { boletoRoutes } from './boleto.routes';

const router = Router();

router.use("/api/boletos", boletoRoutes);
router.use("/api/login", authRoutes);
export { router }