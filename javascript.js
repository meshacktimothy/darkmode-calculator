const answer = document.getElementById("answer");

function appendToDisplay(input) {
    answer.value += input;
}

function cleardisplay() {
    answer.value = answer.value.slice(0, -1);
}

function reset() {
    answer.value = "";
}

function calculate() {
    try {
        answer.value = eval(answer.value);
    } catch (error) {
        answer.value = "Error";
    }

}

var togglebtn = document.getElementById("togglebtn");

togglebtn.onclick = function () {
    togglebtn.classList.toggle("active");
    document.body.classList.toggle("equal");
    // body.classList.toggle("body")
}


