
import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { usuarioRoutes } from './usuario.routes';

const router = Router();

router.use("/api/usuarios", usuarioRoutes);
router.use("/api/login", authRoutes);
export { router }