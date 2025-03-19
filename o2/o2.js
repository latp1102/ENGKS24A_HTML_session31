let form = document.getElementById("form");

console.log(form);

form.addEventListener("Submit", function(event){
    event.preventDefault();
    console.log("Vừa submit form này xong ");

    let emailValue = form.email.value;
    console.log(emailValue);
    
    let passwordValue = form.password.value;
    console.log(passwordValue);
    if (emailValue === "" || passwordValue === ""){
        alert("Không dc rỗng");
    } else {
        form.submit();
    }
});