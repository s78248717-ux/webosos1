window.alert("This is my Web Os");
window.alert("The taskbar contains clickable websites");
window.alert("The home button will take you to the google.com website");
window.alert("The settings button will take you to the your browser settings");
window.alert("The internet button will take you to the wikipedia website and file button takes you to github,the rest are youtube,github,twitter,reddit and discord,respectively");
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    // Add leading zeros if less than 10
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();   

