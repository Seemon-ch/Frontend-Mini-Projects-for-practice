function createToaster(config){
    return function(notification){
        let div = document.createElement("div");
        div.className =`fixed ${config.theme === "dark"? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10": "left-10"} ${config.positionY === "top" ? "top-10": "bottom-10"}`;
        div.textContent = notification;
        document.body.appendChild(div);

        setTimeout(()=>{
            document.body.removeChild(div);
        }, config.duration *1000);

    };
};

let toaster = createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3,
});

toaster("This is a dummy notification!");