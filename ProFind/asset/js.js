const applyForm = document.getElementById("applyForm");
const contactForm = document.getElementById("contactForm");

const applyPopup = document.getElementById("applyPopup");
const successPopup = document.getElementById("successPopup");
const contactPopup = document.getElementById("popup");

const form = applyForm || contactForm;

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("phoneError").innerHTML = "";
        document.getElementById("jobError").innerHTML = "";
        document.getElementById("noteError").innerHTML = "";

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let job = document.getElementById("job").value.trim();
        let note = document.getElementById("note").value.trim();

        let check = true;

        if (name === "") {
            document.getElementById("nameError").innerHTML = "Vui lòng nhập họ và tên!";
            check = false;
        }

        if (email === "") {
            document.getElementById("emailError").innerHTML = "Vui lòng nhập email!";
            check = false;
        } else {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                document.getElementById("emailError").innerHTML = "Email không hợp lệ!";
                check = false;
            }
        }

        if (phone === "") {
            document.getElementById("phoneError").innerHTML = "Vui lòng nhập số điện thoại!";
            check = false;
        } else {
            let phoneRegex = /^[0-9]{10}$/;

            if (!phoneRegex.test(phone)) {
                document.getElementById("phoneError").innerHTML = "Số điện thoại phải có 10 chữ số!";
                check = false;
            }
        }

        if (job === "") {
            document.getElementById("jobError").innerHTML = "Vui lòng nhập thông tin!";
            check = false;
        }

        if (note === "") {
            document.getElementById("noteError").innerHTML = "Vui lòng nhập thông tin!";
            check = false;
        }

        if (check) {
            if (successPopup) {
                successPopup.style.display = "flex";
            }

            if (contactPopup) {
                contactPopup.style.display = "flex";
            }

            form.reset();
        }
    });
}

function openApply() {
    if (applyPopup) {
        applyPopup.style.display = "flex";
    }
}

function closeApply() {
    if (applyPopup) {
        applyPopup.style.display = "none";
    }
}

function closePopup() {
    if (successPopup) {
        successPopup.style.display = "none";
    }

    if (contactPopup) {
        contactPopup.style.display = "none";
    }
}