var countdownElement = document.getElementById('countdown');
var countdown = 15;

function updateCountdown() {
    countdownElement.textContent = countdown;
    countdown--;

    if (countdown < 0) {
        clearInterval(timer);
    }
}

var timer = setInterval(updateCountdown, 1000);

const ticketButton = document.getElementById('ticket-button');
        const controlButton = document.getElementById('control-button');
        const line = document.querySelector('.line');

        ticketButton.addEventListener('click', () => {
            ticketButton.classList.add('active');
            controlButton.classList.remove('active');
            line.classList.add('active');
        });

        controlButton.addEventListener('click', () => {
            controlButton.classList.add('active');
            ticketButton.classList.remove('active');
            line.classList.add('active');
        });