// ===============================
// HIỂN THỊ CHI TIẾT CÔNG VIỆC
// ===============================

function hienThiChiTiet() {

    const congViec = JSON.parse(
        localStorage.getItem("congViecDangXem")
    );

    if (!congViec) return;


    document.querySelector("#title").textContent =
        congViec.tenCongViec;

    document.querySelector("#company").textContent =
        congViec.tenCongTy;

    document.querySelector("#salary").textContent =
        congViec.mucLuong;

    document.querySelector("#location").textContent =
        congViec.diaDiem;

    document.querySelector("#type").textContent =
        congViec.loaiCongViec;

    document.querySelector("#category").textContent =
        congViec.nganhNghe;

    document.querySelector("#description").textContent =
        congViec.moTa;

    document.querySelector("#requirement").textContent =
        congViec.yeuCau;


    // tự điền vị trí ứng tuyển
    const jobInput = document.querySelector("#job");

    if(jobInput){
        jobInput.value = congViec.tenCongViec;
    }

}


// ===============================
// MỞ / ĐÓNG FORM ỨNG TUYỂN
// ===============================

function moFormUngTuyen(){

    const applyPopup =
        document.querySelector("#applyPopup");

    if(applyPopup){
        applyPopup.style.display = "flex";
    }

}


function dongFormUngTuyen(){

    const applyPopup =
        document.querySelector("#applyPopup");

    if(applyPopup){
        applyPopup.style.display = "none";
    }

}


// ===============================
// ĐÓNG POPUP THÀNH CÔNG
// ===============================

function closePopup(){

    const successPopup =
        document.querySelector("#successPopup");

    if(successPopup){
        successPopup.style.display = "none";
    }

}


// ===============================
// KIỂM TRA FORM ỨNG TUYỂN
// ===============================

function kiemTraBieuMau(form){

    let hopLe = true;


    const name =
        document.querySelector("#name");

    const email =
        document.querySelector("#email");

    const phone =
        document.querySelector("#phone");

    const job =
        document.querySelector("#job");

    const note =
        document.querySelector("#note");



    document.querySelector("#nameError").textContent="";
    document.querySelector("#emailError").textContent="";
    document.querySelector("#phoneError").textContent="";
    document.querySelector("#jobError").textContent="";
    document.querySelector("#noteError").textContent="";



    if(name.value.trim()==""){

        document.querySelector("#nameError")
        .textContent="Vui lòng nhập họ và tên";

        hopLe=false;
    }



    let emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(email.value.trim()==""){

        document.querySelector("#emailError")
        .textContent="Vui lòng nhập email";

        hopLe=false;

    }
    else if(!emailRegex.test(email.value)){

        document.querySelector("#emailError")
        .textContent="Email không hợp lệ";

        hopLe=false;

    }




    let phoneRegex =
    /^[0-9]{10}$/;


    if(phone.value.trim()==""){

        document.querySelector("#phoneError")
        .textContent="Vui lòng nhập số điện thoại";

        hopLe=false;

    }
    else if(!phoneRegex.test(phone.value)){

        document.querySelector("#phoneError")
        .textContent="Số điện thoại phải có 10 số";

        hopLe=false;

    }



    if(job.value.trim()==""){

        document.querySelector("#jobError")
        .textContent="Vui lòng nhập vị trí ứng tuyển";

        hopLe=false;

    }



    if(note.value.trim()==""){

        document.querySelector("#noteError")
        .textContent="Vui lòng giới thiệu bản thân";

        hopLe=false;

    }



    return hopLe;

}


// ===============================
// LOAD TRANG
// ===============================

document.addEventListener("DOMContentLoaded",()=>{


    // trang danh sách
    if(document.querySelector("#danh-sach-cong-viec")){

        hienThiCongViec();

    }



    // trang chi tiết
    if(document.querySelector("#title")){

        hienThiChiTiet();

    }




    // form ứng tuyển

    const applyForm =
        document.querySelector("#applyForm");



    if(applyForm){


        applyForm.addEventListener(
            "submit",
            function(e){


                e.preventDefault();



                if(!kiemTraBieuMau(applyForm)){
                    return;
                }



                const successPopup =
                    document.querySelector("#successPopup");



                if(successPopup){

                    successPopup.style.display="flex";

                }



                applyForm.reset();


                dongFormUngTuyen();


            }
        );


    }



});