const emailError = document.querySelector(".emailError");
const email = document.querySelector(".email")
function validate(){
    const email = document.querySelector(".email").value;
if(email.length == 0){
    emailError.innerHTML = "Valid Email Required"
return false;
}
if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    emailError.innerHTML = "Valid Email Required"
    return false;
}else{
    
}


}

// functionality of thanks message

const dismissBtn = document.querySelector(".dismissBtn")
function dismiss (){
    document.querySelector(".messageContainer").style.display = "none"

}

