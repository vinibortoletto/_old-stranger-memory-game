const startTimer = () => {
  let counter = 0;
  const minutesElement = document.querySelector('#minutes');
  const secondsElement = document.querySelector('#seconds');
  let seconds = 0;
  let minutes = 0;

  setInterval(() => {
    counter += 1;
    seconds = counter;

    if (counter === 59) {
      minutes += 1;
      counter = 0;
      seconds = 0;
    }

    secondsElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    minutesElement.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  }, 1000);
};

export default startTimer;
