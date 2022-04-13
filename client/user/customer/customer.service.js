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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const customer_schema_1 = require("./customer.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let CustomerService = class CustomerService {
    constructor(customerModal) {
        this.customerModal = customerModal;
    }
    async newCustomer(customer) {
        let Customer = new this.customerModal(customer);
        const saltOrRounds = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(Customer.pass, saltOrRounds);
        Customer.pass = hash;
        return Customer.save();
    }
    async getAll() {
        return this.customerModal.find().exec();
    }
    async getById(_id) {
        return this.customerModal.findOne({ _id });
    }
    async getForLogin(user) {
        return this.customerModal.findOne({ user });
    }
    async updateById(_id, proper, value) {
        let data = {};
        data[proper] = value;
        this.customerModal.findByIdAndUpdate(_id, data);
        return { messaje: 'update successfully, ' + proper + ': ' + value, status: 200 };
    }
};
CustomerService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(customer_schema_1.Customer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map