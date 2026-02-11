let chudanuToggle = 0;

function showPage(pageNumber) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    let target = document.getElementById("page" + pageNumber);
    if (target) {
        target.classList.add("active");
    }
}

/* Special function for Chudanu */
function handleChudanu() {

    if (chudanuToggle % 2 === 0) {
        showPage(3);   // First time → Page 3
    } else {
        showPage(4);   // Second time → Page 4
    }

    chudanuToggle++;
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

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}