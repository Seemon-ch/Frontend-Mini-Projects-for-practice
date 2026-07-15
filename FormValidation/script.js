let nm= document.querySelector("#name");
let form =document.querySelector("form");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");


form.addEventListener("submit" , function(detls){
    detls.preventDefault();
    
    
    //check length of character in name.
    if(nm.value.length <= 2){
        document.querySelector("#forName").style.display = "initial";
    }
    else{
        document.querySelector("#forName").style.display = "none";
    }

    //email and password validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    let emailans = emailRegex.test(email.value);
    let passans = passwordRegex.test(pass.value);


    let isValid =true;

    if(!emailans){
        document.querySelector("#email-msg").textContent ="Email is incorrect" ;
        document.querySelector("#email-msg").style.display = "initial";
        isValid=false;
    }
    else{
        document.querySelector("#email-msg").style.display = "none";
    }
    if(!passans){
        document.querySelector("#password-msg").textContent ="Password is incorrect" ;
        document.querySelector("#password-msg").style.display = "initial";
        isValid=false;
        
    }
    else{
        document.querySelector("#password-msg").style.display = "none";
    }

    
    if(isValid){
        document.querySelector("#result-message").textContent = "From is submitted";
        document.querySelector("#result-message").style.color="green";
    }
    else{
        document.querySelector("#result-message").textContent = "From is not submitted kindly fill the details correctly";
        document.querySelector("#result-message").style.color="red";
    }
    
});



