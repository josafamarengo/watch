const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const updateClock = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = date.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = date.getHours();
    const hoursDegrees = ((((hours + ( minutes / 60)) * 5) / 60) * 360);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

};

updateClock();

setInterval(updateClock, 1000);