console.log('ﾁﾗｯ…');

var px = 0, py = 0;

function onMove(e) {
    console.log("move");
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    console.log("x:", x, "y:", y);

    drawLine(x, y, px, py);

    px = x;
    py = y;
}

function drawRect(x, y, width, height) {
    var context = canvas.getContext('2d');
    context.fillRect(x, y, width, height);
}

function drawLine(fx, fy, tx, ty) {
    var context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(fx, fy);
    context.lineTo(tx, ty);
    context.closePath();
    context.lineWidth = 3;
    context.stroke();
}
