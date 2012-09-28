Grid JS is an HTML5 (canvas) based grid drawing program that utilizes SVG and createPattern for maximum performance. It is more efficient than drawing several lines across the canvas. Each grid pattern is cached, allowing for re-drawing at a high framerate.

All code is MIT licensed: http://opensource.org/licenses/mit-license.php

Created by Andrew Rodrigues (psychobunny).


Usage
------

Include the script in your HTML document:

  <script src="grid.js"></script>

Pass in a reference or ID (string) of the target canvas into the Grid constructor:

  var grid = new Grid('myCanvas');

Render the canvas with the desired options:

  grid.render("#ddd", 1, 10, 10);