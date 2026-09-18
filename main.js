const button = document.getElementById("welcomeButton");

if (button) {

    button.addEventListener("click", function() {

        document.querySelector("h2").textContent = "مرحبًا بك في CyberTitan!";

    });

}

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        const formMessage = document.getElementById("formMessage");
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;


        if (username.length < 3) {

            event.preventDefault();

            formMessage.textContent = "يجب أن يتكون اسم المستخدم من 3 أحرف على الأقل.";

            return;
        }


        if (password.length < 6) {

            event.preventDefault();

            formMessage.textContent = "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.";

            return;
        }


        if (password !== confirmPassword) {

            event.preventDefault();

           formMessage.textContent = "كلمتا المرور غير متطابقتين.";

            return;
        }


        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            event.preventDefault();

           formMessage.textContent = "يرجى إدخال بريد إلكتروني صالح.";

            return;
        }

    });

}


function togglePasswordVisibility(input, btn) {

    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";

    btn.textContent = isHidden ? "إخفاء كلمة المرور" : "إظهار كلمة المرور";

}


const showPassword = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

if (showPassword) {

    showPassword.addEventListener("click", function() {

        togglePasswordVisibility(passwordInput, showPassword);

    });

}


const showConfirmPassword = document.getElementById("showConfirmPassword");
const confirmPasswordInput = document.getElementById("confirm-password");

if (showConfirmPassword) {

    showConfirmPassword.addEventListener("click", function() {

        togglePasswordVisibility(confirmPasswordInput, showConfirmPassword);

    });

}