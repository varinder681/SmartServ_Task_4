function validateEmail(username){
    
    if(!username.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
        
        alert('Your input email format is not correct');
        return false;
    }
    return true
}

function validatePassword(password){
    var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(password)){
        alert('Only @ is allowed as special character in Password');
        return false;
    }
    if(!checkUpperCase(password)){
        alert('One Uppercase letter is required in Password');
        return false;
    }
    if(!checkNumber(password)){
        alert('One Number is required in Password');
        return false;
    }
    return true
}

function checkUpperCase(password){
    for(a in password){
        if(password[a] >='A' && password[a]<='Z'){
            return true;
        }
    }
    return false;
}
function checkNumber(password){
    for(a in password){
        if(password[a] >='0' && password[a]<='9'){
            return true;
        }
    }
    return false;
}


const form = document.getElementById('form');

form.addEventListener('submit',function(event){
    
    event.preventDefault();
    const username = form.elements.email.value;
    const password = form.elements.password.value;
    const isEmailValid = validateEmail(username);
    const isPasswordValid = validatePassword(password);
    console.log("isEmailValid : "+isEmailValid)
    console.log("isPasswordValid : "+isPasswordValid)
    if(isEmailValid && isPasswordValid && password === 'SmartServTest@123'){
        console.log('correct')
        window.open('./dashboard.html','_self')
    }
})
