"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsuarioController = void 0;
var UpdateUsuarioController = /** @class */ (function () {
    function UpdateUsuarioController(updateUsuarioUseCase) {
        this.updateUsuarioUseCase = updateUsuarioUseCase;
    }
    UpdateUsuarioController.prototype.handle = function (request, response) {
        var id = parseInt(request.params.id);
        this.updateUsuarioUseCase.execute({ id: id });
        return response.status(201).send();
    };
    return UpdateUsuarioController;
}());
exports.UpdateUsuarioController = UpdateUsuarioController;
