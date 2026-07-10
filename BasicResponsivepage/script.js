let button = document.querySelectorAll(".adopt_btn");
button.forEach((btn) => {
    btn.addEventListener('click' , (event)=>{
    const petName = event.target.parentElement.querySelector('h3').innerText;

    const UserConfirmation = confirm(`Are you suru you want to Adopt this pet named: ${petName} ?`);

    if(UserConfirmation){
    alert(`Thankyou for Opening your heart! We will contact you soon for ${petName}.`);
    }
    else{
    alert(`Adoption cancelled by you.`);
    }
});
});
    
