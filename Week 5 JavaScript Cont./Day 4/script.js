let a = new Date();
console.log(a);
//document.write(a);

let b = new Date(85,9,21,16,23,45);
console.log(b);
//document.write(b);

let c = new Date("1800, 10, 21");
console.log(c);
//document.write(c);

const date = a.toLocaleString('default', {day: "2-digit", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h12"});
const month =a.toLocaleString('default', { month:'long'});
const year = a.getFullYear();
console.log(date);
console.log(month);
console.log(year);

document.getElementById("date").innerText = date;
document.getElementById("month").innerText = month;
document.getElementById("year").innerText = year;


function updatingClock() {
    var currentTime = new Date(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        year = currentTime.getFullYear(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
        
    document.getElementById("text").innerHTML = text;
}

setInterval(updatingClock, 1000);
