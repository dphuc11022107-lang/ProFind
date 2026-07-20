// Form apply
const form = document.getElementById("applyForm") ||  document.getElementById("contactForm");
const popup=document.getElementById("popup");

form.addEventListener("submit",function(e){

    e.preventDefault();

    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("phoneError").innerHTML="";
    document.getElementById("jobError").innerHTML = "";
    document.getElementById("noteError").innerHTML="";

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let job = document.getElementById("job").value.trim();
    let note=document.getElementById("note").value.trim();

    let check=true;

    if(name===""){
        document.getElementById("nameError").innerHTML="Vui lòng nhập họ và tên!";
        check=false;
    }

    if(email===""){
        document.getElementById("emailError").innerHTML="Vui lòng nhập email!";
        check=false;
    }else{
        let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            document.getElementById("emailError").innerHTML="Email không hợp lệ!";
            check=false;
        }
    }

    if(phone===""){
        document.getElementById("phoneError").innerHTML="Vui lòng nhập số điện thoại!";
        check=false;
    }else{
        let phoneRegex=/^[0-9]{10}$/;

        if(!phoneRegex.test(phone)){
            document.getElementById("phoneError").innerHTML="Số điện thoại phải có 10 chữ số!";
            check=false;
        }
    }

    if(job===""){
        document.getElementById("jobError").innerHTML="Vui lòng nhập thông tin!";
        check=false;
    }

    if(note===""){
        document.getElementById("noteError").innerHTML="Vui lòng nhập thông tin!";
        check=false;
    }

    if(check){
        popup.style.display="flex";
        form.reset();
    }

});

function closePopup(){
    popup.style.display="none";
}