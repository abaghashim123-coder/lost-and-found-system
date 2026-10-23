document.addEventListener("DOMContentLoaded", function () {
    
    // 1. نموذج تسجيل الدخول
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // منع إعادة تحميل الصفحة فوراً
            alert("تم تسجيل دخولك بنجاح!");
            window.location.href = "about.html"; // الانتقال لصفحة عن الموقع بعد الضغط على موافق
        });
    }

    // 2. نموذج تواصل معنا
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // منع إعادة تحميل الصفحة فوراً
            alert("تم إرسال الرسالة بنجاح!");
            contactForm.reset(); // تفريغ الخانات بعد الإرسال
        });
    }

});

