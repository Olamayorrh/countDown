let targetDate = new Date("2024-02-28 00:00:00").getTime();
console.log(targetDate);

let launch = setInterval(function(){
    let currentDate = new Date().getTime();
    let timeRem = targetDate - currentDate;

    const days = Math.floor(timeRem/(86400000));
    const hours = Math.floor((timeRem % (86400000)) / (3600000));
    const minutes = Math.floor((timeRem % (86400000)) / (60000));
    const seconds = Math.floor((timeRem % (86400000)) / (1000));

    document.querySelector(".day").textContent = days;
    document.querySelector(".hour").textContent = hours;
    document.querySelector(".minute").textContent = minutes;
    document.querySelector(".second").textContent = seconds;

    if(timeRem <=0){
        clearInterval()
        document.querySelector('.count').textContent = "Hurray! We are live"
    }
},1000)