const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const min = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (second / 60) * 360 - 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //   console.log(second);

  const minDegrees = (min / 60) * 360 - 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  //   console.log(min);

  const hoursDegrees = (hours / 12) * 360 - 90;
  hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
