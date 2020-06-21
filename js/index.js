console.log('ﾁﾗｯ…');

function command_yes() {
    var textElem = document.getElementById("command_yes");
    textElem.style.display = "block";

    var buttonElem = document.getElementById("command_button");
    buttonElem.style.display = "none";
}

function command_no() {
    var textElem = document.getElementById("command_no");
    textElem.style.display = "block";

    var buttonElem = document.getElementById("command_button");
    buttonElem.style.display = "none";
}

function command_you_known() {
    window.location.href = 'you_known.html';
}