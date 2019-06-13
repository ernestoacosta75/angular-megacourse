import * as tslib_1 from "tslib";
import { ItemList } from './../../models/item-list.model';
import { DesiresService } from './../../services/desires.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var AddPage = /** @class */ (function () {
    function AddPage(_desiresService, _activatedRoute) {
        this._desiresService = _desiresService;
        this._activatedRoute = _activatedRoute;
        this.itemName = '';
        var listId = this._activatedRoute.snapshot.paramMap.get('listId');
        this.list = this._desiresService.getList(listId);
        console.log(this.list);
    }
    AddPage.prototype.ngOnInit = function () {
    };
    AddPage.prototype.addItem = function () {
        if (this.itemName.length === 0) {
            return;
        }
        var newItem = new ItemList(this.itemName);
        this.list.items.push(newItem);
        this.itemName = '';
        this._desiresService.saveInStorage();
    };
    AddPage = tslib_1.__decorate([
        Component({
            selector: 'app-add',
            templateUrl: './add.page.html',
            styleUrls: ['./add.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DesiresService,
            ActivatedRoute])
    ], AddPage);
    return AddPage;
}());
export { AddPage };
//# sourceMappingURL=add.page.js.map