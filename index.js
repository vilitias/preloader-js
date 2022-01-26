var PreloaderProgressBar = /** @class */ (function () {
    function PreloaderProgressBar() {
        this.isVisible = false;
        this.isInfinite = false;
        this.show = function (type) {
            var wrapper = document.createElement("div");
            wrapper.id = "preloader-main-screen";
            document.body.append(wrapper);
            var inner = document.createElement("div");
            inner.id = "preloader-progress-bar-".concat(type);
            wrapper.append(inner);
            var progressBar = document.createElement("div");
            progressBar.id = "preloader-progress-bar-inner-".concat(type);
            inner.append(progressBar);
        };
        this.hide = function () {
            var preloader = document.querySelector("#preloader-main-screen");
            preloader === null || preloader === void 0 ? void 0 : preloader.remove();
        };
        this.setProgress = function (percentage) {
            var progressBar = document.querySelector("#preloader-progress-bar-inner");
            if (!progressBar) {
                return;
            }
            progressBar.style.width = "".concat(percentage, "%");
        };
    }
    return PreloaderProgressBar;
}());
var PreloaderInfinite = /** @class */ (function () {
    function PreloaderInfinite() {
        this.show = function (type) {
            var wrapper = document.createElement("div");
            wrapper.id = "preloader-main-screen";
            document.body.append(wrapper);
            var outerCircle = document.createElement("div");
            outerCircle.id = "preloader-outer-circle-".concat(type);
            wrapper.append(outerCircle);
            var middleCircle = document.createElement("div");
            middleCircle.id = "preloader-middle-circle-".concat(type);
            outerCircle.append(middleCircle);
            var innerCircle = document.createElement("div");
            innerCircle.id = "preloader-inner-circle-".concat(type);
            outerCircle.append(innerCircle);
        };
        this.hide = function () {
            var preloader = document.querySelector("#preloader-main-screen");
            preloader === null || preloader === void 0 ? void 0 : preloader.remove();
        };
    }
    return PreloaderInfinite;
}());
var preloader = new PreloaderProgressBar();
preloader.show("sputnik");
//  preloader.hide()
// preloader.setProgress(25);
