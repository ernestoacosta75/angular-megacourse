import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { Storage } from '@ionic/storage';
var DesiresService = /** @class */ (function () {
    function DesiresService(_storage) {
        this._storage = _storage;
        this.lists = [];
        this.loadFromStorage();
    }
    /**
     * To create a new list.
     * @param title List title
     */
    DesiresService.prototype.createList = function (title) {
        var newList = new List(title);
        this.lists.push(newList);
        this.saveInStorage();
        return newList.id;
    };
    /**
     * Returns the list with that id.
     * @param listId  List ID
     */
    DesiresService.prototype.getList = function (listId) {
        listId = Number(listId);
        return this.lists.find(function (theList) { return theList.id === listId; });
    };
    /**
     * To persist in the local storage
     * any info that must be saved into
     * the device.
     */
    DesiresService.prototype.saveInStorage = function () {
        this._storage.set('data', this.lists);
    };
    /**
     * Load the information persisted on
     * the local storage.
     */
    DesiresService.prototype.loadFromStorage = function () {
        var _this = this;
        this._storage.get('data').then(function (val) {
            if (val == null) {
                _this.lists = [];
            }
            else {
                _this.lists = val;
            }
        });
    };
    DesiresService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], DesiresService);
    return DesiresService;
}());
export { DesiresService };
//# sourceMappingURL=desires.service.js.map