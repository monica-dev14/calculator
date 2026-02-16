let outputscreen = document.getElementById("outputscreen");

function display(num) {
    outputscreen.value += num;
}

function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch (err) {
        alert("Invalid Calculation");
        outputscreen.value = "";
    }
}

function clearscreen() {
    outputscreen.value = "";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
    let btn = document.getElementById("toggle-btn");
    
    if (document.body.classList.contains("dark-theme")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}