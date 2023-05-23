/*

Steps to create stop watch :-
1. Create 3 buttons start,stop,reset
2. Add functionality to buttons (on going)
3. Clicking Stop should pause the timer. if clicked on start again it should unpause.
*/

const timeElement = document.querySelector('.time');
let timeInterval;
let watch = {
  hour: 0,
  min: 0,
  sec: 0
};
let isIntervalOngoing = false;
timeElement.innerHTML = getTime();
const startElement = document.querySelector('.start-button');
const resetElement = document.querySelector('.reset-button');

function getTime() {
  let hr = String(watch.hour).padStart(2, '0');
  let min = String(watch.min).padStart(2, '0');
  let sec = String(watch.sec).padStart(2, '0');
  return `${hr}:${min}:${sec}`;
}

const resetInterval = () => {
  clearInterval(timeInterval);
  isIntervalOngoing = false;
};

const setStart = () => {
  startElement.innerHTML = '<img class="start-icon" src="images/start.png">';
}
const setStop = () => {
  startElement.innerHTML = '<img class="start-icon" src="images/pause.png">';
}

const setResetStyleOn = () => {
  resetElement.classList.remove('reset-off-button');
  resetElement.classList.add('reset-on-button');
}

const setResetStyleOff = () => {
  resetElement.classList.remove('reset-on-button');
  resetElement.classList.add('reset-off-button');
}

document.querySelector('.start-button')
  .addEventListener('click', () => {

    if (startElement.innerHTML.includes('pause.png')) {
      resetInterval();
      setStart();
      return;
    } else if (isIntervalOngoing) {
      return;
    }

    setStop();
    setResetStyleOn();
    isIntervalOngoing = true;

    timeInterval = setInterval(() => {
      watch.sec += 1;

      if (watch.sec === 60) {
        watch.min += 1;
        watch.sec = 0;
      } else if (watch.min === 60) {
        watch.hour += 1;
        watch.hour = 0;
      }

      timeElement.innerHTML = getTime();
    }, 1000);
    }
  );


  // document.querySelector('.stop-button')
  // .addEventListener('click', () => {
  //   resetInterval();
  // });

  document.querySelector('.reset-button')
  .addEventListener('click', () => {
    resetInterval();
    setStart();
    setResetStyleOff();
    watch.hour = 0;
    watch.min = 0;
    watch.sec = 0;
    timeElement.innerHTML = getTime();
  });