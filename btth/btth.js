const formElement = document.querySelector("#form");

const inputElement = document.querySelector("#job-name");
const btnElement = document.querySelector("#btn-submit");
const errorElement = document.querySelector("error");

// lấy giá trị bên trong input

inputElement.addEventListener("input", function(event){
    console.log(event.target.value);
    
});
