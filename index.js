var Preloader = /** @class */ (function () {
    function Preloader() {
        this.isVisible = false;
        this.isInfinite = false;
        this.show = function () {
            var wrapper = document.createElement("div");
            wrapper.id = "preloader-main-wrapper";
            document.body.append(wrapper);
            var inner = document.createElement("div");
            inner.id = "preloader-inner-wrapper";
            wrapper.append(inner);
            var progressBar = document.createElement("div");
            progressBar.id = "preloader-progress-bar";
            inner.append(progressBar);
        };
        this.hide = function () {
            var preloader = document.querySelector("#preloader-main-wrapper");
            preloader === null || preloader === void 0 ? void 0 : preloader.remove();
        };
        this.progress = function (percentage) {
            var progressBar = document.querySelector("#preloader-progress-bar");
            if (!progressBar) {
                return;
            }
            progressBar.style.width = "".concat(percentage, "%");
        };
    }
    return Preloader;
}());
var preloader = new Preloader();
preloader.show();
//  preloader.hide()
preloader.progress(25);
