"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsuarioRepository_1 = require("../../../repositories/usuarios/implements/UsuarioRepository");
var CreateUsuarioController_1 = require("./CreateUsuarioController");
var CreateUsuarioUseCase_1 = require("./CreateUsuarioUseCase");
/**
 * Injeção de dependencias modo manual
 * Onde Repositorio->UseCase->Controller
 */
exports.default = (function () {
    var usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
    var createUsuarioUseCase = new CreateUsuarioUseCase_1.CreateUsuarioUseCase(usuarioRepository);
    var createUsuarioController = new CreateUsuarioController_1.CreateUsuarioController(createUsuarioUseCase);
    return createUsuarioController;
});
