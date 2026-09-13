document.addEventListener('DOMContentLoaded' ,()=>{
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');

    if(!nav || toggle){
        return; 
    }

    toggle.addEventListener('click',()=>{
        const isOpen =nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded' , String(isOpen));

    });
})