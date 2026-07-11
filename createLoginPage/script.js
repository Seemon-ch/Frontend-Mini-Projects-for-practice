const loginform = document.querySelector("form");
const userinput = document.querySelector("#user");
const userpass = document.querySelector("#pass");
const resigerbutton= document.querySelector(".registerbtn");
const login = document.querySelector(".loginbtn");

loginform.addEventListener('submit' , function(event){
    event.preventDefault();  //prevent default page reload on submit behaviour of browser.

const username = userinput.value.trim();  //trim is to remove white spaces.
const password = userpass.value.trim();

if(username==='' || password===''){
    alert("Please fill the details.");
    return;
}

login.addEventListener('click' , function(){
//Dummy authentication without api call.
if(username=='admin' || password==='1234'){
    alert("Login sucessfull ! Redirecting to dashboard.");
    return;

}
else{
    alert("Invalid user name");
}
});
});



resigerbutton.addEventListener('click' , function(){
    alert("Redirecting to Registration page.");
});
