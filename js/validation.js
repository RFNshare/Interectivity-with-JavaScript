function checkEmail() {
    var email = document.getElementById('emailid');
    var emailTwo = document.getElementById('emailsid');
    if (email.value != emailTwo.value)
    {
        alert("Email must be matched");
        return false;
    }
}
function nicknameFunction(){
    if (yesNick.checked){
        nick.style.display="inline";
        nickname.setAttribute('required',true);
    }
    else{
        nickname.removeAttribute('required');
        nick.style.display="none";
    }
}
