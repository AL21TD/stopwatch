let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
let timer = false;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
    hideAlerts();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    showAlert('info');
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    showAlert('danger');
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        document.getElementById('hr').innerHTML = pad(hour);
        document.getElementById('min').innerHTML = pad(minute);
        document.getElementById('sec').innerHTML = pad(second);
        document.getElementById('count').innerHTML = pad(count);
        setTimeout(stopWatch, 10);
    }
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

function showAlert(type) {
    const alertElement = document.getElementById('alert-' + type);
    hideAlerts(); // Versteckt alle sichtbaren Alerts
    alertElement.classList.remove('hidden');

    // Setzt einen Timer, um den Alert nach 2 Sekunden zu verstecken
    setTimeout(function () {
        alertElement.classList.add('hidden');
    }, 2000); // 2000 Millisekunden = 2 Sekunden
}


function hideAlerts() {
    document.getElementById('alert-info').classList.add('hidden');
    document.getElementById('alert-danger').classList.add('hidden');
}
