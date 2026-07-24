// ==================== POPUP ỨNG TUYỂN ====================

function moFormUngTuyen(){

    const popup = document.getElementById("applyPopup");

    if(popup){
        popup.style.display = "flex";
    }

}


function dongFormUngTuyen(){

    const popup = document.getElementById("applyPopup");

    if(popup){
        popup.style.display = "none";
    }

}


function closePopup(){

    const popup = document.getElementById("successPopup");

    if(popup){
        popup.style.display = "none";
    }

}



// ==================== HIỂN THỊ CHI TIẾT ====================

function hienThiChiTiet(){

    const congViec = JSON.parse(
        localStorage.getItem("congViecDangXem")
    );


    if(!congViec) return;


    document.getElementById("title").textContent =
        congViec.tenCongViec;


    document.getElementById("company").textContent =
        congViec.tenCongTy;


    document.getElementById("salary").textContent =
        congViec.mucLuong;


    document.getElementById("location").textContent =
        congViec.diaDiem;


    document.getElementById("type").textContent =
        congViec.loaiCongViec;


    document.getElementById("category").textContent =
        congViec.nganhNghe;


    document.getElementById("description").textContent =
        congViec.moTa;


    document.getElementById("requirement").textContent =
        congViec.yeuCau;



    // tự điền vị trí ứng tuyển

    const jobInput = document.getElementById("job");

    if(jobInput){

        jobInput.value = congViec.tenCongViec;

    }

}

// ==================== LOAD TRANG ====================

document.addEventListener("DOMContentLoaded",()=>{


    // trang detail

    if(document.getElementById("title")){

        hienThiChiTiet();

    }



    // form apply

    const form =
    document.getElementById("applyForm");


    if(form){

        form.addEventListener("submit",(e)=>{


            e.preventDefault();



            if(!kiemTraBieuMau()){

                return;

            }



            const success =
            document.getElementById("successPopup");



            if(success){

                success.style.display="flex";

            }



            form.reset();


            dongFormUngTuyen();


        });

    }


});




////////////////////////new
//////////////////////// ĐĂNG KÝ - ĐĂNG NHẬP ////////////////////////

function dangKy(){

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;


    const nameError = document.getElementById("registerNameError");
    const emailError = document.getElementById("registerEmailError");
    const passwordError = document.getElementById("registerPasswordError");
    const confirmPasswordError = document.getElementById("registerConfirmPasswordError");


    // Xóa lỗi cũ

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";


    let hopLe = true;



    // Kiểm tra họ tên

    if(name == ""){

        nameError.textContent =
        "Vui lòng nhập họ và tên.";

        hopLe = false;

    }



    // Kiểm tra email

    if(email == ""){

        emailError.textContent =
        "Vui lòng nhập email.";

        hopLe = false;

    }


    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(email != "" && !emailRegex.test(email)){

        emailError.textContent =
        "Email không đúng định dạng.";

        hopLe = false;

    }



    // Kiểm tra mật khẩu

    if(password == ""){

        passwordError.textContent =
        "Vui lòng nhập mật khẩu.";

        hopLe = false;

    }
    else if(password.length < 6){

        passwordError.textContent =
        "Mật khẩu phải có ít nhất 6 ký tự.";

        hopLe = false;

    }



    // Kiểm tra xác nhận mật khẩu

    if(confirmPassword == ""){

        confirmPasswordError.textContent =
        "Vui lòng xác nhận mật khẩu.";

        hopLe = false;

    }
    else if(confirmPassword != password){

        confirmPasswordError.textContent =
        "Mật khẩu xác nhận không trùng khớp.";

        hopLe = false;

    }



    // Nếu có lỗi nhập liệu thì dừng

    if(!hopLe){

        return;

    }



    // Lấy danh sách user

    let users = JSON.parse(
        localStorage.getItem("users")
    ) || [];



    // Kiểm tra email đã tồn tại

    let check = users.find(function(item){

        return item.email == email;

    });



    if(check){

        hienThongBao(
            "Lỗi",
            "Email đã được đăng ký.",
            false
        );

        return;

    }



    // Lưu tài khoản mới

    users.push({

        name: name,
        email: email,
        password: password

    });



    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );



    hienThongBao(
        "Thành công",
        "Đăng ký thành công!"
    );



    setTimeout(function(){

        window.location.href = "login.html";

    },1500);

}



function dangNhap(){

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;


    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");


    // xóa lỗi cũ
    emailError.textContent = "";
    passwordError.textContent = "";


    let hopLe = true;


    // bỏ trống email
    if(email == ""){

        emailError.textContent =
        "Vui lòng nhập email.";

        hopLe = false;

    }


    // kiểm tra email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(email != "" && !emailRegex.test(email)){

        emailError.textContent =
        "Email không đúng định dạng.";

        hopLe = false;

    }


    // bỏ trống mật khẩu
    if(password == ""){

        passwordError.textContent =
        "Vui lòng nhập mật khẩu.";

        hopLe = false;

    }


    if(!hopLe){

        return;

    }



    let users = JSON.parse(
        localStorage.getItem("users")
    ) || [];



    let user = users.find(function(item){

        return item.email == email &&
               item.password == password;

    });



    // sai tài khoản
    if(!user){

        hienThongBao(
            "Thất bại",
            "Sai email hoặc mật khẩu.",
            false
        );

        return;

    }



    // đúng

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );


    hienThongBao(
        "Thành công",
        "Đăng nhập thành công!"
    );


    setTimeout(function(){

        window.location.href="index.html";

    },1500);

}



function kiemTraDangNhap(){

    let user = JSON.parse(
        localStorage.getItem("currentUser")
    );

    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const helloUser = document.getElementById("helloUser");
    const logoutBtn = document.getElementById("logoutBtn");

    if(user){

        if(loginBtn)
            loginBtn.style.display="none";

        if(registerBtn)
            registerBtn.style.display="none";

        if(helloUser){

            helloUser.style.display="inline-block";
            helloUser.innerHTML="👋 Xin chào, "+user.name;

        }

        if(logoutBtn)
            logoutBtn.style.display="inline-block";

    }

}



function dangXuat(){

    localStorage.removeItem("currentUser");

    location.reload();

}



document.addEventListener("DOMContentLoaded",function(){

    kiemTraDangNhap();

});



//////////////////// POPUP ////////////////////

function hienThongBao(title,message,success=true){

    const popup=document.getElementById("messagePopup");

    if(!popup) return;

    const popupTitle=document.getElementById("popupTitle");
    const popupText=document.getElementById("popupText");


    if(success){

        popupTitle.innerHTML =
        `<i class="fa-solid fa-circle-check"></i> ${title}`;

    }else{

        popupTitle.innerHTML =
        `<i class="fa-solid fa-circle-xmark"></i> ${title}`;

    }


    popupText.textContent=message;

    popup.style.display="flex";

}



function dongThongBao(){

    const popup=document.getElementById("messagePopup");

    if(popup){

        popup.style.display="none";

    }

}
