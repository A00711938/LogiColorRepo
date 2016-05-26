/* Shape Drawer */

function square( obj, x1, y1, width, height, color) {
	obj.fillStyle = color;
	obj.fillRect( x1, y1, width, height);
	obj.fill();
}

function rectangle( obj, x1, y1, width, height, color) {
	obj.fillStyle = color;
	obj.fillRect( x1, y1, width, height);
	obj.fill();
}

function triangle( obj, x1, y1, x2, y2, x3, y3, color) {
	obj.fillStyle = color;
	obj.beginPath();
	obj.moveTo( x1, y1);
	obj.lineTo( x2, y2);
	obj.lineTo( x3, y3);
	obj.closePath();
	obj.fill();
}

function circle( obj, centerX, centerY, radius, startAngle, endAngle, color) {
	obj.fillStyle = color;
	obj.beginPath();
	obj.arc(centerX, centerY, radius, startAngle, endAngle);
	obj.fill();
}

function arc( obj, centerX, centerY, radius, startAngle, endAngle, color) {
	obj.fillStyle = color;
	obj.beginPath();
	obj.arc(centerX, centerY, radius, startAngle, endAngle);
	obj.fill();
}