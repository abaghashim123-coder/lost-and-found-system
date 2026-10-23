document.addEventListener("DOMContentLoaded", function () {
    
    // نموذج تسجيل الدخول
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("تم تسجيل دخولك بنجاح!");
            window.location.href = "about.html"; // الانتقال تلقائياً لصفحة عن الموقع
        });
    }

    // نموذج تواصل معنا
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("تم إرسال الرسالة بنجاح!");
            contactForm.reset(); // تفريغ الحقول بعد الإرسال
        });
    }

});
