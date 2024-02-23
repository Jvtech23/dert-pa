const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
const alarms = [
    "Device Num 03 14-10-22 14:09:32 Sensor Num 10 10 Ω High",
    "Device Num 12 12-10-22 20:09:12 Sensor Num 07 5 Ω High",
    "Device Num 12 22-10-22 10:08:42 Sensor Num 07 25 Ω High"
];

const alarmInfoContainer = document.getElementById("alarm-info");

function showNextAlarm() {
    const nextAlarm = alarms.shift(); // Remove and get the next alarm
    if (nextAlarm) {
        const alarmItem = document.createElement("div");
        alarmItem.classList.add("alarm-item");
        alarmItem.textContent = nextAlarm;
        alarmInfoContainer.appendChild(alarmItem);
        alarmInfoContainer.classList.add("show"); // Show the container
    } else {
        clearInterval(interval); // Stop the timer if all alarms have been shown
    }
}

// Initial call to show the first alarm immediately
showNextAlarm();

// Set up a timer to show the next alarm every 3 seconds (adjust as needed)
const interval = setInterval(showNextAlarm, 3000);

const sensorValue = document.getElementById('sensor1');
const sensorInput = document.getElementById('sensorInput');

sensorInput.addEventListener('input', function() {
    const value = parseFloat(this.value); // Get the entered value
    if (isNaN(value) || value < 0 || value > 10) return; // Validate the value
    setSensorValue(value);
});

function setSensorValue(value) {
    const percentage = (value / 10) * 100; // Calculate percentage
    sensorValue.style.height = percentage + '%'; // Set height dynamically
    // Adjust color based on value
    if (value >= 1) {
        sensorValue.style.backgroundColor = 'green';
    } else {
        sensorValue.style.backgroundColor = 'red';
    }
    sensorValue.innerText = value + 'Ω'; // Set text dynamically
}

// Initial call to set the sensor value
setSensorValue(1); // Set the initial value to 1Ω
