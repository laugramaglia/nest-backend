"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guards_1 = require("../auth/jwt-auth.guards");
const customer_service_1 = require("./customer.service");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async newCustomer(req) {
        return this.customerService.newCustomer(req.body);
    }
    async getById(par) {
        return this.customerService.getById(par);
    }
    async getAll() {
        return this.customerService.getAll();
    }
    async updateById(par, property, valueP) {
        if (property == 'type')
            return { message: 'Need to be a Master user' };
        return this.customerService.updateById(par, property, valueP);
    }
};
__decorate([
    common_1.Post('new'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "newCustomer", null);
__decorate([
    common_1.Get('get/only/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getById", null);
__decorate([
    common_1.Get('get/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guards_1.JwtAuthGuards),
    common_1.Put('update/only/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('prop')),
    __param(2, common_1.Body('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "updateById", null);
CustomerController = __decorate([
    common_1.Controller('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map