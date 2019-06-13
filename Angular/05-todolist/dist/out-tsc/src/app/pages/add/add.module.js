import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddPage } from './add.page';
var routes = [
    {
        path: '',
        component: AddPage
    }
];
var AddPageModule = /** @class */ (function () {
    function AddPageModule() {
    }
    AddPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddPage]
        })
    ], AddPageModule);
    return AddPageModule;
}());
export { AddPageModule };
//# sourceMappingURL=add.module.js.map