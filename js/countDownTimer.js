const countDownTimer = function (id, date) {
  let dateSetting = new Date(date);
  let secondSetting = 1000;
  let minuteSetting = secondSetting * 60;
  let hourSetting = minuteSetting * 60;
  let daySetting = hourSetting * 24;
  let timer;

  function showRemaining() {
    let now = new Date();
    let distDt = dateSetting - now;

    if (distDt < 0) {
      clearInterval(timer);
      document.getElementById(id).textContent =
        "해당 이벤트가 종료 되었습니다!";
      return;
    }

    let days = Math.floor(distDt / daySetting);
    let hours = Math.floor((distDt % daySetting) / hourSetting);
    let minutes = Math.floor((distDt % hourSetting) / minuteSetting);
    let seconds = Math.floor((distDt % minuteSetting) / secondSetting);

    document.getElementById(id).textContent = days + "일 ";
    document.getElementById(id).textContent += hours + "시간 ";
    document.getElementById(id).textContent += minutes + "분 ";
    document.getElementById(id).textContent += seconds + "초";
  }

  timer = setInterval(showRemaining, 1000);
};

let tomorrowTimer = new Date();
tomorrowTimer.setDate(tomorrowTimer.getDate() + 1);
let dayAfterTomorrowTimer = new Date();
dayAfterTomorrowTimer.setDate(dayAfterTomorrowTimer.getDate() + 2);
countDownTimer("timer1", tomorrowTimer);
countDownTimer("timer2", dayAfterTomorrowTimer);
countDownTimer("timer3", dayAfterTomorrowTimer);
