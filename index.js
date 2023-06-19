
addEventListener("mouseover", function(btn){
    let btnlogin=btn.target.id;
    if (btnlogin=='loginButton'){
        
        let inputUserName=document.getElementById('username');
        var loginButtonMarginLeft,style;
        loginButtonMarginLeft=document.getElementById('loginButton');
        style=loginButtonMarginLeft.currentstyle || window.getComputedStyle(loginButtonMarginLeft);
        
        if(inputUserName && inputUserName.value){
            console.log("has a value")
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

/*addEventListener("mouseout", function(btn){
    let btnlogin=btn.target.id;
    if (btnlogin=='loginButton'){
        console.log("works too")
    }
});*/





/*addEventListener("mouseover",function(movebtn){
    let btnId=movebtn.target.id;
    if(btnId=='loginButton'){

        addEventListener('input', (evt) => {
            var myUserName = document.getElementById("username");
            let myPassword=document.getElementById("password");
            if (myUserName && myUserName.value && myPassword && myPassword.value){
                //document.querySelector(".login-button").style.color="red";
                console.log("filled")
                }else{
                console.log("Not filled")
            }
          });
    }
    
});*/






  



