function updataTime() {
    const hoursEl = document.querySelector(".hours");
    const minEl = document.querySelector(".minutes");
    const secEl = document.querySelector(".secands");
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    hoursEl.innerHTML = hours;
    minEl.innerHTML = minutes;
    secEl.innerHTML = seconds;

    const dateEl = document.querySelector(".date-his");
    let date = d.getDate();
    if (date >= 0 && date <= 9) {
        date = "0" + date;
    }
    let month = d.getMonth() + 1;
    if (month >= 0 && month <= 9) {
        month = "0" + month;
    }
    let year = d.getFullYear();
    dateEl.innerHTML = `${date} / ${month} / ${year}`;

    const dayEl = document.querySelector(".day");
    let dayNumber = d.getDay(), day = "";
    switch (dayNumber) {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesdaty"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thrusday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }
    dayEl.innerHTML = day;
}

setInterval(updataTime, 1000);