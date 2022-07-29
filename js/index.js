// const form = document.getElementById("form");
let nameNode = $("#name");
let emailNode = $("#email");
let messageNode = $("#message");
let errName = $(".errName");
let errEmail = $(".errEmail");
let errMessage = $(".errMessage");


function validate1() {
    let name = nameNode.val();
    let regex = new RegExp("^[A-Za-z]*$");
    errName.html("");
    if (name === "") {
      errName.html("<small>Name is required</small>");
      nameNode.css("border", "2px solid red");
      return false;
    } else if (regex.test(name) == false) {
      errName.html("<small>Name must have only letters.</small>");
      nameNode.css("border", "2px solid red");
      return false;
    } else {
      nameNode.css("border", "2px solid blue");
      return true;
    }
  }

  function validate2(){
    let email = emailNode.val();
    errEmail.html("");
    if (email === "") {
      errEmail.html("<small>Email is required</small>");
      emailNode.css("border", "2px solid red");
      return false;
    } else if (!email.includes("@") || email.endsWith("@")) {
      errEmail.html("<small>Enter a valid email</small>");
      emailNode.css("border", "2px solid red");
      return false;
    } else {
      emailNode.css("border", "2px solid blue");
      return true;
    }
  }

  function validate3() {
    let message = messageNode.val();
    errMessage.html("");
    if (message === "") {
      errMessage.html("<small>Please add message is required</small>");
      messageNode.css("border", "2px solid red");
      return false;
    }
    return true;
  }

  function validateDetails() {
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    if (v1 && v2 && v3) {
      alert("Thank You For Your Feedback!!");
      return true;
    }
    return false;
  }

































// form.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     getInputs();
// });

// function getInputs() {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();

//     if (nameValue === "") {
//         setFail(name, "Name cannot be blank");
//     }
//     else {
//         setSuccess(name);
//     }

//     if (emailValue === "") {
//         setFail(email, "Email cannot be blank");
//     }
//     else if (!emailCheck(emailValue)) {
//         setFail(email, "Email is not valid");
//     }
//     else {
//         setSuccess(email);
//     }

//     if (messageValue === "") {
//         setFail(message, "Message cannot be blank");
//     }
//     else {
//         setSuccess(message);
//     }
// }

// function setFail(input, message) {
//     const control = input.parentElement;
//     const small = control.querySelector('small');

//     small.innerText = message;
//     control.className = "Unsuccessfull";
// }

// function setSuccess(input) {
//     // const control = input.parentElement;
//     // control.className = "control success";
//     alert("Your Message is Successfully send to us");
// }

// function emailCheck(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }