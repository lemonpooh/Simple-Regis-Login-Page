const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password2');


form.addEventListener('submit',(e)=>{
     

    checkInputs(e);
});

function checkInputs(e){


    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue=passwordConfirm.value.trim();

 
    user(e);
    eml(e);
    pass(e);
    Cpass(e);



function user()
{
    if(usernameValue === '')
    {
        setErrorFor(username,'Username cannot be blank');
        e.preventDefault();
        return false;

    }
    else
    {
        setSuccessFor(username);
        return true;
    };
}


function eml()
{
     if(emailValue === ''){
        setErrorFor(email,'Email cannot be blank');
        e.preventDefault();
    }else if(!isEmail(emailValue))
    {
        setErrorFor(email,'email not valid');
        e.preventDefault();
    }else
    {
        setSuccessFor(email);
    };
}

function pass()
{
    if(passwordValue ==='')
    {
        setErrorFor(password,'Password cannot be blank');
        e.preventDefault();
    }
    else
    {
        setSuccessFor(password);
    };

}

function Cpass()
{
    if(passwordConfirmValue ==='')
    {
        setErrorFor(passwordConfirm,'Password cannot be blank');
        e.preventDefault();
    }
    else if(passwordConfirmValue !== passwordValue)
    {
        setErrorFor(passwordConfirm,'password does not match');
        e.preventDefault();
    }
    else
    {
        setSuccessFor(passwordConfirm);
    };
}

 
};



function setErrorFor(input,message)
{
    const formControl = input.parentElement;//.form-control
    const small = formControl.querySelector('small')
    
    small.innerText = message;

    formControl.className = 'form-control error';
};

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}