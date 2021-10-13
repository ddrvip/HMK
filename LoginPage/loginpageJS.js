
        function myjs() {
          document.getElementById("demo").style.fontSize = "25px"; 
          document.getElementById("demo").style.color = "white";
          document.getElementById("demo").style.backgroundColor = "Blue";   
          {
            alert(document.getElementById("fname").value)
            localStorage.setItem('fname',fname.value)
          }
          {
            alert(document.getElementById("lname").value)
            localStorage.setItem('lname',lname.value)
          }
        
          // alert(document.getElementById("age").value)
          if(age.value<18){
            alert('You Are too Young!')
           }
          else if(age.value>20){
            alert('You Are Too Old!')
          }
          else if(age.value = 18 , 19 , 20){
            alert('Welcome!')
            localStorage.setItem('age',age.value)
            window.location='file:///C:/Users/HMK/Desktop/alihemayatkar-project/New-folder/BootStrapPage/BootSrtap.html';

          }
        }
        
            // document.getElementById("demo").style.fontSize = "25px"; 
            // document.getElementById("demo").style.color = "red";
            // document.getElementById("demo").style.backgroundColor = "yellow";
            
            
          
            // window.location=`file:///C:/Users/HMK/Desktop/New%20folder/New-folder/BootSrtap.html?name=${localStorage.getItem('fname')}`;
            
            
        


        // function getValue() {
        //   const name = window.location.href.split('=');
        //   alert(name[1])
        // }
         
    
