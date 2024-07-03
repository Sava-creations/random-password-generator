
const lowerCaseChars='abcdefghijklmnopqrstuvwxyz';
const UppercaseChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers='0123456789';
const symbols='!@#$%^&*()*';

mySubmit.onclick=function(){
    const length= document.getElementById('length').value;
    const includeLowercase= document.getElementById('includeLowercase').checked;
    const includeUppercase= document.getElementById('includeUppercase').checked;
    const includeNumbers= document.getElementById('includeNumbers').checked;
    const includeSymbols= document.getElementById('includeSymbols').checked;

    error.textContent='';
    display.value='';

    let allowedChars='';
    let password='';
    allowedChars+=includeLowercase ? lowerCaseChars: '';
    allowedChars+=includeUppercase ? UppercaseChars : '';
    allowedChars+=includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols: '';

    if (length<=0 || length>128 ) 
        error.textContent='The password length must be between 1 and 128 characters';
    
    else if(allowedChars=='')
        error.textContent='At least 1 set of characters need to be included';

    else{
        for(let i=0; i<length; i++){
        const randomIndex= Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
        }

    display.value=password;
    }
}

copy.onclick=function(){
<<<<<<< HEAD
    display.select();
    document.execCommand('copy');
}
=======
    password.select();
    document.execCommand('copy');
}


>>>>>>> 45c55a7 (copy)
