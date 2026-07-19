let height =document.querySelector("#height");
let weight =document.querySelector("#weight");
let button = document.querySelector("button");
let bmiValue = document.querySelector("#bmiValue");
const bmiCategory = document.querySelector("#bmiCategory");

let form =document.querySelector("#bmiForm");
form.addEventListener("submit" , function(event){
    event.preventDefault();

    const hei = Number(height.value) /100;
    const wei = Number(weight.value);

    const bmi = wei / (hei * hei);

    bmiValue.textContent =bmi.toFixed(2);
    if (bmi < 18.5) {
        bmiCategory.textContent = "Underweight";
        bmiCategory.style.color =" red";
    } else if (bmi < 25) {
        bmiCategory.textContent = "Normal";
        bmiCategory.style.color ="green";
    } else if (bmi < 30) {
        bmiCategory.textContent = "Overweight";
        bmiCategory.style.color ="yellow";
    } else {
        bmiCategory.textContent = "Obese";
        bmiCategory.style.color ="red";
    }
});

