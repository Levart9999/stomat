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
exports.Favour = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
const patient_entity_1 = require("./patient.entity");
const material_entity_1 = require("./material.entity");
let Favour = class Favour {
    constructor(title, price, patient) {
        this.materials = new core_1.Collection(this);
        this.title = title;
        this.id = (0, uuid_1.v4)();
        this.price = price;
        this.patient = patient;
    }
};
exports.Favour = Favour;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], Favour.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Favour.prototype, "title", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Favour.prototype, "price", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: false }),
    __metadata("design:type", patient_entity_1.Patient)
], Favour.prototype, "patient", void 0);
__decorate([
    (0, core_1.ManyToMany)(() => material_entity_1.Material, material => material.favours, { owner: true }),
    __metadata("design:type", Object)
], Favour.prototype, "materials", void 0);
exports.Favour = Favour = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [String, String, patient_entity_1.Patient])
], Favour);
//# sourceMappingURL=favour.entity.js.map