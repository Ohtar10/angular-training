var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Button = /** @class */ (function () {
    function Button(name) {
        this._name = name;
    }
    Object.defineProperty(Button.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}());
var LikeButton = /** @class */ (function (_super) {
    __extends(LikeButton, _super);
    function LikeButton(name) {
        var _this = _super.call(this, name) || this;
        _this._likes = 0;
        return _this;
    }
    LikeButton.prototype.click = function () {
        this._likes += 1;
    };
    Object.defineProperty(LikeButton.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: false,
        configurable: true
    });
    return LikeButton;
}(Button));
var likeButton = new LikeButton('Like');
console.log("Current like count: " + likeButton.likes);
likeButton.click();
console.log("Current like count: " + likeButton.likes);
console.log('About to click it 5 times');
for (var i = 0; i < 5; i++) {
    likeButton.click();
}
console.log("Current like count: " + likeButton.likes);
