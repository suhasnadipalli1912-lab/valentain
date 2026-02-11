function switchPage(pageNumber) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));

    setTimeout(() => {
        document.getElementById("page" + pageNumber).classList.add("active");
    }, 50);

    if (pageNumber === 2 || pageNumber === 9) {
        createHearts();
    }
}

function nextPage() {
    switchPage(2);
}

function goToPage(pageNumber) {
    switchPage(pageNumber);
}

let sadToggle = 0;

function toggleSad() {
    if (sadToggle % 2 === 0) {
        switchPage(3);
    } else {
        switchPage(4);
    }
    sadToggle++;
}

function createHearts() {
    const container = document.getElementById("hearts-container");

    for (let i = 0; i < 25; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}