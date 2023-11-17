const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal1 = document.getElementById("modal1");

openBtn.addEventListener("click", () => { modal1.classList.add("open"); });
closeBtn.addEventListener("click", () => { modal1.classList.remove("open"); });



document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById('timer');
    let remainingSeconds = 20;
    const priceElement = document.querySelector('.price b');

    const countdownInterval = setInterval(() => {
        remainingSeconds--;

        timerElement.textContent = `Sale Ends In: ${remainingSeconds} seconds`;

        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = 'Not for sale';
            if (priceElement) {
                priceElement.style.display = 'none';
            }
        }
    }, 1000);
});
