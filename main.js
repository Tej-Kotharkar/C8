
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var actual = document.getElementById("radius").value; 

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var radius = 20; 
var color = "black";
var width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    var actual = document.getElementById("radius").value; 
    width_of_line = document.getElementById("width").value;
    color = document.getElementById("color").value;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.lineWidth = 2;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, actual, 0, 2 * Math.PI);
        ctx.stroke();
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + " y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}