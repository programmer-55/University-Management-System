studentBtn = document.getElementById("btn1");
facultyBtn = document.getElementById("btn2");

studentBtn.addEventListener("click", () => {
    let ans = confirm("Do you want to login as student?");
    if(ans == true) {
        window.location.replace("login_page.html");
    } else {
        window.location.href = "index.html";
    }
})

facultyBtn.addEventListener("click", () => {
    let ans = confirm("Do you want to login as faculty?");
    if(ans == true) {
        window.location.replace("login_page.html");
    } else {
        window.location.href = "index.html";
    }
})