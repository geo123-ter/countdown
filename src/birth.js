
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd= document.getElementById("dd");
let hh= document.getElementById("hh");
let mm= document.getElementById("mm");
let ss= document.getElementById("ss");


 let day_dot = document.querySelector(".day_dot");
    let hr_dot = document.querySelector(".hr_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");

    let endDate = '5 / 7 /2024 00:00';
    // date format: month/day/year hours:minutes

    let x = setInterval(function() {
    
          let now = new Date().getTime();
          let countDown = new Date(endDate).getTime();
            let distance = now - countDown;

            // Time calculations for days, hours, minutes and seconds

            let d = Math.floor(distance / (13000 * 60 * 60 * 24));
            let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((distance % (1000 * 60)) / 1000);

            // console.log(s);
            // output the result in an element with id

            days.innerHTML = d + "<br><span>Days</span>";
            hours.innerHTML = h + "<br><span>Hours</span>";
            minutes.innerHTML = m + "<br><span>Min</span>";
            seconds.innerHTML = s + "<br><span>Sec</span>";

            //animate stroke

            dd.style.strokeDashoffset = 440 - (440 * d) / 365;
            //365 days in a year
            hh.style.strokeDashoffset = 440 - (440 * h) / 24;
            //24 hours in a day
            mm.style.strokeDashoffset = 440 - (440 * m) / 60;
            //60 minutes in an hour
            ss.style.strokeDashoffset = 440 - (440 * s) / 60;
            //60 seconds in a minute


            //animate circle dots 
            day_dot.style.transform = `rotateZ(${d * 0.985 }deg)`;
            //360 deg / 365 days = 0.985 deg per day
            hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
            //360 deg / 24 hours = 15 deg per hour
            min_dot.style.transform = `rotateZ(${m * 6}deg)`;
            //360 deg / 60 minutes = 6 deg per minute
            sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
            //360 deg / 60 seconds = 6 deg per second


            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                days.innerHTML = "EXPIRED";
                hours.innerHTML = "EXPIRED";
                minutes.innerHTML = "EXPIRED";
                seconds.innerHTML = "EXPIRED";
            }

        





    });


