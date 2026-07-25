let filters={
    Brightness :{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    Contrast:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    Saturation:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    HueRotation:{
        value:0,
        min:0,
        max:360,
        unit:"deg",
    },
    Blur:{
        value:0,
        min:0,
        max:20,
        unit:"px",
    },
    Grayscale:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    Sepia:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    Opacity:{
        value:100,
        min:0,
        max:100,
        unit:"%",
    },
    Invert:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
}

const imageCanvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input");
const canvasCtx =imageCanvas.getContext("2d");

const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn");
let file =null;
let image=null;

const filtersContainer =document.querySelector(".filters");

function createdFilterElement(name, unit="%" ,value , min , max){
    const div=document.createElement("div");
    div.classList.add("filter");
    const input = document.createElement("input");
    input.type ="range"
    input.min=min
    input.max=max
    input.value=value
    input.id=name

    const p=document.createElement("p");
    p.innerText=name;

    div.appendChild(p)
    div.appendChild(input)

    input.addEventListener("input" , (event)=>{
        filters[name].value =Number(input.value);
        applyFilters();
    });

    return div

}

function createFilters(){

Object.keys(filters).forEach(filter =>{
   
    const filterElement = createdFilterElement(filter, filters[filter].unit, filters[filter].value ,filters[filter].min , filters[filter].max );

    filtersContainer.appendChild(filterElement);
});
}
createFilters();

imageInput.addEventListener("change", (e) =>{
    
     file =e.target.files[0];
    
    const imagePlaceholder = document.querySelector(".placeholder");
    imageCanvas.style.display="block";
    imagePlaceholder.style.display ="none";

    const img = new Image();
    img.src=URL.createObjectURL(file);


    img.onload =()=>{
        image =img;
        imageCanvas.width= img.width;
        imageCanvas.height= img.height;
        
        applyFilters();
    }
});


function applyFilters(){
    canvasCtx.clearRect(0,0,imageCanvas.width , imageCanvas.height)
    canvasCtx.filter = `
    brightness(${filters.Brightness.value}${filters.Brightness.unit})
    contrast(${filters.Contrast.value}${filters.Contrast.unit})
    saturate(${filters.Saturation.value}${filters.Saturation.unit})
    hue-rotate(${filters.HueRotation.value}${filters.HueRotation.unit})
    blur(${filters.Blur.value}${filters.Blur.unit})
    grayscale(${filters.Grayscale.value}${filters.Grayscale.unit})
    sepia(${filters.Sepia.value}${filters.Sepia.unit})
    opacity(${filters.Opacity.value}${filters.Opacity.unit})
    invert(${filters.Invert.value}${filters.Invert.unit})
    `.trim();
    canvasCtx.drawImage(image , 0 , 0);
};

resetBtn.addEventListener("click" , ()=>{
    filters={
    brightness :{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    contrast:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    saturation:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    hueRotation:{
        value:0,
        min:0,
        max:360,
        unit:"deg",
    },
    blur:{
        value:0,
        min:0,
        max:20,
        unit:"px",
    },
    grayscale:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    sepia:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    opacity:{
        value:100,
        min:0,
        max:100,
        unit:"%",
    },
    invert:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    };
    applyFilters();

    filtersContainer.innerHTML="";
    createFilters();

});

downloadBtn.addEventListener("click" , ()=>{
    const link=document.createElement("a");
    link.download="edited-image.png";
    link.href=imageCanvas.toDataURL();
    link.click();
});