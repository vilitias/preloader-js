class Preloader {
    isVisible = false;
    isInfinite = false;

    show = () => {
        const wrapper = document.createElement("div");
        wrapper.id = "preloader-main-wrapper";  
        document.body.append(wrapper);

        const inner = document.createElement("div");
        inner.id = "preloader-inner-wrapper"
        wrapper.append(inner);

        const progressBar = document.createElement("div");
        progressBar.id = "preloader-progress-bar";
        inner.append(progressBar);
    };
    hide = () => {
        const preloader = document.querySelector("#preloader-main-wrapper");
        preloader?.remove()
    };

    setProgress = (percentage: number) => {
        const progressBar = document.querySelector<HTMLDivElement>("#preloader-progress-bar")
        if (!progressBar) {
            return
        } 
        progressBar.style.width = `${percentage}%`
    }
 }

 const preloader = new Preloader();
 preloader.show()
//  preloader.hide()
preloader.setProgress(25);