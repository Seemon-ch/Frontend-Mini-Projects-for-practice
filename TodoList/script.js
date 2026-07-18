let addTask = document.querySelector("#addTask");  //inout
let container =document.querySelector(".container");
let button = document.querySelector("button");

let ul=document.createElement("ul");
ul.classList.add("todo-list");

container.appendChild(ul);

button.addEventListener("click" , function(){
    let li=document.createElement("li");

    let label =document.createElement("label");
    let input =document.createElement("input");
    input.type = "checkbox";
    label.innerText=addTask.value;

    let span =document.createElement("span");
    span.classList.add("delete");
    span.innerText="✖";

    label.appendChild(input);
    li.appendChild(label);
    li.appendChild(span);
    ul.appendChild(li);

    addTask.value = "";


});

ul.addEventListener("click" , function(event){
    
    if(event.target.nodeName="SPAN"){
       let listItem= event.target.parentElement;
       listItem.remove();
    }
});



