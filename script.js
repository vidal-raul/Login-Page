const user = document.querySelector("#user");
const password = document.querySelector("#password");
const btn = document.querySelector(".login");
const languages = document.querySelector("#languages");

//User
user.addEventListener("focus", () => {
    user.style.outline = "0";
    user.style.border = "1px solid #2626f3";
    user.style.backgroundColor = "";
})
user.addEventListener("blur", () => {
    user.style.border = "";
})
user.addEventListener("mouseenter", () => {
    user.style.backgroundColor = "#2e303b";
})
user.addEventListener("mouseleave", () => {
    user.style.backgroundColor = "";
})

//Password
password.addEventListener("focus", () => {
    password.style.outline = "0";
    password.style.border = "1px solid #2626f3";
    password.style.backgroundColor = "";
})
password.addEventListener("blur", () => {
    password.style.border = "";
})
password.addEventListener("mouseenter", () => {
    password.style.backgroundColor = "#2e303b";
})
password.addEventListener("mouseleave", () => {
    password.style.backgroundColor = "";
})

//Button
btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "#11118f";
})
btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "";
    btn.style.border = ""
})
btn.onclick = function() {
    this.innerHTML = "<div class='loader'></div>"

    setTimeout(() => {
        this.innerHTML = "Done";
    }, 2000);
}

//Languages
languages.addEventListener("mouseenter", () => {
    languages.style.width = "460px";
    languages.style.height = "100px";
    languages.style.fontSize = "45px";
})
languages.addEventListener("mouseleave", () => {
    languages.style.width = "";
    languages.style.height = "";
    languages.style.fontSize = "";
})