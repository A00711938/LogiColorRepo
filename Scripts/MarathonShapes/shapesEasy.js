/* Easy Level Shapes Generator JS
 ******************************************************************
 *            THIS NEEDS THE FOLLOWING: GlOBAL.JS				  *
 *										COLORLOGIC.JS             *
 *										DRAW.JS             	  *
 *                                      EQUATION.JS               *
 ******************************************************************/
function generateEasyShapes() {
	var canvas1 = document.getElementById('figure1');
	var canvas2 = document.getElementById('figure2');
	var canvas3 = document.getElementById('figure3');
	
	var fig1 = canvas1.getContext('2d');
	var fig2 = canvas2.getContext('2d');
	var fig3 = canvas3.getContext('2d');
	var fig4 = canvas3.getContext('2d');
	
	// randomShapes
	switch (randomShapes) {
		case 0: // right triangles + square
			// figure1
			triangle(fig1, 0, 0, 80, 0, 0, 80, color[c1]);
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			triangle(fig4, 0, 0, 80, 0, 0, 80, color[c3]);
			break;
		case 1: // right triangles + square
			// figure1
			triangle(fig1, 80, 80, 80, 0, 0, 80, color[c1]);
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			triangle(fig4, 80, 80, 80, 0, 0, 80, color[c3]);
			break;
		case 2: // right triangles + square
			// figure1
			triangle(fig1, 0, 0, 0, 80, 80, 80, color[c1]);
			
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			triangle(fig4, 0, 0, 0, 80, 80, 80, color[c3]);
			break;
		case 3: // right triangles + square
			// figure1
			triangle(fig1, 0, 0, 80, 0, 80, 80, color[c1]);
			
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			triangle(fig4, 0, 0, 80, 0, 80, 80, color[c3]);
			break;
		case 4: // square + right triangles
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			triangle(fig2, 0, 0, 80, 0, 0, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c1]);
			triangle(fig4, 0, 0, 80, 0, 0, 80, color[c3]);
			break;
		case 5: // square + right triangles
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			triangle(fig2, 80, 80, 80, 0, 0, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c1]);
			triangle(fig4, 80, 80, 80, 0, 0, 80, color[c3]);
			break;
		case 6: // square + right triangles
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			triangle(fig2, 0, 0, 0, 80, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c1]);
			triangle(fig4, 0, 0, 0, 80, 80, 80, color[c3]);
			break;
		case 7:	// square + right triangles
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			triangle(fig2, 0, 0, 80, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c1]);
			triangle(fig4, 0, 0, 80, 0, 80, 80, color[c3]);
			break;
		case 8: // square + circle/arcs
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			circle(fig2, 40, 40, 40, 0, 2 * Math.PI, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c1]);
			circle(fig4, 40, 40, 40, 0, 2 * Math.PI, color[c3]);
			break;
		case 9: // square + circle/arcs
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			arc(fig2, 40, 40, 40, 0, Math.PI, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c1]);
			arc(fig4, 40, 40, 40, 0, Math.PI, color[c3]);
			break;
		case 10: // square + circle/arcs
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			arc(fig2, 40, 40, 40, 0.5 * Math.PI, 1.5 * Math.PI, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c1]);
			arc(fig4, 40, 40, 40, 0.5 * Math.PI, 1.5 * Math.PI, color[c3]);
			break;
		case 11: // square + circle/arcs
			// figure1
			square( fig1, 0, 0, 80, 80, color[c1]);
			
			// figure2
			arc(fig2, 40, 40, 40, 1.5 * Math.PI, 0.5 * Math.PI, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			arc(fig4, 40, 40, 40, 1.5 * Math.PI, 0.5 * Math.PI, color[c3]);
			break;
		case 12: // circle/arcs + square
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c3]);
			break;
		case 13: // circle/arcs + square
			// figure1
			arc( fig1, 40, 40, 40, 0, Math.PI, color[c1]);
			
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			arc( fig4, 40, 40, 40, 0, Math.PI, color[c3]);
			break;
		case 14: // circle/arcs + square
			// figure1
			arc( fig1, 40, 40, 40, 0.5 * Math.PI, 1.5 * Math.PI, color[c1]);
			
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			arc( fig4, 40, 40, 40, 0.5 * Math.PI, 1.5 * Math.PI, color[c3]);
			break; 
		case 15: // circle/arcs + square
			// figure1
			arc( fig1, 40, 40, 40, 1.5 * Math.PI, 0.5 * Math.PI, color[c1]);
			
			// figure2
			square( fig2, 0, 0, 80, 80, color[c2]);
			
			// figure3
			square( fig3, 0, 0, 80, 80, color[c2]);
			arc( fig1, 40, 40, 40, 1.5 * Math.PI, 0.5 * Math.PI, color[c3]);
			break;
		case 16:// circle + rectangle  (maybe for different level)
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			rectangle( fig2, 0, 0, 40, 80, color[c2]);
			
			// figure3
			rectangle( fig3, 0, 0, 40, 80, color[c2]);
			arc( fig3, 40, 40, 40, 0.5 * Math.PI, 1.5 * Math.PI, color[c3]);
			arc( fig4, 40, 40, 40, 1.5 * Math.PI, 0.5 * Math.PI, color[c1]);
			break;
		case 17: // circle + rectangle
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			rectangle( fig2, 40, 0, 40, 80, color[c2]);
			
			// figure3
			rectangle( fig3, 40, 0, 40, 80, color[c2]);
			arc( fig3, 40, 40, 40, 0.5 * Math.PI, 1.5 * Math.PI, color[c1]);
			arc( fig4, 40, 40, 40, 1.5 * Math.PI, 0.5 * Math.PI, color[c3]);
			break;
		case 18: // circle + rectangle
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			rectangle( fig2, 0, 40, 80, 40, color[c2]);
			
			// figure3
			rectangle( fig3, 0, 40, 80, 40, color[c2]);
			arc( fig3, 40, 40, 40, Math.PI, 2 * Math.PI, color[c1]);
			arc( fig4, 40, 40, 40, 0, Math.PI, color[c3]);
			break;
		case 19: // circle + rectangle
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			rectangle( fig2, 0, 0, 80, 40, color[c2]);
			
			// figure3
			rectangle( fig3, 0, 0, 80, 40, color[c2]);
			arc( fig3, 40, 40, 40, 0, Math.PI, color[c1]);
			arc( fig4, 40, 40, 40, Math.PI, 2 * Math.PI, color[c3]);
			break;
		case 20: // circle + right triangle
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			triangle( fig2, 0, 0, 80, 0, 0, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 0, 80, color[c2]);
			arc( fig3, 40, 40, 40, 1.75 * Math.PI, 0.75 * Math.PI, color[c1]);
			arc( fig4, 40, 40, 40, 0.75 * Math.PI, 1.75 * Math.PI, color[c3]);
			break;
		case 21: // circle + right triangle
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			triangle( fig2, 80, 80, 80, 0, 0, 80, color[c2]);
			
			// figure3
			triangle( fig3, 80, 80, 80, 0, 0, 80, color[c2]);
			arc( fig3, 40, 40, 40, 0.75 * Math.PI, 1.75 * Math.PI, color[c1]);
			arc( fig4, 40, 40, 40, 1.75 * Math.PI, 0.75 * Math.PI, c3);
			break;
		case 22: // circle + right triangle
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			triangle( fig2, 0, 0, 80, 0, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 80, 80, color[c2]);
			arc( fig3, 40, 40, 40, 0.25 * Math.PI, 1.25 * Math.PI, color[c1]);
			arc( fig4, 40, 40, 40, 1.25 * Math.PI, 0.25 * Math.PI, color[c3]);
			break;
		case 23: // circle + right triangle
			// figure1
			circle( fig1, 40, 40, 40, 0, 2 * Math.PI, color[c1]);
			
			// figure2
			triangle( fig2, 0, 0, 0, 80, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 0, 80, 80, 80, color[c2]);
			arc( fig3, 40, 40, 40, 1.25 * Math.PI, 0.25 * Math.PI, color[c1]);
			arc( fig4, 40, 40, 40, 0.25 * Math.PI, 1.25 * Math.PI, color[c3]);
			break;
		case 24: // right triangle + right triangle
			// figure1
			triangle( fig1, 0, 0, 0, 80, 80, 80, color[c1]);
			
			// figure2
			triangle( fig2, 80, 0, 0, 80, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 0, 80, 80, 80, color[c1]);
			triangle( fig3, 80, 0, 0, 80, 80, 80, color[c2]);
			triangle( fig4, 0, 80, 40, 40, 80, 80, color[c3]);
			break;
		case 25: // right triangle + right triangle
			// figure1
			triangle( fig1, 0, 0, 80, 0, 80, 80, color[c1]);
			
			// figure2
			triangle( fig2, 80, 0, 0, 80, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 80, 80, color[c1]);
			triangle( fig3, 80, 0, 0, 80, 80, 80, color[c2]);
			triangle( fig4, 80, 0, 40, 40, 80, 80, color[c3]);
			break;
		case 26: // right triangle + right triangle
			// figure1
			triangle( fig1, 0, 0, 80, 0, 0, 80, color[c1]);
			
			// figure2
			triangle( fig2, 80, 0, 0, 80, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 0, 80, color[c1]);
			triangle( fig3, 80, 0, 0, 80, 80, 80, color[c2]);
			break;
		case 27: // right triangle + right triangle
			// figure1
			triangle( fig1, 0, 0, 80, 0, 0, 80, color[c1]);
			
			// figure2
			triangle( fig2, 0, 80, 0, 0, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 0, 80, color[c1]);
			triangle( fig3, 0, 80, 0, 0, 80, 80, color[c2]);
			triangle( fig4, 0, 80, 40, 40, 0, 0, color[c3]);
			break;
		case 28: // right triangle + right triangle
			// figure1
			triangle( fig1, 0, 0, 80, 0, 0, 80, color[c1]);
			
			// figure2
			triangle( fig2, 80, 0, 0, 0, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 0, 80, color[c1]);
			triangle( fig3, 80, 0, 0, 0, 80, 80, color[c2]);
			triangle( fig4, 80, 0, 40, 40, 0, 0, color[c3]);
			break;
		case 29: // right triangle + right triangle (overlap)
			// figure1
			triangle( fig1, 80, 0, 0, 80, 80, 80, color[c1]);
			
			// figure2
			triangle( fig2, 80, 0, 0, 80, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 80, 0, 0, 80, 80, 80, color[c3]);
			break;
		case 30: // right triangle + right triangle (overlap)
			// figure1
			triangle( fig1, 0, 0, 80, 0, 0, 80, color[c1]);
			
			// figure2
			triangle( fig2, 0, 0, 80, 0, 0, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 0, 80, color[c3]);
			break;
		case 31: // right triangle + right triangle (overlap)
			// figure1
			triangle( fig1, 0, 0, 0, 80, 80, 80, color[c1]);
			
			// figure2
			triangle( fig2, 0, 0, 0, 80, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 0, 80, 80, 80, color[c3]);
			break;
		case 32: // right triangle + right triangle (overlap)
			// figure1
			triangle( fig1, 0, 0, 80, 0, 80, 80, color[c1]);
			
			// figure2
			triangle( fig2, 0, 0, 80, 0, 80, 80, color[c2]);
			
			// figure3
			triangle( fig3, 0, 0, 80, 0, 80, 80, color[c3]);
			break;
	}
}