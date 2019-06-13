import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DesiresService } from 'src/app/services/desires.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(desiresService, _router, _alertController) {
        this.desiresService = desiresService;
        this._router = _router;
        this._alertController = _alertController;
    }
    /**
     * To navigate to the add page.
     * The keyword async converts the whole method
     * in a promise.
     */
    Tab1Page.prototype.addList = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: 'New list',
                            inputs: [
                                {
                                    name: "title",
                                    type: "text",
                                    placeholder: "List name"
                                }
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel");
                                    }
                                },
                                {
                                    text: "Create",
                                    handler: function (data) {
                                        console.log(data);
                                        if (data.title.length == 0) {
                                            return;
                                        }
                                        else {
                                            //Creating the list
                                            var listId = _this.desiresService.createList(data.title);
                                            _this._router.navigateByUrl(_this._router.url + ("/add/" + listId));
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DesiresService,
            Router,
            AlertController])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map