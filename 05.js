// example 1
// let myAdd: (baseVaule: number, incremet: number) => number =
//     function(x: number, y: number) : number { return x + y; }
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.onClickGood = function (e) { _this.info = e.message; };
    }
    return Handler;
}());
var h = new Handler();
uiElement.addClickListerner(h.onClickBad);
