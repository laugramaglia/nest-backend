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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = exports.Customer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_type_enum_1 = require("../auth/role-type/role-type.enum");
let Customer = class Customer extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Customer.prototype, "user", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Customer.prototype, "pass", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Customer.prototype, "coin", void 0);
__decorate([
    mongoose_1.Prop({ enum: role_type_enum_1.RoleType, default: role_type_enum_1.RoleType.Customer }),
    __metadata("design:type", String)
], Customer.prototype, "type", void 0);
Customer = __decorate([
    mongoose_1.Schema()
], Customer);
exports.Customer = Customer;
exports.CustomerSchema = mongoose_1.SchemaFactory.createForClass(Customer);
//# sourceMappingURL=customer.schema.js.map