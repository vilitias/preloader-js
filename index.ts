class PreloaderProgressBar {
    isVisible = false;
    isInfinite = false;

    show = (type: "sputnik"|"ria") => {
        const wrapper = document.createElement("div");
        wrapper.id = "preloader-main-screen";  
        document.body.append(wrapper);

        const inner = document.createElement("div");
        inner.id = `preloader-progress-bar-${type}`
        wrapper.append(inner);

        const progressBar = document.createElement("div");
        progressBar.id = `preloader-progress-bar-inner-${type}`;
        inner.append(progressBar);
    };
    hide = () => {
        const preloader = document.querySelector("#preloader-main-screen");
        preloader?.remove()
    };

    setProgress = (percentage: number) => {
        const progressBar = document.querySelector<HTMLDivElement>("#preloader-progress-bar-inner")
        if (!progressBar) {
            return
        } 
        progressBar.style.width = `${percentage}%`
    }
 }

class PreloaderInfinite {
    show = (type: "sputnik"|"ria") => {
        const wrapper = document.createElement("div");
        wrapper.id = "preloader-main-screen";  
        document.body.append(wrapper);

        const outerCircle = document.createElement("div");
        outerCircle.id = `preloader-outer-circle-${type}`
        wrapper.append(outerCircle);

        const middleCircle = document.createElement("div");
        middleCircle.id = `preloader-middle-circle-${type}`;
        outerCircle.append(middleCircle);

        const innerCircle = document.createElement("div");
        innerCircle.id = `preloader-inner-circle-${type}`
        outerCircle.append(innerCircle)
    };
    hide = () => {
        const preloader = document.querySelector("#preloader-main-screen");
        preloader?.remove()
    };

}

 const preloader = new PreloaderProgressBar();
 preloader.show("sputnik")
//  preloader.hide()
// preloader.setProgress(25);