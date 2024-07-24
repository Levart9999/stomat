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
exports.Patient = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
const favour_entity_1 = require("./favour.entity");
let Patient = class Patient {
    constructor(name, phone) {
        this.favours = new core_1.Collection(this);
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.phone = phone;
    }
};
exports.Patient = Patient;
__decorate([
    (0, core_1.PrimaryKey)({ type: "uuid" }),
    __metadata("design:type", String)
], Patient.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Patient.prototype, "phone", void 0);
__decorate([
    (0, core_1.OneToMany)(() => favour_entity_1.Favour, favour => favour.patient),
    __metadata("design:type", Object)
], Patient.prototype, "favours", void 0);
exports.Patient = Patient = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [String, String])
], Patient);
//# sourceMappingURL=patient.entity.js.map