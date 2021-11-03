function myjs() {


    var userObj = {
        fnameUser: document.getElementById("fname").value,
        lnameUser: document.getElementById("lname").value,
        // testfunc: alert("Hello world")
    }


    // userObj.testfunc
    // alert(userObj.fnameUser);
    // alert(userObj.lnameUser);
    // alert("Test is ok ");



    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.backgroundColor = "Blue"; {
        // alert(document.getElementById("fname").value)

        localStorage.setItem('fname', fname.value)
    }



    {
        var lname = document.getElementById("lname").value;
        // alert(document.getElementById("lname").value)
        alert(lname)
        localStorage.setItem('lname', lname.value)
    }

    // alert(document.getElementById("age").value)
    if (age.value < 18) {
        alert('You Are too Young!')
    } else if (age.value > 20) {
        alert('You Are Too Old!')
    } else if (age.value = 18, 19, 20) {
        alert('Welcome!')
        localStorage.setItem('age', age.value)
        window.location = '../BootStrapPage/BootSrtap.html';

    }

    var userObj = {
        lnameUser: lname
    }

    alert(" User Object = " + userObj.lnameUser);
}

// document.getElementById("demo").style.fontSize = "25px"; 
// document.getElementById("demo").style.color = "red";
// document.getElementById("demo").style.backgroundColor = "yellow";



// window.location=`file:///C:/Users/HMK/Desktop/New%20folder/New-folder/BootSrtap.html?name=${localStorage.getItem('fname')}`;





// function getValue() {
//   const name = window.location.href.split('=');
//   alert(name[1])
// }