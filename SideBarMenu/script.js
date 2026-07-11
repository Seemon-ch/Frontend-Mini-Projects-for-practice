const check = document.querySelector("#check");
const cross = document.querySelector("#closeCross");
cross.addEventListener('click' , function(){
    check.checked = false;
});