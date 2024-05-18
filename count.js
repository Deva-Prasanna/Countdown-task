
function countdown(num, callback) {
    if (num > 0) {
        setTimeout(function () {
            document.getElementById('countdown').innerText = num;
            countdown(num - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function () {
    setTimeout(function () {
        document.getElementById('countdown').innerText = "Happy Independence Day!";
    }, 1000);
});
