function updateClock(){
    const now = new Date();
    let hour = now.getHours();
    let meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    const minute = now.getMinutes().toString().padStart(2, 0);
    const second = now.getSeconds().toString().padStart(2, 0);
    const clock = document.getElementById("clock");
    clock.textContent = `${hour}:${minute}:${second} ${meridiem}`
}

function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

window.onload = initClock;

function dayToDate(){
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const date = new Date(year, month, day);
    
    let res = '';

    const result = document.getElementById("result");

    switch(date.getDay()){
        case 0:
            res = "Saturday";
            break;

        case 1:
            res = "Sunday";
            break;

        case 2:
        res = "Monday";
        break;

        case 3:
        res = "Tuesday";
        break;

        case 4:
            res = "Wednesday";
            break;

        case 5:
            res = "Thursday";
            break;

        case 6:
            res = "Friday";
    }

    result.textContent = res;
};
