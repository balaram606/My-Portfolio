let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
};



function sendEmail(){
    Email.send({
    SecureToken: 'c9508f12-d7d1-4ab3-b801-31b67a7996e5',
    To : 'sahu.balaram8672@gmail.com',
    From :"uibalaram@gmail.com",
    Subject : "New Enquiry",
    Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}