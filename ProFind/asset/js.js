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



// ==================== KIỂM TRA FORM ====================


function kiemTraBieuMau(){


    let hopLe = true;


    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    const phone =
        document.getElementById("phone");

    const job =
        document.getElementById("job");

    const note =
        document.getElementById("note");



    if(name.value.trim()==""){

        document.getElementById("nameError").textContent =
        "Vui lòng nhập họ và tên";

        hopLe=false;

    }



    let emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(email.value.trim()==""){

        document.getElementById("emailError").textContent =
        "Vui lòng nhập email";

        hopLe=false;

    }
    else if(!emailRegex.test(email.value)){

        document.getElementById("emailError").textContent =
        "Email không hợp lệ";

        hopLe=false;

    }



    let phoneRegex =
    /^[0-9]{10}$/;


    if(!phoneRegex.test(phone.value)){

        document.getElementById("phoneError").textContent =
        "Số điện thoại phải có 10 số";

        hopLe=false;

    }



    if(job.value.trim()==""){

        document.getElementById("jobError").textContent =
        "Vui lòng nhập vị trí ứng tuyển";

        hopLe=false;

    }



    if(note.value.trim()==""){

        document.getElementById("noteError").textContent =
        "Vui lòng giới thiệu bản thân";

        hopLe=false;

    }



    return hopLe;

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