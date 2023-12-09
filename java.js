let users = [{ usernameOrPhone: "nour", password: "1" },{ usernameOrPhone: "moustafe", password: "2" },];
let messageElement = document.getElementById('message');

function registerUser() {
    const usernameOrPhone = document.getElementById('usernameOrPhone').value;
    const password = document.getElementById('password').value;

    if (!usernameOrPhone || !password) {
        messageElement.textContent = 'يرجى ملء جميع الحقول';
        return;
    }

    const userExists = users.some(user => user.usernameOrPhone === usernameOrPhone || user.password === password);

    if (userExists) {
        messageElement.textContent = 'موجود بالفعل';
    } else {
        if (users.length < 4) {
            users.push({ usernameOrPhone, password });
            messageElement.textContent = 'تم التسجيل بنجاح';
            redirectToLink();
        } else {
            users.shift();
            users.push({ usernameOrPhone, password });
            messageElement.textContent = 'تم التسجيل بنجاح';
            redirectToLink();
        }
    }
}

function redirectToLink() {
    window.open('file:///F:/ip_task/ip/home.html', '_blank');
}

function login() {
    let users1 = users; // تم استخدام users1 بدلاً من users
    let messageElement = document.getElementById('message'); // تم تعريف messageElement محلياً داخل الدالة

    const usernameOrPhone = document.getElementById('usernameOrPhone').value;
    const password = document.getElementById('password').value;

    if (!usernameOrPhone || !password) {
        messageElement.textContent = 'يرجى ملء جميع الحقول';
        return;
    }

    const userExists = users1.some(user => user.usernameOrPhone === usernameOrPhone && user.password === password); // تم استخدام users1 بدلاً من users

    if (userExists) {
        messageElement.textContent = 'تم';
        redirectToLink();
    } else {
        const userRegistered = users1.some(user => user.usernameOrPhone === usernameOrPhone); // تم استخدام users1 بدلاً من users
        if (userRegistered) {
            messageElement.textContent = 'خطأ في كلمة المرور';
        } else {
            messageElement.textContent = 'لا يوجد حساب';
        }
    }
}

/* function redirectToLink() {
    window.open('file:///F:/ip_task/ip/home.html', '_blank');
} */
