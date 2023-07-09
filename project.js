
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let inputEmail = document.getElementById('email-input');
  let inputPassword = document.getElementById('password-input');
  let inputConfirmPassword = document.getElementById('confirm-password-input');
  let confirmPasswordError = document.getElementById('confirm-password-error');

const signupBtn = document.getElementById("signupBtn");


let  email = document.getElementsByTagName("input")[0];
email.addEventListener('input', validate());
function validate(event) { event.preventDefault(); }

 function validate(event){
  
 if(inputEmail.value === "" || inputPassword.value === "" || inputConfirmPassword.value === "" ){
   document.getElementById("signupBtn").disabled = true;
   document.getElementById("signupBtn").style.opacity = "0.5";

   }else{
     document.getElementById("signupBtn").disabled = false;
     document.getElementById("signupBtn").style.opacity = "4";
     if(inputPassword.value === "") {
      document.getElementsByTagName('input')[1]= inputPassword.style.borderColor = "red";
      document.getElementById("password-error").innerHTML = "enter a password";
      return true;
      
   }else if (inputConfirmPassword.value === ""){
      document.getElementsByTagName('input')[2]= inputConfirmPassword.style.borderColor = "red";
      document.getElementById("confirm-password-error").innerHTML = "enter confirm password";
      return true;
   }

    if (inputPassword.value === inputConfirmPassword.value) {
      document.getElementsByTagName('input')[1]= inputPassword.style.borderColor = "green";
      document.getElementsByTagName('input')[2]= inputConfirmPassword.style.borderColor = "green";
      document.getElementById("confirm-password-error").innerHTML = "password match";
      confirmPasswordError.style.color = "green"     
      document.getElementById("email-error").innerHTML = "";
      
   } 
   else{
      document.getElementById("confirm-password-error").innerHTML = "password does not match"
      document.getElementsByTagName('input')[1]= inputPassword.style.borderColor = "red";
      document.getElementsByTagName('input')[2]= inputConfirmPassword.style.borderColor = "red";

   }
if(confirmPasswordError = true && inputEmail.value != validRegex){
  document.getElementById("signupBtn").disabled = true;
  document.getElementById("signupBtn").style.opacity = "0.5";
}
}
}
 function submitSignup(){
  
    let  form = document.getElementsByTagName("form")[0];
    form.addEventListener('submit', handleForm);
    function handleForm(event) { event.preventDefault(); } 
    for(let i = 0; i < 3; i++) {
      if(inputEmail.value.match (validRegex)){
          inputEmail.value = ""
          inputEmail.style.borderColor = ""     
          document.getElementById("email-error").innerHTML = "";
          return true;
      }else{
          document.getElementsByTagName('input')[0]= inputEmail.style.borderColor = "red";
          document.getElementById("email-error").innerHTML = "enter valid email address";
      }
      
   }

    }
 
 
function verifyPassword(){
  let  verifyPasswordLength = document.getElementsByTagName("input")[1];
  verifyPasswordLength.addEventListener('input', passwordLength);
  function passwordLength(event) { event.preventDefault(); } 
    if (inputPassword.length < 6) {
        document.getElementsByTagName('input')[1]= inputPassword.style.borderColor = "red";
        document.getElementById("password-error").innerHTML = "password must be at least 6 characters";
    }
    else if (inputPassword.length > 12) {
        document.getElementsByTagName('input')[1]= inputPassword.style.borderColor = "red";
        document.getElementById("password-error").innerHTML = "password must be less than 12 characters";
    }
    else if (inputPassword.match(/[a-z]/) === null) {
        document.getElementsByTagName('input')[1]= inputPassword.style.borderColor = "red";
        document.getElementById("password-error").innerHTML = "password must contain at least one lowercase letter";
    }

    
}





