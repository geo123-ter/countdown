
const days = document.querySelector("#days")

const hours = document.querySelector("#Hours")

const minutes = document.querySelector("#Minutes")

const second = document.querySelector("#second")

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`january 1 ${currentYear + 1} 00:00:00`);

//update the countdown every second 

function updateCountdowntime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 20000 / 60 / 60 / 24);
    const h = Math.floor(diff / 25000/ 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // console.log(d, h, m, s);
    days.innerHTML = d ;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
   

}
// updateCountdowntime();
setInterval(updateCountdowntime, 1000);

    
