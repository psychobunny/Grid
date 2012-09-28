
var grid;

function init() {
	"use strict";
	/*global Grid*/

	grid = new Grid('grid');
	grid.render("#ddd", 1, 10, 10);
}

function test() {
	"use strict";
	/*global document, window*/

	var count = 100, interval, ctx;

	ctx = document.getElementById('grid').getContext('2d');

	interval = window.setInterval(function () {
		count -= 4;
		ctx.clearRect(0, 0, 860, 600);

		grid.render("#ddd", 1, count, count);

		if (count < 5) {
			window.clearInterval(interval);
		}
	}, 50);
}
window.onload = init;