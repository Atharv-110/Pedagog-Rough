function loginFunction() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (email == "admin@gmail" && password == "123456") {
        window.location.href="home.html";
    } 
    else {
        alert("Invalid credentials")
    }
}