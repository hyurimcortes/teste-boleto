"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsuarioRepository_1 = require("../../../repositories/usuarios/implements/UsuarioRepository");
var UpdateUsuarioController_1 = require("./UpdateUsuarioController");
var UpdateUsuarioUseCase_1 = require("./UpdateUsuarioUseCase");
exports.default = (function () {
    var usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
    var updateUsuarioUseCase = new UpdateUsuarioUseCase_1.UpdateUsuarioUseCase(usuarioRepository);
    var updateUsuarioController = new UpdateUsuarioController_1.UpdateUsuarioController(updateUsuarioUseCase);
    return updateUsuarioController;
});
