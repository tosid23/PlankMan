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
var core_1 = require("@angular/core");
var time_service_1 = require("../../services/time.service");
var TimeComponent = (function () {
    function TimeComponent(timeService) {
        var _this = this;
        this.timeService = timeService;
        this.timeService.getTime()
            .subscribe(function (time) {
            _this.times = time;
        });
    }
    TimeComponent.prototype.addTime = function (event) {
        var _this = this;
        event.preventDefault();
        var newTime = {
            username: "Siddharth Jaswal",
            time: this.time
        };
        this.timeService.addTime(newTime)
            .subscribe(function (time) {
            _this.times.push(time);
            _this.time = '';
        });
    };
    TimeComponent.prototype.deleteTime = function (id) {
        var times = this.times;
        this.timeService.deleteTime(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < times.length; i++) {
                    if (times[i]._id == id) {
                        times.splice(i, 1);
                    }
                }
            }
        });
    };
    return TimeComponent;
}());
TimeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'time',
        templateUrl: 'time.component.html',
    }),
    __metadata("design:paramtypes", [time_service_1.TimeService])
], TimeComponent);
exports.TimeComponent = TimeComponent;
//# sourceMappingURL=time.component.js.map