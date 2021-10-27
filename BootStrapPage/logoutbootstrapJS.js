function logOut() {
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("age");
}

function notLogin() {
    if (!localStorage.getItem("fname")) {
        alert("You are not login!");
        window.location =
            "file:///C:/Users/HMK/Desktop/alihemayatkar-project/New-folder/LoginPage/loginpageHTML.html";
    }
}

//set the session on the login page
//  $_SESSION['loggedIn'] = true;

//on the second page you check if that session is true, else redirect to the login page
//  function click() {
//   inputname = $('#name').val();
//   inputpassword =$('#pass').val();

//   for (i in data.username )      //to match username with provided array
//     {
//       name = data.username[i];

//       for ( i in data.password){
//           pass = data.password[i];

//           if (inputname == name & inputpassword == pass ){
//               window.open('welcome1.html','_self');
//           }
//       }
//   }

//   if (inputname != name & inputpassword != pass ){
//       alert("Wrong Password");