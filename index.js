let email = '';
let password = '';
let initiative = '';

// let click = (){
//     email  = document.getElementById('femail').value;
//     password = document.getElementById('fpassword').value;
//     initiative  = document.getElementById('initiative').value;
// }


document.getElementById('submit').addEventListener("click", function (){
    email  = document.getElementById('femail').value;
    password = document.getElementById('fpassword').value;
    initiative  = document.getElementById('initiative').value;
    alert('onClick')
})