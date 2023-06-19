addEventListener('mouseover',function(loginForm){
    let cursorOver=loginForm.target.id;
    if(cursorOver!='loginPage'){
        document.getElementById('loginButton').style.marginLeft='0px';
    }
})
addEventListener("mouseover", function(btn){
    let btnlogin=btn.target.id;
    if (btnlogin=='loginButton'){
        
        let inputUserName=document.getElementById('username');
        let inputPassword=document.getElementById('password');

        var loginButtonMarginLeft,style;
        loginButtonMarginLeft=document.getElementById('loginButton');
        style=loginButtonMarginLeft.currentstyle || window.getComputedStyle(loginButtonMarginLeft);
        
        if((inputUserName && inputUserName.value) && (inputPassword && inputPassword.value)){
            document.getElementById('loginButton').style.marginLeft='0px';
        }else{
            
            console.log(style.margin)
            //document.getElementById('loginButton').style.marginLeft='-130px';
            if(style.marginLeft=='0px'){
                document.getElementById('loginButton').style.marginLeft='-150px';
            }
            else if(style.marginLeft=='-150px'){
                document.getElementById('loginButton').style.marginLeft='150px';
            }else if(style.marginLeft=='150px'){
                document.getElementById('loginButton').style.marginLeft='-150px';
            }
    }
    }
});