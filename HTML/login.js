function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin" && password=="user"){
        // window.location.href = 'test.html';
        window.open('home.html', '_self');
        // alert("success");

        return false;
        // console.log("it is coming here");
    }

    else{
        alert("try changing your username and password");
        // console.log("directly in else");
    }
}